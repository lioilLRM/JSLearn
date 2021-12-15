public  List<Product> getProducts(List<Long> productIds) {
        List<Product> products = new  ArrayList(productIds.size());
        // 查询有哪些未命中的商品ID
        List<Long> notHitIds = productIds.stream().filter(productId -> {
            String cacheKey = computeKey(productId);
            // 从缓存中进行查找
            Result<DataEntry> result = tairManager.get(namespace, cacheKey);
            if  (!result.isSuccess()) {
                log.error( String.format("tair get with key(%s) cause error: %s", cacheKey, result.getRc().getMessage()));
                return true ;
            }
            if  (ResultCode.DATANOTEXSITS.equals(result.getRc())) {
                return true ;
            }
            Product product = result.getValue() == null ? null: result. getValue().getValue();
            if (product == null ) {
                return true ;
            }
            products.add(product);
            return false ;
        }).collect(Collectors.toList());
        // 未命中缓存的商品ID从DB中查找
        List<Product>productsFromDB = notHitIds.stream().map(productId -> getProductsFromDb(productId)).collect(Collectors.toList());
        products.addAll(productsFromDB);

        return  products;
    }