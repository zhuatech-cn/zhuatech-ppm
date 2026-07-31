# Ppm 架构

版权所有 © 2026 上海如静知华信息科技有限公司。

浏览器通过 Vue 管理端或项目经理端访问 Spring Boot REST API。安全层完成 JWT 与角色鉴权，业务层负责项目评审、项目、资源池、复盘和结果记录，JPA/Flyway 管理 MySQL 数据。

管理端角色为 `PPM_DIRECTOR`、`QUALITY`、`ADMIN`；执行端角色为 `PROJECT_MANAGER`。正式部署建议将资源池连接置于独立采集服务，并隔离项目组合网络和办公网络。
