let a = {
  fieldName: 'batchPropertySet',
  label: '批次属性',
  forbid: false,
  type: 'multi-select',
  props: { children: 'roles', label: 'propertyName' },
  hover: false,
  titleName: 'groupName',
  placeholder: '请选择批次属性',
  hideCondition: '{"relation":"indexOf","field":"batch","dvalue":"true"}',
  fields: [{ type: 'input', title: '标题', value: 'label' }],
  fieldType: 0,
  table: 'batchProperty',
  fieldId: 'batchPropertySet',
}
