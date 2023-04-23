import{_ as Se}from"./CommonPage-b019b5aa.js";import{_ as se}from"./Input-52fd70f1.js";import{d as G,h as u,s as Ae,v as Pe,aA as Fe,aB as Oe,a as ke,c as Q,u as Ue,f as de,aC as $e,r as b,t as Ee,C as h,a6 as Le,aD as He,i as je,aE as ze,aF as Y,aG as Z,q as ee,z as ne,aH as te,A as w,a7 as Ge,o as Ke,l as We,aI as Xe,aJ as qe,P as Je,Q as Qe,O as Ye,X as fe,$ as re,T as le,aK as ae}from"./index-0748ec09.js";import{u as Ze}from"./Eye-51824937.js";import{u as en}from"./use-merged-state-bac9929e.js";import{A as nn}from"./Add-bb0447ef.js";import"./AppPage-0e75b682.js";import"./_plugin-vue_export-helper-c27b6911.js";const tn=G({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),rn=n=>{const{textColorDisabled:l}=n;return{iconColorDisabled:l}},ln=Ae({name:"InputNumber",common:Pe,peers:{Button:Fe,Input:Oe},self:rn}),an=ln;function un(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function on(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function j(n){return n==null?!0:!Number.isNaN(n)}function ie(n,l){return n==null?"":l===void 0?String(n):n.toFixed(l)}function z(n){if(n===null)return null;if(typeof n=="number")return n;{const l=Number(n);return Number.isNaN(l)?null:l}}const sn=ke([Q("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),Q("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ue=800,oe=100,dn=Object.assign(Object.assign({},de.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),fn=G({name:"InputNumber",props:dn,setup(n){const{mergedBorderedRef:l,mergedClsPrefixRef:o,mergedRtlRef:M}=Ue(n),i=de("InputNumber","-input-number",sn,an,n,o),{localeRef:f}=Ze("InputNumber"),x=$e(n),{mergedSizeRef:S,mergedDisabledRef:y,mergedStatusRef:ce}=x,v=b(null),K=b(null),W=b(null),A=b(n.defaultValue),me=Ee(n,"value"),c=en(me,A),g=b(""),P=e=>{const t=String(e).split(".")[1];return t?t.length:0},ve=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:P(r));return Math.max(...t)},pe=h(()=>{const{placeholder:e}=n;return e!==void 0?e:f.value.placeholder}),T=h(()=>{const e=z(n.step);return e!==null?e===0?1:Math.abs(e):1}),X=h(()=>{const e=z(n.min);return e!==null?e:null}),q=h(()=>{const e=z(n.max);return e!==null?e:null}),_=e=>{const{value:t}=c;if(e===t){V();return}const{"onUpdate:value":r,onUpdateValue:a,onChange:d}=n,{nTriggerFormInput:m,nTriggerFormChange:I}=x;d&&w(d,e),a&&w(a,e),r&&w(r,e),A.value=e,m(),I()},s=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:a})=>{const{value:d}=g;if(a&&on(d))return!1;const m=(n.parse||un)(d);if(m===null)return t&&_(null),null;if(j(m)){const I=P(m),{precision:R}=n;if(R!==void 0&&R<I&&!r)return!1;let p=parseFloat((m+e).toFixed(R!=null?R:ve(m)));if(j(p)){const{value:L}=q,{value:H}=X;if(L!==null&&p>L){if(!t||a)return!1;p=L}if(H!==null&&p<H){if(!t||a)return!1;p=H}return n.validator&&!n.validator(p)?!1:(t&&_(p),p)}}return!1},V=()=>{const{value:e}=c;if(j(e)){const{format:t,precision:r}=n;t?g.value=t(e):e===null||r===void 0||P(e)>r?g.value=ie(e,void 0):g.value=ie(e,r)}else g.value=String(e)};V();const ge=h(()=>s({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),F=h(()=>{const{value:e}=c;if(n.validator&&e===null)return!1;const{value:t}=T;return s({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),O=h(()=>{const{value:e}=c;if(n.validator&&e===null)return!1;const{value:t}=T;return s({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function he(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=x;t&&w(t,e),r()}function be(e){var t,r;if(e.target===((t=v.value)===null||t===void 0?void 0:t.wrapperElRef))return;const a=s({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(a!==!1){const I=(r=v.value)===null||r===void 0?void 0:r.inputElRef;I&&(I.value=String(a||"")),c.value===a&&V()}else V();const{onBlur:d}=n,{nTriggerFormBlur:m}=x;d&&w(d,e),m(),Ge(()=>{V()})}function xe(e){const{onClear:t}=n;t&&w(t,e)}function k(){const{value:e}=O;if(!e){E();return}const{value:t}=c;if(t===null)n.validator||_(J());else{const{value:r}=T;s({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function U(){const{value:e}=F;if(!e){$();return}const{value:t}=c;if(t===null)n.validator||_(J());else{const{value:r}=T;s({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const Ve=he,Ie=be;function J(){if(n.validator)return null;const{value:e}=X,{value:t}=q;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function we(e){xe(e),_(null)}function ye(e){var t,r,a;!((t=W.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=K.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(a=v.value)===null||a===void 0||a.activate()}let B=null,N=null,C=null;function $(){C&&(window.clearTimeout(C),C=null),B&&(window.clearInterval(B),B=null)}function E(){D&&(window.clearTimeout(D),D=null),N&&(window.clearInterval(N),N=null)}function _e(){$(),C=window.setTimeout(()=>{B=window.setInterval(()=>{U()},oe)},ue),Z("mouseup",document,$,{once:!0})}let D=null;function Be(){E(),D=window.setTimeout(()=>{N=window.setInterval(()=>{k()},oe)},ue),Z("mouseup",document,E,{once:!0})}const Ne=()=>{N||k()},Re=()=>{B||U()};function Me(e){var t,r;if(e.key==="Enter"){if(e.target===((t=v.value)===null||t===void 0?void 0:t.wrapperElRef))return;s({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=v.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!O.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),s({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&k()}else if(e.key==="ArrowDown"){if(!F.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),s({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&U()}}function Te(e){g.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&s({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Le(c,()=>{V()});const Ce={focus:()=>{var e;return(e=v.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=v.value)===null||e===void 0?void 0:e.blur()}},De=He("InputNumber",M,o);return Object.assign(Object.assign({},Ce),{rtlEnabled:De,inputInstRef:v,minusButtonInstRef:K,addButtonInstRef:W,mergedClsPrefix:o,mergedBordered:l,uncontrolledValue:A,mergedValue:c,mergedPlaceholder:pe,displayedValueInvalid:ge,mergedSize:S,mergedDisabled:y,displayedValue:g,addable:O,minusable:F,mergedStatus:ce,handleFocus:Ve,handleBlur:Ie,handleClear:we,handleMouseDown:ye,handleAddClick:Ne,handleMinusClick:Re,handleAddMousedown:Be,handleMinusMousedown:_e,handleKeyDown:Me,handleUpdateDisplayedValue:Te,mergedTheme:i,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:je(()=>{const{self:{iconColorDisabled:e}}=i.value,[t,r,a,d]=ze(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${a})`,opacityDisabled:`${d}`}})})},render(){const{mergedClsPrefix:n,$slots:l}=this,o=()=>u(te,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>ee(l["minus-icon"],()=>[u(ne,{clsPrefix:n},{default:()=>u(tn,null)})])}),M=()=>u(te,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>ee(l["add-icon"],()=>[u(ne,{clsPrefix:n},{default:()=>u(nn,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(se,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var i;return this.showButton&&this.buttonPlacement==="both"?[o(),Y(l.prefix,f=>f?u("span",{class:`${n}-input-number-prefix`},f):null)]:(i=l.prefix)===null||i===void 0?void 0:i.call(l)},suffix:()=>{var i;return this.showButton?[Y(l.suffix,f=>f?u("span",{class:`${n}-input-number-suffix`},f):null),this.buttonPlacement==="right"?o():null,M()]:(i=l.suffix)===null||i===void 0?void 0:i.call(l)}}))}}),cn={"w-350":""},mn=fe("p",{"mt-20":"","text-center":"","color-gray":"","text-14":""},"注：右击标签重新加载可重置keep-alive",-1),vn=G({name:"KeepAlive"}),yn=Object.assign(vn,{setup(n){const l=b(""),o=b(0);return Ke(()=>{$message.success("onMounted")}),We(()=>{$message.error("onUnmounted")}),Xe(()=>{$message.info("onActivated")}),qe(()=>{$message.warning("onDeactivated")}),(M,i)=>{const f=se,x=fn,S=Se;return Ye(),Je(S,{"show-footer":""},{default:Qe(()=>[fe("div",cn,[re(f,{value:le(l),"onUpdate:value":i[0]||(i[0]=y=>ae(l)?l.value=y:null)},null,8,["value"]),re(x,{value:le(o),"onUpdate:value":i[1]||(i[1]=y=>ae(o)?o.value=y:null),"mt-30":""},null,8,["value"]),mn])]),_:1})}}});export{yn as default};
