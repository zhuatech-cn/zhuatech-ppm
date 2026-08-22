/* Copyright 2026 Shanghai Rujing Zhihua Information Technology Co., Ltd. · https://www.zhuatech.cn/ */
package cn.zhuatech.ppm.model;
import jakarta.persistence.*; import java.time.LocalDateTime;
@Entity @Table(name="ppm_portfolio_risk") public class PortfolioRisk extends BaseEntity {
    public enum Result { PENDING, PASSED, FAILED }
    @Column(nullable=false,unique=true,length=32) private String portfolioRiskNo; @ManyToOne(optional=false,fetch=FetchType.LAZY) private InitiativeReview initiativeReview;
    @Column(nullable=false,length=30) private String portfolioRiskType; @Column(nullable=false) private int portfolioRiskQty; @Column(nullable=false) private int defectQty; @Enumerated(EnumType.STRING) @Column(nullable=false,length=20) private Result result;
    @Column(length=50) private String inspector; @Column(nullable=false) private LocalDateTime createdAt;
    protected PortfolioRisk(){} public PortfolioRisk(String portfolioRiskNo,InitiativeReview initiativeReview,String portfolioRiskType,int portfolioRiskQty,int defectQty,Result result,String inspector){this.portfolioRiskNo=portfolioRiskNo;this.initiativeReview=initiativeReview;this.portfolioRiskType=portfolioRiskType;this.portfolioRiskQty=portfolioRiskQty;this.defectQty=defectQty;this.result=result;this.inspector=inspector;this.createdAt=LocalDateTime.now();}
    public String getPortfolioRiskNo(){return portfolioRiskNo;} public InitiativeReview getInitiativeReview(){return initiativeReview;} public String getPortfolioRiskType(){return portfolioRiskType;} public int getPortfolioRiskQty(){return portfolioRiskQty;} public int getDefectQty(){return defectQty;} public Result getResult(){return result;} public String getInspector(){return inspector;}
}
