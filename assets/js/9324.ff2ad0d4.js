"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[9324],{2126:(t,i,s)=>{s.d(i,{R:()=>a});var e=s(5242);class a{constructor(t){this.Ca=t}Bb(){(0,e.i)(this.ca)&&this.Oe()}ra(){(0,e.a)(this.ca)&&window.cancelAnimationFrame(this.ca),this.ca=void 0}Oe(){this.ca=window.requestAnimationFrame((()=>{(0,e.i)(this.ca)||(this.Ca(),this.Oe())}))}}},7850:(t,i,s)=>{s.d(i,{B:()=>u});var e=s(9256),a=s(5242),h=s(2126),r=s(7203),c=s(555),n=s(3493);class d{constructor(t,i){this.i=t,this.b=i,this.sa=(0,a.M)(),this.Cb=!1,this.$c=!1,this.ad=!1,this.Da=new h.R(this.bd.bind(this)),this.Qe=void 0,this.Dg=void 0,this.pg(),(0,a.e)(this.qg.bind(this)),(0,a.o)(this.cd.bind(this))}get a(){return this.i.media}get c(){return this.b.delegate.c}cd(){this.$c=!1,this.ad=!1,this.Da.ra(),this.sa.empty()}bd(){const t=this.a.currentTime;this.b.$state.realCurrentTime()!==t&&this.$a(t)}pg(){this.t("loadstart",this.Ea),this.t("abort",this.Pe),this.t("emptied",this.rg),this.t("error",this.U),this.t("volumechange",this.ab)}sg(){this.$c||(this.sa.add(this.t("loadeddata",this.tg),this.t("loadedmetadata",this.ug),this.t("canplay",this.hc),this.t("canplaythrough",this.vg),this.t("durationchange",this.wg),this.t("play",this.xb),this.t("progress",this.ic),this.t("stalled",this.xg),this.t("suspend",this.yg),this.t("ratechange",this.Bg)),this.$c=!0)}zg(){this.ad||(this.sa.add(this.t("pause",this.Aa),this.t("playing",this.Ag),this.t("seeked",this.bb),this.t("seeking",this.Cg),this.t("ended",this.Db),this.t("waiting",this.dd)),this.ad=!0)}t(t,i){return(0,a.l)(this.a,t,i.bind(this))}Eg(t){}$a(t,i){const s={currentTime:Math.min(t,this.b.$state.seekableEnd()),played:this.a.played};this.c("time-update",s,i)}Ea(t){3!==this.a.networkState?(this.sg(),this.c("load-start",void 0,t)):this.Pe(t)}Pe(t){this.c("abort",void 0,t)}rg(){this.c("emptied",void 0,event)}tg(t){this.c("loaded-data",void 0,t)}ug(t){this.zg(),this.c("loaded-metadata",void 0,t),(c.a||c.h&&(0,e.f)(this.b.$state.source()))&&this.b.delegate.jc(this.ed(),t)}ed(){return{provider:(0,a.u)(this.b.$provider),duration:this.a.duration,buffered:this.a.buffered,seekable:this.a.seekable}}xb(t){this.b.$state.canPlay&&this.c("play",void 0,t)}Aa(t){(1!==this.a.readyState||this.Cb)&&(this.Cb=!1,this.Da.ra(),this.c("pause",void 0,t))}hc(t){this.b.delegate.jc(this.ed(),t)}vg(t){this.b.$state.started()||this.c("can-play-through",this.ed(),t)}Ag(t){this.Cb=!1,this.c("playing",void 0,t),this.Da.Bb()}xg(t){this.c("stalled",void 0,t),this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}dd(t){this.a.readyState<3&&(this.Cb=!0,this.c("waiting",void 0,t))}Db(t){this.Da.ra(),this.$a(this.a.duration,t),this.c("end",void 0,t),this.b.$state.loop()&&(0,a.N)(this.a.controls)&&(this.a.controls=!1)}qg(){this.b.$state.paused()&&(0,a.l)(this.a,"timeupdate",this.Eb.bind(this))}Eb(t){this.$a(this.a.currentTime,t)}wg(t){this.b.$state.ended()&&this.$a(this.a.duration,t),this.c("duration-change",this.a.duration,t)}ab(t){const i={volume:this.a.volume,muted:this.a.muted};this.c("volume-change",i,t)}bb(t){this.$a(this.a.currentTime,t),this.c("seeked",this.a.currentTime,t),Math.trunc(this.a.currentTime)===Math.trunc(this.a.duration)&&(0,r.g)(this.a.duration)>(0,r.g)(this.a.currentTime)&&(this.$a(this.a.duration,t),this.a.ended||this.b.player.dispatch(new a.D("media-play-request",{trigger:t})))}Cg(t){this.c("seeking",this.a.currentTime,t)}ic(t){const i={buffered:this.a.buffered,seekable:this.a.seekable};this.c("progress",i,t)}yg(t){this.c("suspend",void 0,t)}Bg(t){this.c("rate-change",this.a.playbackRate,t)}U(t){const i=this.a.error;if(!i)return;const s={message:i.message,code:i.code,mediaError:i};this.c("error",s,t)}}class o{constructor(t,i){this.i=t,this.b=i,this.Fb.onaddtrack=this.Fg.bind(this),this.Fb.onremovetrack=this.Gg.bind(this),this.Fb.onchange=this.Hg.bind(this),(0,a.l)(this.b.audioTracks,"change",this.Ig.bind(this))}get Fb(){return this.i.media.audioTracks}Fg(t){const i=t.track;if(""===i.label)return;const s={id:i.id.toString(),label:i.label,language:i.language,kind:i.kind,selected:!1};this.b.audioTracks[n.L.oa](s,t),i.enabled&&(s.selected=!0)}Gg(t){const i=this.b.audioTracks.getById(t.track.id);i&&this.b.audioTracks[n.L.Yb](i,t)}Hg(t){let i=this.Re();if(!i)return;const s=this.b.audioTracks.getById(i.id);s&&this.b.audioTracks[n.L.pa](s,!0,t)}Re(){return Array.from(this.Fb).find((t=>t.enabled))}Ig(t){const{current:i}=t.detail;if(!i)return;const s=this.Fb.getTrackById(i.id);if(s){const t=this.Re();t&&(t.enabled=!1),s.enabled=!0}}}class u{constructor(t,i){this.a=t,this.b=i,this.scope=(0,a.x)(),this.V=null}setup(){new d(this,this.b),"audioTracks"in this.media&&new o(this,this.b),(0,a.o)((()=>{this.a.srcObject=null,this.a.removeAttribute("src");for(const t of this.a.querySelectorAll("source"))t.remove();this.a.load()}))}get type(){return""}get media(){return this.a}get currentSrc(){return this.V}setPlaybackRate(t){this.a.playbackRate=t}async play(){return this.a.play()}async pause(){return this.a.pause()}setMuted(t){this.a.muted=t}setVolume(t){this.a.volume=t}setCurrentTime(t){this.a.currentTime=t}setPlaysInline(t){(0,a.s)(this.a,"playsinline",t)}async loadSource({src:t,type:i},s){this.a.preload=s||"",(0,e.g)(t)?(this.Bn(),this.a.srcObject=t):(this.a.srcObject=null,(0,a.t)(t)?"?"!==i?this.yn({src:t,type:i}):(this.Bn(),this.a.src=this.Ik(t)):(this.Bn(),this.a.src=window.URL.createObjectURL(t))),this.a.load(),this.V={src:t,type:i}}yn(t,i){const s=this.a.querySelector("source[data-vds]"),e=s??document.createElement("source");(0,a.s)(e,"src",this.Ik(t.src)),(0,a.s)(e,"type","?"!==t.type?t.type:i),(0,a.s)(e,"data-vds",""),s||this.a.append(e)}Bn(){this.a.querySelector("source[data-vds]")?.remove()}Ik(t){const{clipStartTime:i,clipEndTime:s}=this.b.$state,e=i(),a=s();return e>0&&a>0?`${t}#t=${e},${a}`:e>0?`${t}#t=${e}`:a>0?`${t}#t=0,${a}`:t}}},9324:(t,i,s)=>{s.r(i),s.d(i,{VideoProvider:()=>g});var e=s(5242),a=s(555),h=s(7850),r=s(5521);class c{constructor(t,i){this.m=t,this.b=i,t.textTracks.onaddtrack=this.Wc.bind(this),(0,e.o)(this.cd.bind(this))}Wc(t){const i=t.track;if(!i||function(t,i){return Array.from(t.children).find((t=>t.track===i))}(this.m,i))return;const s=new r.T({id:i.id,kind:i.kind,label:i.label,language:i.language,type:"vtt"});s[r.b.T]={track:i},s[r.b.M]=2,s[r.b.te]=!0;let e=0;const a=t=>{if(i.cues)for(let a=e;a<i.cues.length;a++)s.addCue(i.cues[a],t),e++};a(t),i.oncuechange=a,this.b.textTracks.add(s,t),s.setMode(i.mode,t)}cd(){this.m.textTracks.onaddtrack=null;for(const t of this.b.textTracks){const i=t[r.b.T]?.track;i?.oncuechange&&(i.oncuechange=null)}}}class n{constructor(t,i){this.m=t,this.a=i,this.B=(t,i)=>{this.a.delegate.c("picture-in-picture-change",t,i)},(0,e.l)(this.m,"enterpictureinpicture",this.Jg.bind(this)),(0,e.l)(this.m,"leavepictureinpicture",this.Kg.bind(this))}get active(){return document.pictureInPictureElement===this.m}get supported(){return(0,a.e)(this.m)}async enter(){return this.m.requestPictureInPicture()}exit(){return document.exitPictureInPicture()}Jg(t){this.B(!0,t)}Kg(t){this.B(!1,t)}}class d{constructor(t,i){this.m=t,this.a=i,this.I="inline",(0,e.l)(this.m,"webkitpresentationmodechanged",this.Ua.bind(this))}get Se(){return(0,a.f)(this.m)}async kc(t){this.I!==t&&this.m.webkitSetPresentationMode(t)}Ua(t){const i=this.I;this.I=this.m.webkitPresentationMode,this.a.player?.dispatch(new e.D("video-presentation-change",{detail:this.I,trigger:t})),["fullscreen","picture-in-picture"].forEach((s=>{this.I!==s&&i!==s||this.a.delegate.c(`${s}-change`,this.I===s,t)}))}}class o{constructor(t){this.fa=t}get active(){return"fullscreen"===this.fa.I}get supported(){return this.fa.Se}async enter(){this.fa.kc("fullscreen")}async exit(){this.fa.kc("inline")}}class u{constructor(t){this.fa=t}get active(){return"picture-in-picture"===this.fa.I}get supported(){return this.fa.Se}async enter(){this.fa.kc("picture-in-picture")}async exit(){this.fa.kc("inline")}}class l{constructor(t,i){this.m=t,this.b=i,this.Se=(0,e.n)(!1),this.Hm()}get supported(){return this.Se()}Hm(){this.m.remote&&this.sl&&(this.m.remote.watchAvailability((t=>{this.Se.set(t)})).catch((()=>{this.Se.set(!1)})),(0,e.e)(this.rn.bind(this)))}rn(){if(!this.Se())return;const t=["connecting","connect","disconnect"],i=this.Rg.bind(this);i(),(0,e.l)(this.m,"playing",i);for(const s of t)(0,e.l)(this.m.remote,s,i)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return"airplay"===this.vb&&this.m.webkitShowPlaybackTargetPicker?this.m.webkitShowPlaybackTargetPicker():this.m.remote.prompt()}Rg(t){const i=this.m.remote.state;if(i===this.mc)return;const s={type:this.vb,state:i};this.b.delegate.c("remote-playback-change",s,t),this.mc=i}}class b extends l{constructor(){super(...arguments),this.vb="airplay"}get sl(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}class g extends h.B{constructor(t,i){super(t,i),this.$$PROVIDER_TYPE="VIDEO",(0,e.h)((()=>{if(this.airPlay=new b(t,i),(0,a.f)(t)){const s=new d(t,i);this.fullscreen=new o(s),this.pictureInPicture=new u(s)}else(0,a.e)(t)&&(this.pictureInPicture=new n(t,i))}),this.scope)}get type(){return"video"}setup(){super.setup(),(0,a.c)(this.video)&&new c(this.video,this.b),this.b.textRenderers.Fe(this.video),(0,e.o)((()=>{this.b.textRenderers.Fe(null)})),"video"===this.type&&this.b.delegate.c("provider-setup",this)}get video(){return this.a}}}}]);