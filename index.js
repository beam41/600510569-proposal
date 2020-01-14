import React, { Component } from 'react';
import { render } from 'react-dom';
import NameHead from "./name-head"
import ProjName from "./proj-name"
import ProjAd from "./proj-ad"
import BasicModuleList from "./basic-module-list"
import AdvModuleList from "./adv-module-list"
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "ภูมิดล",
      lname: "หลุกทิพย์นภา",
      stdCode: "600510569",
      projName: "DivideGoose ระบบหารค่าใช้จ่ายภายในกลุ่มแบบ realtime",
      projAd: "จัดการค่าใช้จ่ายภายในกลุ่ม แบบ realtime ด้วย DivideGoose คุณสามารถสร้างห้อง และ ให้เพื่อนๆของคุณร่วมกันแก้ไขข้อมูลค่าใช้จ่ายต่างๆ และ ได้ข้อมูลว่าทุกคนในกลุ่มของคุณควรจะจ่ายเท่าไหร่ ลดปัญหาการทะเลาะกันในกลุ่มคุณว่าจริงๆควรจะจ่ายกันเท่าไหร่กันแน่",
      basicMod: [
        "สร้างห้องเพื่อจัดการค่าใช้จ่ายร่วมกัน และ บันทึกไว้ใน database แบบ realtime",
        "เก็บข้อมูลห้องที่เคยสร้างหรือเข้าไว้ใน browser",
        "คำนวณรายจ่ายสุทธิของแต่ละคนภายในกลุ่ม"
      ],
      advanceMod: [
        "ระบบลบห้องเมื่อผ่านไปช่วงเวลาหนึ่ง หรือผู้ใช้กดลบเอง",
        "รหัสผ่านของห้อง เมื่อผู้ใช้ต้องการเข้าใช้งานห้อง"
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <ProjName projName={this.state.projName}/>
        <NameHead name={this.state.name} lname={this.state.lname} stdCode={this.state.stdCode}/>
        <ProjAd projAd={this.state.projAd}/>
        <BasicModuleList basicMod={this.state.basicMod}  />
        <AdvModuleList advanceMod={this.state.advanceMod} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
