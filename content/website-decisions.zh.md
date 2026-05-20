# nowake.ai 官网第一版决策

本文档根据 `website-questionnaire.zh.md` 的填写结果整理，用作第一版官网的信息架构、内容策略和视觉探索约束。

## 1. 总体定位

nowake.ai 第一版官网应呈现为一个 **AI-native operations 方向的开源组织 / 技术实验室**，但不能有强烈的 AI SaaS 味。

AI 是组织的方法和能力之一，不是首屏炫技主题。网站应强调：

- open-source
- infrastructure
- operations
- Kubernetes / cloud-native
- AI-assisted / AI-native
- automation
- auditability

同时应避免：

- 替代运维人员
- 完全自动化运维
- 永远不会被叫醒
- AI magic
- 过度商业 SaaS 表达
- 过重的告警处理叙事
- 过重的 AI agent 叙事
- 无法量化的 AI 效果承诺

## 2. 首页核心任务

首页第一版要解决三件事：

1. 让用户理解 nowake.ai 的组织使命和长期路线。
2. 让用户看到当前有哪些项目，以及它们为什么属于同一条路线。
3. 建立 nowake.ai 的品牌气质和视觉语言。

kube-insight 是当前主推项目，但首页不应变成 kube-insight 官网。首页只中等突出 kube-insight，把它放在 Active Projects 的第一张卡或相关区域；详细内容放进单独项目页。

## 3. 页面结构

第一版网站页面：

- `/` Home
- `/projects` 项目总览和 roadmap
- `/projects/kube-insight` kube-insight 项目专页
- `/blog` 或 `/notes`
- `docs.nowake.ai` 文档站入口

暂不做独立 About 页面。About 内容放在首页底部、Footer，或后续再拆。

暂不做独立 Roadmap 页面。Roadmap 放在 Projects 页面里。

暂不做独立 svc-lb-mux 页面。svc-lb-mux 放在 Projects 页面展示，后续如需要再拆独立页。

## 4. 导航

第一版主导航：

- Home
- Projects
- Docs
- Blog / Notes
- GitHub

不使用 `Solutions`、`Platform`、`Enterprise`、`Pricing`、`Contact Sales` 等商业化导航。

## 5. 首页板块

首页建议结构：

1. Hero
   - 组织使命和一句话定位
   - 主 CTA：Learn more about nowake.ai
   - 第二 CTA：Explore kube-insight

2. Why nowake.ai
   - 生产系统越来越复杂
   - 上下文容易丢失
   - 很多重复运维工作低价值但需要谨慎处理
   - nowake.ai 希望用开源工具改善这些问题

3. What we build
   - Infrastructure evidence / memory
   - Kubernetes-native operations automation
   - Access, audit, and safety
   - Alert intelligence and notification handling

4. Active Projects
   - kube-insight
   - svc-lb-mux

5. Labs / Planned Directions
   - 只公开方向，不公开具体计划中项目名
   - Alert intelligence
   - Access and audit
   - Capacity automation
   - Dependency recovery

6. Principles / Values
   - Open source first
   - Evidence before automation
   - Operator control
   - Least privilege
   - Auditability before magic
   - Boring reliability over AI spectacle

7. Docs / GitHub / Contribute
   - docs.nowake.ai
   - GitHub organization
   - contribution entry

## 6. 项目展示规则

项目成熟度要标注，但展示粒度要控制：

- Active：展示具体项目名、项目描述、GitHub/Docs 链接
- Early：如仓库已公开，可以展示项目名；否则只展示方向
- Planned / Labs：只展示方向，不列具体项目名

第一版建议：

### Active

- kube-insight：Kubernetes evidence / operational memory
- svc-lb-mux：Kubernetes-native LoadBalancer consolidation

### Labs / Planned Directions

- Alert intelligence
- Access and audit
- Capacity automation
- Dependency recovery

## 7. kube-insight 页面

kube-insight 需要单独项目页。

页面重点：

- Kubernetes 当前状态不足以支持完整排障
- 现场证据会丢失或变化
- kube-insight 保留历史、提取事实和拓扑、提供查询入口
- 可以服务人类和工具，但不要把页面写成 AI agent 产品页
- 重点宣传可量化、可验证的优势，例如查询速度、保留证据、只读接口、安全过滤

## 8. Docs

文档站使用 `docs.nowake.ai`。

第一版主站只提供 Docs 入口，不在主站里迁移所有文档内容。

## 9. Blog / Notes

第一版可以有 Blog 或 Notes 入口，但内容风格应偏工程笔记和路线说明，而不是市场文章。

可能主题：

- operational memory
- Kubernetes evidence
- safe automation
- AI-assisted operations 的边界
- 项目进展和设计记录

## 10. 语言

第一版英文为主，中文后续补。

如果未来双语，默认语言为英文。

## 11. 视觉方向

视觉方向应更接近：

- 技术实验室
- 开源基础设施项目
- 云原生工具品牌

可以深浅结合。

当前选定方向：Open Index 信息结构 + Cloud Index 调色板。主视觉应使用浅蓝灰背景、深墨色正文和主按钮、克制蓝色 accent、浅蓝灰 footer。整体感觉应接近开源基础设施门户，而不是深色控制台、AI SaaS 或营销型产品页。

倾向：

- shadcn dark mode 的克制感
- Supabase 这类朴素但有明确色彩系统的感觉
- 内容显示和排版优先
- 有自己的 color palette

避免：

- 过度 AI 感
- 霓虹赛博风
- 普通 SaaS 官网
- 纯文档站
- 可爱 / 玩具感

## 12. 品牌情绪

“Good night. Sleep tight.” 可以作为文化和名字故事的一部分，但不作为首页主标题。

“好好睡觉”是组织文化，而不是逃避责任的营销承诺。

定位补充：nowake.ai 不是追求“把基础设施变安静”或隐藏问题，而是用 AI-assisted workflows 和自动化技术降低运维噪声。这里的噪声不只包括监控告警，也包括繁复的手工维护、访问审计、容量管理、安全检查和恢复任务。目标是让真正重要的工作浮出水面，让运维和开发人员专注在真正重要的事情上。

用户看完首页后应感到：

- 这个组织的理念我喜欢
- 这些项目看起来都很有用
- 项目效果好，并且有可验证依据
- 使用门槛低
- 这是认真做开源基础设施工具的团队
