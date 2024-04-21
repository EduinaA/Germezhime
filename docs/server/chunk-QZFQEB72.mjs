import './polyfills.server.mjs';
import{$ as _e,A as V,B as se,C as m,D as ae,E as k,F as le,G as ue,H as de,I as q,J as ce,K as he,M as fe,R as pe,T as ge,U as me,V as z,X as ve,Y as j,Z as ye,_,a as ee,aa as Ce,b as te,ba as Ve,c as ie,ca as De,d as H,e as f,f as b,fa as be,g as P,h as g,i as p,j as M,k as A,l as ne,la as Me,m as re,n as L,o as E,p as s,q as a,r as $,s as I,t as w,u as x,v as c,w as oe,x as l,y as u,z as C}from"./chunk-PUB7A6QX.mjs";import{a as y,b as D}from"./chunk-VVCT4QZE.mjs";var rt=t=>({"center-honeycomb":t});function ot(t,e){if(t&1&&(ne(),l(0,"svg",2),C(1,"polygon",3),l(2,"text",4),m(3),u()()),t&2){let n=e.$implicit,i=e.index;c("ngClass",he(5,rt,i===3)),x("data-testid","hive-cell-outer-"+i),s(),x("data-testid","cell-fill-"+i),s(),x("data-testid","cell-letter-"+i),s(),k(" ",n," ")}}var Ee=(()=>{let e=class e{constructor(){this.letters=[]}ngOnChanges(){console.log("Letters updated in Honeycombs:",this.letters)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-honeycombs"]],inputs:{letters:"letters"},features:[A],decls:2,vars:1,consts:[[1,"honeycomb-list"],["class","hive-cell","viewBox","0 0 120 103.923",3,"ngClass",4,"ngFor","ngForOf"],["viewBox","0 0 120 103.923",1,"hive-cell",3,"ngClass"],["points","0,51.961 30,0 90,0 120,51.961 90,103.923 30,103.923","stroke","white","stroke-width","3",1,"cell-fill"],["x","50%","y","50%","dy","0.35em",1,"cell-letter"]],template:function(r,o){r&1&&(l(0,"div",0),w(1,ot,4,7,"svg",1),u()),r&2&&(s(),c("ngForOf",o.letters))},dependencies:[ve,j],styles:[".honeycomb-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:280px;margin:50px auto;position:relative;height:12vw}.hive-cell[_ngcontent-%COMP%]{width:60px;height:52px;margin:1px;cursor:pointer;position:absolute}.cell-fill[_ngcontent-%COMP%]{fill:#e6e6e6}.center-honeycomb[_ngcontent-%COMP%]   .cell-fill[_ngcontent-%COMP%]{fill:#fdd835}.cell-letter[_ngcontent-%COMP%]{font-size:30px;font-weight:700;font-family:Arial,sans-serif;text-anchor:middle;alignment-baseline:middle;fill:#333;text-transform:uppercase}.hive-cell[_ngcontent-%COMP%]:nth-child(1){top:30px;left:0}.hive-cell[_ngcontent-%COMP%]:nth-child(2){top:0;left:52px}.hive-cell[_ngcontent-%COMP%]:nth-child(3){top:30px;left:104px}.hive-cell[_ngcontent-%COMP%]:nth-child(4){top:56px;left:52px}.hive-cell[_ngcontent-%COMP%]:nth-child(5){top:85px;left:0}.hive-cell[_ngcontent-%COMP%]:nth-child(6){top:112px;left:52px}.hive-cell[_ngcontent-%COMP%]:nth-child(7){top:85px;left:105px}"]});let t=e;return t})();var we=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[_]});let t=e;return t})();var ke=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a($),a(L))},e.\u0275dir=M({type:e});let t=e;return t})(),at=(()=>{let e=class e extends ke{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=re(e)))(o||e)}})(),e.\u0275dir=M({type:e,features:[I]});let t=e;return t})(),je=new b("");var lt={provide:je,useExisting:H(()=>B),multi:!0};function ut(){let t=z()?z().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var dt=new b(""),B=(()=>{let e=class e extends ke{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ut())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a($),a(L),a(dt,8))},e.\u0275dir=M({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&V("input",function(h){return o._handleInput(h.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(h){return o._compositionEnd(h.target.value)})},features:[q([lt]),I]});let t=e;return t})();var ct=new b(""),ht=new b("");function Te(t){return t!=null}function Ge(t){return fe(t)?ee(t):t}function We(t){let e={};return t.forEach(n=>{e=n!=null?y(y({},e),n):e}),Object.keys(e).length===0?null:e}function Be(t,e){return e.map(n=>n(t))}function ft(t){return!t.validate}function Re(t){return t.map(e=>ft(e)?e:n=>e.validate(n))}function pt(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(n){return We(Be(n,e))}}function Ue(t){return t!=null?pt(Re(t)):null}function gt(t){if(!t)return null;let e=t.filter(Te);return e.length==0?null:function(n){let i=Be(n,e).map(Ge);return ie(i).pipe(te(We))}}function He(t){return t!=null?gt(Re(t)):null}function Fe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function mt(t){return t._rawValidators}function vt(t){return t._rawAsyncValidators}function Z(t){return t?Array.isArray(t)?t:[t]:[]}function G(t,e){return Array.isArray(t)?t.includes(e):t===e}function Ie(t,e){let n=Z(e);return Z(t).forEach(r=>{G(n,r)||n.push(r)}),n}function xe(t,e){return Z(e).filter(n=>!G(t,n))}var W=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ue(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=He(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},X=class extends W{get formDirective(){return null}get path(){return null}},N=class extends W{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Y=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},yt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pi=D(y({},yt),{"[class.ng-submitted]":"isSubmitted"}),Le=(()=>{let e=class e extends Y{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(N,2))},e.\u0275dir=M({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&oe("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[I]});let t=e;return t})();var O="VALID",T="INVALID",F="PENDING",S="DISABLED";function _t(t){return(R(t)?t.validators:t)||null}function Ct(t){return Array.isArray(t)?Ue(t):t||null}function Vt(t,e){return(R(e)?e.asyncValidators:t)||null}function Dt(t){return Array.isArray(t)?He(t):t||null}function R(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var J=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===O}get invalid(){return this.status===T}get pending(){return this.status==F}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ie(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ie(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(xe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(xe(e,this._rawAsyncValidators))}hasValidator(e){return G(this._rawValidators,e)}hasAsyncValidator(e){return G(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=F,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(D(y({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=O,this._forEachChild(i=>{i.enable(D(y({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(y({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===F)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=F,this._hasOwnPendingAsyncValidator=!0;let n=Ge(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(F)?F:this._anyControlsHaveStatus(T)?T:O}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Dt(this._rawAsyncValidators)}};var $e=new b("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function bt(t,e){return[...e.path,t]}function Mt(t,e,n=K){Et(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),wt(t,e),It(t,e),Ft(t,e),At(t,e)}function Oe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function At(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Et(t,e){let n=mt(t);e.validator!==null?t.setValidators(Fe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=vt(t);e.asyncValidator!==null?t.setAsyncValidators(Fe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Oe(e._rawValidators,r),Oe(e._rawAsyncValidators,r)}function wt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&qe(t,e)})}function Ft(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&qe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function qe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function It(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function xt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Ot(t){return Object.getPrototypeOf(t.constructor)===at}function St(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===B?n=o:Ot(o)?i=o:r=o}),r||i||n||null}function Se(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ne(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Nt=class extends J{constructor(e=null,n,i){super(_t(n),Vt(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ne(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ne(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Pt={provide:N,useExisting:H(()=>Q)},Pe=Promise.resolve(),Q=(()=>{let e=class e extends N{constructor(i,r,o,d,h,nt){super(),this._changeDetectorRef=h,this.callSetDisabledState=nt,this.control=new Nt,this._registered=!1,this.name="",this.update=new E,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=St(this,d)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),xt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Mt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Pe.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&ge(r);Pe.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?bt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a(X,9),a(ct,10),a(ht,10),a(je,10),a(pe,8),a($e,8))},e.\u0275dir=M({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[P.None,"disabled","isDisabled"],model:[P.None,"ngModel","model"],options:[P.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[q([Pt]),I,A]});let t=e;return t})();var kt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({});let t=e;return t})();var ze=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:$e,useValue:i.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[kt]});let t=e;return t})();function Tt(t,e){if(t&1&&(l(0,"div",1),m(1),u()),t&2){let n=se();s(),k(" ",n.message,`
`)}}var Ze=(()=>{let e=class e{constructor(){this.message=""}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-error-message"]],inputs:{message:"message"},decls:1,vars:1,consts:[["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(r,o){r&1&&w(0,Tt,2,1,"div",0),r&2&&c("ngIf",o.message)},dependencies:[ye],styles:[".error-message[_ngcontent-%COMP%]{color:#d8000c;background-color:#ffd2d2;padding:10px;margin:10px 0;border:1px solid red;border-radius:5px}"]});let t=e;return t})();var Xe=(()=>{let e=class e{constructor(i){this.http=i,this.letters=[],this.validWord=new E,this.currentWord="",this.errorMessage="",this.wordSet=new Set,this.loadWordList()}ngOnChanges(i){i.letters&&console.log("Letters have changed. Re-checking valid words.")}loadWordList(){this.http.get("assets/sq_utf8.dic",{responseType:"text"}).subscribe(i=>{i.split(`
`).forEach(r=>this.wordSet.add(r.trim().toLowerCase()))})}submitWord(){this.isValidWord(this.currentWord)?(this.validWord.emit(this.currentWord),this.errorMessage="",console.log("Valid word")):(this.errorMessage="Fjal\xEB e pavlefshme!",console.log("Not valid")),this.currentWord=""}isValidWord(i){let r=i.toLowerCase(),o=this.letters[3].toLowerCase();return r.includes(o)?this.wordSet.has(r)&&this.canFormWord(r,this.letters):!1}canFormWord(i,r){let o=new Set(r.map(d=>d.toLowerCase()));return Array.from(i.toLowerCase()).every(d=>o.has(d))}printAllValidWords(){let i=0;console.log("Valid words for the current set of letters are:"),this.wordSet.forEach(r=>{this.isValidWord(r)&&(console.log(r),i++)}),console.log(`Total number of valid words: ${i}`)}};e.\u0275fac=function(r){return new(r||e)(a(_e))},e.\u0275cmp=g({type:e,selectors:[["app-word-input"]],inputs:{letters:"letters"},outputs:{validWord:"validWord"},features:[A],decls:5,vars:2,consts:[[3,"message"],[1,"input-container"],["type","text","placeholder","Vendos fjal\xEBn babik","autofocus","",3,"ngModelChange","keyup.enter","ngModel"],[3,"click"]],template:function(r,o){r&1&&(C(0,"app-error-message",0),l(1,"div",1)(2,"input",2),de("ngModelChange",function(h){return ue(o.currentWord,h)||(o.currentWord=h),h}),V("keyup.enter",function(){return o.submitWord()}),u(),l(3,"button",3),V("click",function(){return o.submitWord()}),m(4,"Jepi!"),u()()),r&2&&(c("message",o.errorMessage),s(2),le("ngModel",o.currentWord))},dependencies:[B,Le,Q,Ze],styles:[".input-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}input[type=text][_ngcontent-%COMP%]{padding:10px;font-size:16px;border:2px solid #ccc;border-radius:4px;width:300px}button[_ngcontent-%COMP%]{padding:10px 20px;margin-left:10px;background-color:#fdd835;border:none;border-radius:4px;cursor:pointer;font-size:16px}"]});let t=e;return t})();var U=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[_]});let t=e;return t})();var Ye=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[_,ze,Ce,U]});let t=e;return t})();function Bt(t,e){if(t&1&&(l(0,"div"),m(1),u()),t&2){let n=e.$implicit;s(),ae(n)}}var Je=(()=>{let e=class e{constructor(){this.validWords=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-valid-words-display"]],inputs:{validWords:"validWords"},decls:5,vars:1,consts:[[1,"valid-words-container"],[4,"ngFor","ngForOf"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"h3"),m(2,"Fjal\xEBt e gjetura"),u(),l(3,"div"),w(4,Bt,2,1,"div",1),u()()),r&2&&(s(4),c("ngForOf",o.validWords))},dependencies:[j],styles:[".valid-words-container[_ngcontent-%COMP%]{margin-top:20px;padding:10px;background-color:#f0f0f0;border-radius:8px;width:300px}.valid-words-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center}.valid-words-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.valid-words-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:5px;border-bottom:1px solid #ccc}"]});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[_]});let t=e;return t})();var Qe=(()=>{let e=class e{constructor(){this.currentLetters=[],this.letters=["l","m","b","\xEB","s","o","n"],this.validWords=[]}addValidWord(i){this.validWords.push(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],standalone:!0,features:[ce],decls:4,vars:3,consts:[[1,"input-honeycomb"],[3,"validWord","letters"],[3,"letters"],[3,"validWords"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"app-word-input",1),V("validWord",function(h){return o.addValidWord(h)}),u(),C(2,"app-honeycombs",2),u(),C(3,"app-valid-words-display",3)),r&2&&(s(),c("letters",o.letters),s(),c("letters",o.letters),s(),c("validWords",o.validWords))},dependencies:[we,Ee,Ye,Xe,Ke,Je,U],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.input-honeycomb[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]});let t=e;return t})();var et=[];var tt={providers:[Me(et),De()]};var Ut={providers:[be()]},it=me(tt,Ut);var Ht=()=>Ve(Qe,it),en=Ht;export{en as a};
