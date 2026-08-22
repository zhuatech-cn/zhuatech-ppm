/* Copyright 2026 Shanghai Rujing Zhihua Information Technology Co., Ltd. · https://www.zhuatech.cn/ */
package cn.zhuatech.ppm.repository; import cn.zhuatech.ppm.model.ProjectPortfolio; import org.springframework.data.jpa.repository.JpaRepository; import java.util.Optional;
public interface ProjectPortfolioRepository extends JpaRepository<ProjectPortfolio,Long>{Optional<ProjectPortfolio> findByCode(String code);}
