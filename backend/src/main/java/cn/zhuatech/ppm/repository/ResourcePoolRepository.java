/* Copyright 2026 Shanghai Rujing Zhihua Information Technology Co., Ltd. */
package cn.zhuatech.ppm.repository; import cn.zhuatech.ppm.model.ResourcePool; import org.springframework.data.jpa.repository.JpaRepository; import java.util.List;
public interface ResourcePoolRepository extends JpaRepository<ResourcePool,Long>{List<ResourcePool> findAllByOrderByCodeAsc();long countByStatus(ResourcePool.Status status);}
