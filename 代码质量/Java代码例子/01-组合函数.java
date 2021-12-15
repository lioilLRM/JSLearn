
/**
 1.  组合函数是什么？
  组合函数要求所有的公有函数（入口函数）读起来像一系列执行步骤的概要，而这些步骤
  的真正实现细节是在私有函数里面。
  
2. 使用组合函数的好处？
  组合函数有助于代码保持精炼并易于复用。
  阅读这样的代码就像在看一本书，入口函数是目录，目录的内容指向各自的私有函数，而具体的内
  容是在私有函数里实现的。
 */

public static void copyProperties(Object source, Object target, Class <?> editable, String... ignoreProperties)throws  BeansException {
        Assert.notNull(source, "Source must not be null");
        Assert.notNull(target, "Target must not be null");
        Class<?> actualEditable = target.getClass();
        if  (editable != null ) {
            if  (!editable.isInstance(target)) {
                throw new
 IllegalArgumentException("Target class [" + target.getClass().getName() +"] not assignable to Editable class [" + editable. getName() + "]");
            }
            actualEditable = editable;
        }
        PropertyDescriptor[] targetPds = getPropertyDescriptors(actualEditable);
        List<String> ignoreList = (ignoreProperties != null? Arrays. asList(ignoreProperties) : null );
        for  (PropertyDescriptor targetPd : targetPds) {
            Method writeMethod = targetPd.getWriteMethod();
            if  (writeMethod != null  && (ignoreList == null  || !ignoreList. contains(targetPd.getName()))) {
                PropertyDescriptor sourcePd = getPropertyDescriptor (source.getClass(), targetPd.getName());
                if  (sourcePd != null ) {
                    Method readMethod = sourcePd.getReadMethod();
                    if  (readMethod != null  &&ClassUtils.isAssignable(writeMethod.getParameterTypes()[0], readMethod.getReturnType())) {
                        try  {
                            if  (!Modifier.isPublic(readMethod. getDeclaringClass().getModifiers())) {
                                readMethod.setAccessible( true );
                            }
                            Object value = readMethod.invoke(source);
                            if  (!Modifier.isPublic(writeMethod. getDeclaringClass(). getModifiers())) {
                                writeMethod.setAccessible( true );
                            }
                            writeMethod.invoke(target, value);
                        }
                        catch  (Throwable ex) {
                            throw new  FatalBeanException(
                                    "Could not copy property '" + targetPd. getName() + "' from source to target", ex);
                        }
                    }
                }
            }
        }
    }

private  static void copyProperties(Object source, Object target, Class<?> editable, String... ignoreProperties){
        checkSourceAndTarget(source, target, editable);
        copySourceToTarget(source,getPropertyDescriptors(actualEditable));
}

private static void copySourceToTarget(Object source, PropertyDescriptor[] targetPds) {
        for (PropertyDescriptor targetPd : targetPds) {
            copyProperty(source, targetPd);
        }
}

private static void copyProperty(Object source, PropertyDescriptor targetPd) {
        Method writeMethod = getWriteMethodFromTarget(targetPd);
        Method readMethod = getReadMethodFromSource(source, targetPd);
        if  (canCopy(writeMethod, readMethod)) {
            doRealCopy(source, targetPd, writeMethod, readMethod);
        }
}
    private  static boolean canCopy(Method writeMethod, Method readMethod){
        return  readMethod != null &&
                ClassUtils.isAssignable(writeMethod.getParameterTypes() [0], readMethod.getReturnType());
    }
    private static Method getWriteMethodFromTarget(PropertyDescriptor targetPd){
        return  targetPd.getWriteMethod();
    }
    private static Method getReadMethodFromSource(Object source, PropertyDescriptor targetPd){
        PropertyDescriptor sourcePd = getPropertyDescriptor(source.getClass(), targetPd.getName());
        if (sourcePd == null ){
            return null ;
        }
        return  sourcePd.getReadMethod();
    }
    private static void doRealCopy(Object source, PropertyDescriptor targetPd, Method writeMethod, Method readMethod) {
    }