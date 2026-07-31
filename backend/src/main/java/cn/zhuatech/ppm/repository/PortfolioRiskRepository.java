/* Copyright 2026 Shanghai Rujing Zhihua Information Technology Co., Ltd. */
package cn.zhuatech.ppm.repository; import cn.zhuatech.ppm.model.PortfolioRisk; import org.springframework.data.jpa.repository.JpaRepository; import java.util.List;
public interface PortfolioRiskRepository extends JpaRepository<PortfolioRisk,Long>{List<PortfolioRisk> findTop10ByOrderByIdDesc();long countByResult(PortfolioRisk.Result result);}
