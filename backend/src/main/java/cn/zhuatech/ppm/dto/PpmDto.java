/* Copyright 2026 Shanghai Rujing Zhihua Information Technology Co., Ltd. */
package cn.zhuatech.ppm.dto;
import jakarta.validation.constraints.*; import java.time.*; import java.util.List;
public final class PpmDto { private PpmDto(){}
    public record Metric(String label,String value,String hint,String tone){}
    public record InitiativeReviewView(Long id,String orderNo,String productCode,String productName,String projectPortfolio,String workshop,int plannedQty,int completedQty,int defectQty,LocalDate dueDate,String status,String batchNo,int progress){}
    public record ControlView(String code,String name,String projectPortfolio,String status,int oee,LocalDateTime lastHeartbeat){}
    public record PortfolioRiskView(String portfolioRiskNo,String orderNo,String productName,String portfolioRiskType,int portfolioRiskQty,int defectQty,String result,String inspector){}
    public record Dashboard(List<Metric> metrics,List<InitiativeReviewView> initiativeReviews,List<ControlView> resourcePool,List<PortfolioRiskView> portfolioRisks){}
    public record ReportRequest(@NotBlank String operationName,@Positive int goodQty,@PositiveOrZero int defectQty,@Size(max=200) String remark){}
    public record ReportResult(String orderNo,int completedQty,int defectQty,int progress,String status){}
}
