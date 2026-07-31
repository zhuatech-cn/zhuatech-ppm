/* Copyright 2026 Shanghai Rujing Zhihua Information Technology Co., Ltd. */
package cn.zhuatech.ppm.model;
import jakarta.persistence.*; import java.time.LocalDateTime;
@Entity @Table(name="ppm_resource_pool") public class ResourcePool extends BaseEntity {
    public enum Status { RUNNING, IDLE, MAINTENANCE, ALARM }
    @Column(nullable=false,unique=true,length=32) private String code; @Column(nullable=false,length=80) private String name; @ManyToOne(optional=false,fetch=FetchType.LAZY) private ProjectPortfolio projectPortfolio;
    @Enumerated(EnumType.STRING) @Column(nullable=false,length=20) private Status status; @Column(nullable=false) private int oee; @Column(nullable=false) private LocalDateTime lastHeartbeat;
    protected ResourcePool(){} public ResourcePool(String code,String name,ProjectPortfolio projectPortfolio,Status status,int oee){this.code=code;this.name=name;this.projectPortfolio=projectPortfolio;this.status=status;this.oee=oee;this.lastHeartbeat=LocalDateTime.now();}
    public String getCode(){return code;} public String getName(){return name;} public ProjectPortfolio getProjectPortfolio(){return projectPortfolio;} public Status getStatus(){return status;} public int getOee(){return oee;} public LocalDateTime getLastHeartbeat(){return lastHeartbeat;}
}
