import{d as v,r as o,c as w,e,w as t,f as a,o as h,k as u,i as _,D as f}from"./index-B8ct-maT.js";const U=v({__name:"index",setup(C){let r=o(1),i=o(10);const m=o("default"),g=o(!1),b=o(!1);return(N,s)=>{const x=a("el-input"),c=a("el-form-item"),p=a("el-button"),y=a("el-form"),d=a("el-card"),l=a("el-table-column"),z=a("el-table"),k=a("el-pagination");return h(),w("div",null,[e(d,{style:{height:"80px"}},{default:t(()=>[e(y,{inline:!0},{default:t(()=>[e(c,{label:"用户名:"},{default:t(()=>[e(x,{placeholder:"请输入用户名"})]),_:1}),e(c,null,{default:t(()=>[e(p,{type:"primary",size:"default"},{default:t(()=>[u("搜索")]),_:1}),e(p,{size:"default"},{default:t(()=>[u("重置")]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{style:{margin:"10px 0px"}},{default:t(()=>[e(p,{type:"primary",size:"default"},{default:t(()=>[u("添加用户")]),_:1}),e(p,{type:"danger",size:"default"},{default:t(()=>[u("批量删除")]),_:1}),e(z,{style:{margin:"10px 0px"},border:""},{default:t(()=>[e(l,{type:"selection",width:"60px",align:"center"}),e(l,{label:"序号",align:"center"}),e(l,{label:"学号",align:"center"}),e(l,{label:"姓名",align:"center"}),e(l,{label:"角色",align:"center"}),e(l,{label:"创建时间",align:"center"}),e(l,{label:"更新时间",align:"center"}),e(l,{label:"操作",width:"200px",align:"center"})]),_:1}),e(k,{"current-page":_(r),"onUpdate:currentPage":s[0]||(s[0]=n=>f(r)?r.value=n:r=n),"page-size":_(i),"onUpdate:pageSize":s[1]||(s[1]=n=>f(i)?i.value=n:i=n),size:m.value,disabled:g.value,background:b.value,layout:"->,prev, pager, next, jumper",total:100},null,8,["current-page","page-size","size","disabled","background"])]),_:1})])}}});export{U as default};
