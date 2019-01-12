// 医生年终报告数据模型：
// AppDataResponseTDoctorUserYearEndStatDto {
// data (DoctorUserYearEndStatDto),
// error (inline_model_1, optional):
// }
// DoctorUserYearEndStatDto {
// bbs (inline_model): 社区 ,
// train (inline_model_0): 培训 ,
// saas (SaasYearEndStatDto)
// }
// inline_model_1 {
// code (number, optional): ,
// message (string, optional):
// }
// inline_model {
// caseCount (number, optional): 病例数 ,
// commentCount (number, optional): 评论数 ,
// likeCount (number, optional): 点赞数 ,
// followCount (number, optional): 关注数
// }
// inline_model_0 {
// studyCount (number, optional): 学习次数 ,
// watchCount (number, optional): 观看次数
// }
// SaasYearEndStatDto {
// name (string, optional): //saas 员工姓名 ,
// role (string, optional): //职位 ,
// clinic (string, optional): //每年年首次接诊诊所 ,
// firstTreatDate (string, optional): //每年年首次接诊时间 ,
// patientCount (number): //接诊患者数 ,
// maleCount (number): //男患者数 ,
// femaleCount (number): //女患者数 ,
// patientAgeRanges (Array[YearEndPatientAgeRange]): 年龄短内的患者数 ,
// treatmentCompletedCount (number): //治疗完成的患者数 ,
// workHours (number): //接诊时长(小时) ,
// skilledItems (string): //擅长的项目(按预约项目数取前5) ,
// workLastItem (string): //工作最晚的项目 ,
// workLastTime (string): 工作最晚的时间 ,
// workLastOperation (string): //工作最晚做的事 ,
// workLateDays (number): 晚上8点到凌晨5点工作的天数 ,
// treatmentCompletedDays (number): 多少天在工作中度过
// }
// YearEndPatientAgeRange {
// min (number): 本范围的最小年龄 ,
// max (number, optional): 本范围的最大年龄,注意：如果本字段不存在或者值为空 表示无上限 ,
// desc (string, optional): 描述 ,a
// count (number): 本年龄范围的患者数量
// }

import Vue from 'vue'

export const originData = {
  bbs: {
    likeCount: 76,
    commentCount: 215,
    followCount: 12,
    caseCount: 62
  },
  train: {
    watchCount: 7,
    studyCount: 10
  },
  saas: {
    patientCount: 485,
    femaleCount: 237,
    maleCount: 248,
    treatmentCompletedCount: 1125,
    treatmentCompletedDays: 286,
    workHours: 557,
    workLateDays: 41,
    skilledItems: [ {
      name: '牙体',
      count: 256
    }, {
      name: '定期复诊',
      count: 23
    }, {
      name: '口外',
      count: 10
    }, {
      name: '口腔检查',
      count: 9
    }, {
      name: '修复',
      count: 5
    } ],
    patientAgeRanges: [ {
      desc: '0-12岁患者数',
      min: 0,
      max: 12,
      count: 303
    }, {
      desc: '13-17岁患者数',
      min: 13,
      max: 17,
      count: 13
    }, {
      desc: '18-40岁患者数',
      min: 18,
      max: 40,
      count: 87
    }, {
      desc: '41-65岁患者数',
      min: 41,
      max: 65,
      count: 72
    }, {
      desc: '66岁以上患者数',
      min: 66,
      max: null,
      count: 10
    } ],
    clinic: '潼关小白兔',
    name: '姚欣',
    firstTreatDate: '2018-01-14T02:30:00.000Z',
    workLastTime: '2018-08-17T16:17:49.000Z',
    workLastItem: '病历',
    workLastOperation: '更新病历'
  }
}

export const EventBus = new Vue()


export default {}

/*
 * 1. 诊所名称是一个还是多个
 * 2. 晚上10点到4点还是8点到5点
 * 3. 购买线下培训的数据
 *
 *
 * 4. 用户头像 的数据
 * 5. 第四张 ，工作， 在无数据情况下的处理
 *
 */
