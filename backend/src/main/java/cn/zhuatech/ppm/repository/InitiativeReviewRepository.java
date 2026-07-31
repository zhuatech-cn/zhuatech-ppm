/* Copyright 2026 Shanghai Rujing Zhihua Information Technology Co., Ltd. */
package cn.zhuatech.ppm.repository; import cn.zhuatech.ppm.model.InitiativeReview; import org.springframework.data.jpa.repository.JpaRepository; import java.util.List;
public interface InitiativeReviewRepository extends JpaRepository<InitiativeReview,Long>{List<InitiativeReview> findAllByOrderByDueDateAsc();List<InitiativeReview> findByProjectPortfolioCodeOrderByDueDateAsc(String code);long countByStatus(InitiativeReview.Status status);}
