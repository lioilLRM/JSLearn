/**
     * ID
     */
    private Long id;

    /**
     * 检验记录主表ID
     */
    private Long rid;


    /**
     * 检验类型
     */
    @ApiModelProperty("检验类型")
    private Integer inspectionType;

    /**
     * 生产任务id
     */
    @ApiModelProperty("生产任务id")
    private Long productionJobId;

    /**
     * 质检方案id
     */
    @ApiModelProperty("质检方案id")
    private Long qualityPlanId;

    /**
     * 工单id
     */
    @ApiModelProperty("工单id")
    private Long productionOrderId;

    /**
     * 状态：0失效1未完成2完成
     */
    @ApiModelProperty("状态")
    private Integer taskStatus;
    @ApiModelProperty("物料id")
    private Long materialId;
    @ApiModelProperty("物料信息")
    private String materialIdNames;

    @ApiModelProperty(value = "采购订单id")
    private Long procurementOrderId;
    @ApiModelProperty(value = "采购批次")
    private String buyBatch;

    /**
     * 到货数量
     */
    private BigDecimal arrivalNumber;

    /**
     * 供应商ID
     */
    private Long supplierId;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    @ApiModelProperty(value = "到货时间")
    private LocalDateTime arrivalTime;

    @ApiModelProperty(value = "发货单号")
    private String deliveryOrderNo;
    @ApiModelProperty(value = "客户名称")
    private String customerName;
    @ApiModelProperty(value = "发货数量")
    private String deliveryCount;
    @ApiModelProperty(value = "发货数量")
    private String supplierIdNames;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    @ApiModelProperty(value = "发货时间")
    private LocalDateTime deliveryTime;

    private String creatorNames;
    private String unit;

    private LocalDateTime createTime;

    private String materialNames;
    private String specs;
    private String materialRfId;
    private String materialNo;

    private String deliveryTaskId;
    private String deliveryTaskItemId;

    /**
     * 工序任务ID
     */
    private String processJobId;

    /**
     * 工序ID
     */
    private String processId;

    /**
     * 资源ID
     */
    private String resourceId;

    /**
     * 资源类型 （1 工作中心 2 设备 3 工位 4 人员）
     */
    private Integer resourceType;

    /**
     * 资源名称
     */
    private String resourceName;

    /**
     * 工序前缀
     */
    private String prefixName;

    /**
     * 工序名称
     */
    private String processName;

    /**
     * 工作中心数据标题
     */
    private String workCenterIdNames;

    /**
     * 工作中心名称
     */
    private String workCenterName;

    /**
     * 工作中心id
     */
    private String workCenterId;

    /**
     * 资源数据标题
     */
    private String resourceIdNames;

    /**
     * 工单id
     */
    private String orderId;

    /**
     * 工单code
     */
    private String orderCode;

    /**
     * 所属部门id
     */
    private String deptId;

    /**
     * 所属部门名称
     */
    private String deptName;

    /**
     * 检验人员id
     */
    private String inspectId;

    /**
     * 检验人员名称
     */
    private String inspectName;

    /**
     * 检验时间
     */
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private LocalDateTime inspectTime;

    /**
     * 检验结果 0 不合格 1 合格
     */
    private String result;