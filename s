[1mdiff --git a/.idea/.gitignore b/.idea/.gitignore[m
[1mnew file mode 100644[m
[1mindex 0000000..13566b8[m
[1m--- /dev/null[m
[1m+++ b/.idea/.gitignore[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32m# Default ignored files[m
[32m+[m[32m/shelf/[m
[32m+[m[32m/workspace.xml[m
[32m+[m[32m# Editor-based HTTP Client requests[m
[32m+[m[32m/httpRequests/[m
[32m+[m[32m# Datasource local storage ignored files[m
[32m+[m[32m/dataSources/[m
[32m+[m[32m/dataSources.local.xml[m
[1mdiff --git a/.idea/inspectionProfiles/Project_Default.xml b/.idea/inspectionProfiles/Project_Default.xml[m
[1mnew file mode 100644[m
[1mindex 0000000..03d9549[m
[1m--- /dev/null[m
[1m+++ b/.idea/inspectionProfiles/Project_Default.xml[m
[36m@@ -0,0 +1,6 @@[m
[32m+[m[32m<component name="InspectionProjectProfileManager">[m
[32m+[m[32m  <profile version="1.0">[m
[32m+[m[32m    <option name="myName" value="Project Default" />[m
[32m+[m[32m    <inspection_tool class="Eslint" enabled="true" level="WARNING" enabled_by_default="true" />[m
[32m+[m[32m  </profile>[m
[32m+[m[32m</component>[m
\ No newline at end of file[m
[1mdiff --git a/.idea/misc.xml b/.idea/misc.xml[m
[1mnew file mode 100644[m
[1mindex 0000000..639900d[m
[1m--- /dev/null[m
[1m+++ b/.idea/misc.xml[m
[36m@@ -0,0 +1,6 @@[m
[32m+[m[32m<?xml version="1.0" encoding="UTF-8"?>[m
[32m+[m[32m<project version="4">[m
[32m+[m[32m  <component name="ProjectRootManager">[m
[32m+[m[32m    <output url="file://$PROJECT_DIR$/out" />[m
[32m+[m[32m  </component>[m
[32m+[m[32m</project>[m
\ No newline at end of file[m
[1mdiff --git a/.idea/modules.xml b/.idea/modules.xml[m
[1mnew file mode 100644[m
[1mindex 0000000..b46dfe9[m
[1m--- /dev/null[m
[1m+++ b/.idea/modules.xml[m
[36m@@ -0,0 +1,8 @@[m
[32m+[m[32m<?xml version="1.0" encoding="UTF-8"?>[m
[32m+[m[32m<project version="4">[m
[32m+[m[32m  <component name="ProjectModuleManager">[m
[32m+[m[32m    <modules>[m
[32m+[m[32m      <module fileurl="file://$PROJECT_DIR$/.idea/veterans_organization.iml" filepath="$PROJECT_DIR$/.idea/veterans_organization.iml" />[m
[32m+[m[32m    </modules>[m
[32m+[m[32m  </component>[m
[32m+[m[32m</project>[m
\ No newline at end of file[m
[1mdiff --git a/.idea/vcs.xml b/.idea/vcs.xml[m
[1mnew file mode 100644[m
[1mindex 0000000..35eb1dd[m
[1m--- /dev/null[m
[1m+++ b/.idea/vcs.xml[m
[36m@@ -0,0 +1,6 @@[m
[32m+[m[32m<?xml version="1.0" encoding="UTF-8"?>[m
[32m+[m[32m<project version="4">[m
[32m+[m[32m  <component name="VcsDirectoryMappings">[m
[32m+[m[32m    <mapping directory="" vcs="Git" />[m
[32m+[m[32m  </component>[m
[32m+[m[32m</project>[m
\ No newline at end of file[m
[1mdiff --git a/.idea/veterans_organization.iml b/.idea/veterans_organization.iml[m
[1mnew file mode 100644[m
[1mindex 0000000..d6ebd48[m
[1m--- /dev/null[m
[1m+++ b/.idea/veterans_organization.iml[m
[36m@@ -0,0 +1,9 @@[m
[32m+[m[32m<?xml version="1.0" encoding="UTF-8"?>[m
[32m+[m[32m<module type="JAVA_MODULE" version="4">[m
[32m+[m[32m  <component name="NewModuleRootManager" inherit-compiler-output="true">[m
[32m+[m[32m    <exclude-output />[m
[32m+[m[32m    <content url="file://$MODULE_DIR$" />[m
[32m+[m[32m    <orderEntry type="inheritedJdk" />[m
[32m+[m[32m    <orderEntry type="sourceFolder" forTests="false" />[m
[32m+[m[32m  </component>[m
[32m+[m[32m</module>[m
\ No newline at end of file[m
[1mdiff --git a/client/src/pages/PublicFigures.jsx b/client/src/pages/PublicFigures.jsx[m
[1mindex 82b3d09..13a2ab1 100644[m
[1m--- a/client/src/pages/PublicFigures.jsx[m
[1m+++ b/client/src/pages/PublicFigures.jsx[m
[36m@@ -1,9 +1,126 @@[m
[31m-import React from 'react'[m
[32m+[m[32mimport React from "react";[m
[32m+[m[32mimport { assets } from "../assets/assets";[m
[32m+[m
[32m+[m[32mconst figures = [[m
[32m+[m[32m  {[m
[32m+[m[32m    name: "Марко Дорошенко",[m
[32m+[m[32m    role: "Засновник ветеранського центру",[m
[32m+[m[32m    desc: "Створив простір для реабілітації й навчання ветеранів у громадах. Розвиває мережу локальних хабів та наставницьких програм.",[m
[32m+[m[32m    link: "#"[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m    name: "Ірина Костенко",[m
[32m+[m[32m    role: "Кураторка культурних проєктів",[m
[32m+[m[32m    desc: "Запускає виставки та документальні ініціативи про досвід ветеранів. Працює з громадами, щоб голос ветеранів був почутий.",[m
[32m+[m[32m    link: "#"[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m    name: "Олег Савчук",[m
[32m+[m[32m    role: "Лідер спільноти з адаптації",[m
[32m+[m[32m    desc: "Підтримує ветеранів при поверненні до цивільного життя: організовує групи взаємодопомоги, тренінги з працевлаштування та менторство.",[m
[32m+[m[32m    link: "#"[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m    name: "Катерина Левченко",[m
[32m+[m[32m    role: "Менторка з ментального здоров’я",[m
[32m+[m[32m    desc: "Працює з психологами та фасилітаторами, щоб розвивати програми стійкості, групові зустрічі та кризову підтримку для родин.",[m
[32m+[m[32m    link: "#"[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m    name: "Руслан Романюк",[m
[32m+[m[32m    role: "Співзасновник освітньої ініціативи",[m
[32m+[m[32m    desc: "Розробляє курси перекваліфікації для ветеранів. Допомагає будувати кар’єрні траєкторії та партнерства з бізнесом.",[m
[32m+[m[32m    link: "#"[m
[32m+[m[32m  },[m
[32m+[m[32m  {[m
[32m+[m[32m    name: "Олена Яремчук",[m
[32m+[m[32m    role: "Активістка та фандрейзерка",[m
[32m+[m[32m    desc: "Координує кампанії зі збору коштів на реабілітацію та обладнання. Впроваджує прозорі звіти та партнерські проєкти.",[m
[32m+[m[32m    link: "#"[m
[32m+[m[32m  },[m
[32m+[m[32m];[m
[32m+[m
[32m+[m[32mconst PublicFigureCard = ({ name, role, desc, link }) => ([m
[32m+[m[32m  <div className="bg-white rounded-2xl shadow-md p-6 border border-primary/10 space-y-4 flex flex-col">[m
[32m+[m[32m    <div className="w-full h-40 bg-gradient-to-br from-primary/15 to-white rounded-xl border border-primary/10 flex items-center justify-center text-primary font-semibold">[m
[32m+[m[32m      Фото[m
[32m+[m[32m    </div>[m
[32m+[m[32m    <div className="space-y-1">[m
[32m+[m[32m      <p className="text-sm font-semibold text-primary">{role}</p>[m
[32m+[m[32m      <h3 className="text-xl font-bold text-[#03383A]">{name}</h3>[m
[32m+[m[32m    </div>[m
[32m+[m[32m    <p className="text-sm text-neutral-700 leading-relaxed flex-1">{desc}</p>[m
[32m+[m[32m    <div>[m
[32m+[m[32m      <a href={link} className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition">[m
[32m+[m[32m        Дізнатися більше[m
[32m+[m[32m      </a>[m
[32m+[m[32m    </div>[m
[32m+[m[32m  </div>[m
[32m+[m[32m);[m
[32m+[m
[32m+[m[32mconst PublicFiguresGrid = () => ([m
[32m+[m[32m  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">[m
[32m+[m[32m    {figures.map(