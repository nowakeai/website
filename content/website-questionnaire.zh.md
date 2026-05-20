# nowake.ai 官网规划问卷

这份问卷用于敲定 nowake.ai 官网的信息架构、内容重点、组织基调和视觉方向。

填写方式：在每题下面的 `答案：` 后填写选项字母或自由文本。可多选的问题可以填写多个字母。

## 1. 网站整体目标

### 1. 你希望 nowake.ai 官网第一眼传达什么？

- A. 这是一个开源基础设施工具组织
- B. 这是一个 AI 加持的运维工具组织
- C. 这是一个围绕 Kubernetes / 云原生运维的项目集合
- D. 这是一个长期探索 AI-native operations 的开源实验室
- E. 其他：______

答案：D

### 2. 官网最重要的目标是什么？可多选。

- A. 介绍组织使命
- B. 展示旗下项目
- C. 推广 kube-insight
- D. 承接文档入口
- E. 吸引开源贡献者
- F. 建立 nowake.ai 的品牌和视觉语言
- G. 其他：______

答案：ABCDEF

### 3. 第一版网站更应该像：

- A. 开源组织官网
- B. 工程文档站
- C. 产品官网
- D. 技术实验室 / research lab
- E. 介于以上几种之间：______

答案：AD

## 2. 组织定位

### 4. 你更喜欢 nowake.ai 被描述为：

- A. 开源基础设施工具组织
- B. AI 运维工具组织
- C. 云原生运维工具组织
- D. AI-native operations 开源组织
- E. 其他：______

答案：D

### 5. AI 在组织叙事里的分量应该是：

- A. 很轻，只作为部分工具能力
- B. 中等，强调 AI-assisted，但不做 AI SaaS 感
- C. 较重，明确 nowake.ai 是 AI-native
- D. 很重，AI 是首屏核心卖点

答案：B

### 6. “让运维和开发人员睡个好觉”这个概念应该：

- A. 明确出现在首页首屏
- B. 出现在 About 页面或次级文案
- C. 只作为名字背后的故事，不做主文案
- D. 暂时不强调

答案：C (但是“好好睡觉” 会是我们的“企业”文化)

## 3. 首页内容

### 7. 首页首屏应该重点讲什么？

- A. 组织使命
- B. 当前主推项目 kube-insight
- C. nowake.ai 的长期路线
- D. 生产运维中的共性问题
- E. 开源和社区
- F. 其他：______

答案：ABC

### 8. 首页是否应该直接展示具体项目？

- A. 是，首屏下面马上展示项目
- B. 是，但项目只作为后半部分内容
- C. 否，首页只讲组织理念，项目放 Projects 页
- D. 不确定

答案：B

### 9. 首页是否应该突出 kube-insight？

- A. 强突出，它是当前主推
- B. 中等突出，作为 active project 之一
- C. 轻描淡写，避免官网变成 kube-insight 官网
- D. 不突出，单独页面再讲

答案：B

### 10. 首页应该包含哪些板块？可多选。

- A. Hero 首屏
- B. Why nowake.ai
- C. What we build
- D. Projects overview
- E. Principles / Values
- F. Roadmap
- G. Docs entry
- H. GitHub / Contribute
- I. 其他：______

答案：ABCDEFGH

## 4. 页面结构

### 11. 第一版网站应该有哪些页面？可多选。

- A. Home
- B. Projects
- C. kube-insight
- D. svc-lb-mux
- E. Docs
- F. About
- G. Roadmap
- H. Blog / Notes
- I. Design System
- J. Community
- K. 其他：______

答案：A B（项目列表） CD(跳转到相对独立的项目专属页面/站点) E F G H

### 12. 是否需要给 kube-insight 单独做官网页面？

- A. 需要，作为当前主推项目
- B. 暂时不需要，先链接到 GitHub README
- C. 可以有一个轻量介绍页
- D. 不确定

答案：A

### 13. svc-lb-mux 应该如何展示？

- A. 和 kube-insight 同等展示
- B. 作为 active project 简要展示
- C. 放在 Projects 页，不进首页
- D. 暂时只链接 GitHub

答案：C

### 14. 计划中的项目应该如何展示？

- A. 明确展示为 Planned / Labs
- B. 只在 Roadmap 里展示
- C. 暂时不展示，避免承诺过多
- D. 只用项目方向概括，不列具体名字

答案：D

### 15. Docs 第一版应该怎么做？

- A. 只做文档入口页，链接到各 repo
- B. 把 README/docs 内容迁移到网站
- C. 单独做 `docs.nowake.ai`
- D. 暂时不做 Docs 页面

答案：C

## 5. 内容基调

### 16. 你希望整体语气更接近：

- A. 克制、工程化、可信
- B. 有一点品牌情绪，但不过度营销
- C. 更有理想主义和开源运动感
- D. 更像严肃技术文档
- E. 其他：______

答案：B

### 17. 哪些词更适合 nowake.ai？可多选。

- A. open-source
- B. infrastructure
- C. operations
- D. Kubernetes
- E. cloud-native
- F. AI-assisted
- G. AI-native
- H. reliability
- I. evidence
- J. automation
- K. auditability
- L. calmer production
- M. 其他：______

答案：ABCDEFGJK

### 18. 哪些表达应该避免？可多选。

- A. “替代运维人员”
- B. “完全自动化运维”
- C. “永远不会被叫醒”
- D. “AI magic”
- E. 太商业 SaaS 的表达
- F. 太重的告警处理叙事
- G. 太重的 AI agent 叙事
- H. 其他：___不在AI效果方面做太夸张的承诺，因为很难量化，但是能量化且有优势的部分我们要重点宣传___

答案：ABCDEFG

## 6. 视觉方向

### 19. 你希望 nowake.ai 的视觉感受更接近：

- A. 开源基础设施项目
- B. 运维控制台
- C. 工程文档站
- D. 技术实验室
- E. 云原生工具品牌
- F. 其他：______

答案：D

### 20. 颜色倾向：

- A. 深色为主
- B. 浅色为主
- C. 深浅结合
- D. 首页深色，文档浅色
- E. 不确定

答案：C

### 21. 视觉应该避免什么？可多选。

- A. 过度 AI 感
- B. 霓虹赛博风
- C. 太像普通 SaaS 官网
- D. 太像纯文档站
- E. 太沉闷
- F. 太可爱 / 玩具感
- G. 其他：______

答案：ABCDF

## 7. 导航和 CTA

### 22. 第一版导航应该包含哪些项？可多选。

- A. Home
- B. Projects
- C. kube-insight
- D. Docs
- E. About
- F. Roadmap
- G. Blog
- H. GitHub
- I. 其他：______

答案：ABDGH

### 23. 首页主 CTA 应该是：

- A. View Projects
- B. Explore kube-insight
- C. Read the Docs
- D. Open GitHub
- E. Learn more about nowake.ai
- F. 其他：______

答案：E

### 24. 首页第二 CTA 应该是：

- A. GitHub
- B. Docs
- C. Projects
- D. kube-insight
- E. Roadmap
- F. 其他：______

答案：D

## 8. 成熟度和路线

### 25. 是否要明确标注项目成熟度？

- A. 要，Active / Early / Planned
- B. 要，但只在 Projects 页
- C. 不要，避免显得不成熟
- D. 不确定

答案：A

### 26. Roadmap 应该：

- A. 第一版就有单独页面
- B. 放在 Projects 页面里
- C. 放在 About 页面里
- D. 暂时不展示

答案：B

### 27. 对计划中项目的公开程度：

- A. 可以公开项目名和方向
- B. 只公开方向，不公开名字
- C. 只说 “Labs”
- D. 暂时不公开

答案：B

## 9. 语言

### 28. 网站第一版语言应该是：

- A. 英文
- B. 中文
- C. 英文为主，中文后续补
- D. 中英双语
- E. 中文为主，英文后续补

答案：C

### 29. 如果双语，默认语言应该是：

- A. 英文
- B. 中文
- C. 根据浏览器语言
- D. 不确定

答案：A

## 10. 自由补充

### 30. 你觉得 nowake.ai 最重要的一句话应该是什么？

答案：Good night. Sleep tight.

### 31. 你不希望 nowake.ai 看起来像什么？

答案：传统 Saas Paas 还有那些很死板的 ToB 企业

### 32. 你希望用户看完首页后产生什么感觉？

答案：这个组织的理念我喜欢，他们的项目看起来都很有用，效果好，而且用起来门槛低

### 33. 你最喜欢哪些网站的感觉？可以贴链接。

答案：

### 34. 其他想法：

答案：shadcd dark mode 或者 supabase 这种朴素但有自己的 color pallet 的就很好，关键还是内容显示和排版。
