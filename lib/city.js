const cities = [
    {
        "id": 1,
        "name": "北京",
        "parent_id": 0,
        "post": 110000,
        "n": 1
    },
    {
        "id": 2,
        "name": "天津",
        "parent_id": 0,
        "post": 120000,
        "n": 2
    },
    {
        "id": 3,
        "name": "上海",
        "parent_id": 0,
        "post": 310000,
        "n": 3
    },
    {
        "id": 4,
        "name": "重庆",
        "parent_id": 0,
        "post": 500000,
        "n": 4
    },
    {
        "id": 5,
        "name": "河北",
        "parent_id": 0,
        "post": 130000,
        "n": 5
    },
    {
        "id": 6,
        "name": "山西",
        "parent_id": 0,
        "post": 140000,
        "n": 6
    },
    {
        "id": 7,
        "name": "内蒙古",
        "parent_id": 0,
        "post": 150000,
        "n": 7
    },
    {
        "id": 8,
        "name": "辽宁",
        "parent_id": 0,
        "post": 210000,
        "n": 8
    },
    {
        "id": 9,
        "name": "吉林",
        "parent_id": 0,
        "post": 220000,
        "n": 9
    },
    {
        "id": 10,
        "name": "黑龙江",
        "parent_id": 0,
        "post": 230000,
        "n": 10
    },
    {
        "id": 11,
        "name": "江苏",
        "parent_id": 0,
        "post": 320000,
        "n": 11
    },
    {
        "id": 12,
        "name": "浙江",
        "parent_id": 0,
        "post": 330000,
        "n": 12
    },
    {
        "id": 13,
        "name": "安徽",
        "parent_id": 0,
        "post": 340000,
        "n": 13
    },
    {
        "id": 14,
        "name": "福建",
        "parent_id": 0,
        "post": 350000,
        "n": 14
    },
    {
        "id": 15,
        "name": "江西",
        "parent_id": 0,
        "post": 360000,
        "n": 15
    },
    {
        "id": 16,
        "name": "山东",
        "parent_id": 0,
        "post": 370000,
        "n": 16
    },
    {
        "id": 17,
        "name": "河南",
        "parent_id": 0,
        "post": 410000,
        "n": 17
    },
    {
        "id": 18,
        "name": "湖北",
        "parent_id": 0,
        "post": 420000,
        "n": 18
    },
    {
        "id": 19,
        "name": "湖南",
        "parent_id": 0,
        "post": 430000,
        "n": 19
    },
    {
        "id": 20,
        "name": "广东",
        "parent_id": 0,
        "post": 440000,
        "n": 20
    },
    {
        "id": 21,
        "name": "广西",
        "parent_id": 0,
        "post": 450000,
        "n": 21
    },
    {
        "id": 22,
        "name": "海南",
        "parent_id": 0,
        "post": 460000,
        "n": 22
    },
    {
        "id": 23,
        "name": "四川",
        "parent_id": 0,
        "post": 510000,
        "n": 23
    },
    {
        "id": 24,
        "name": "贵州",
        "parent_id": 0,
        "post": 520000,
        "n": 24
    },
    {
        "id": 25,
        "name": "云南",
        "parent_id": 0,
        "post": 530000,
        "n": 25
    },
    {
        "id": 26,
        "name": "西藏",
        "parent_id": 0,
        "post": 540000,
        "n": 26
    },
    {
        "id": 27,
        "name": "陕西",
        "parent_id": 0,
        "post": 610000,
        "n": 27
    },
    {
        "id": 28,
        "name": "甘肃",
        "parent_id": 0,
        "post": 620000,
        "n": 28
    },
    {
        "id": 29,
        "name": "青海",
        "parent_id": 0,
        "post": 630000,
        "n": 29
    },
    {
        "id": 30,
        "name": "宁夏",
        "parent_id": 0,
        "post": 640000,
        "n": 30
    },
    {
        "id": 31,
        "name": "新疆",
        "parent_id": 0,
        "post": 650000,
        "n": 31
    },
    {
        "id": 32,
        "name": "台湾",
        "parent_id": 0,
        "post": 710000,
        "n": 32
    },
    {
        "id": 33,
        "name": "香港",
        "parent_id": 0,
        "post": 810000,
        "n": 33
    },
    {
        "id": 34,
        "name": "澳门",
        "parent_id": 0,
        "post": 820000,
        "n": 34
    },
    {
        "id": 35,
        "name": "海外",
        "parent_id": 0,
        "post": "",
        "n": 35
    },
    {
        "id": 36,
        "name": "东城",
        "parent_id": 1,
        "post": 110101,
        "n": 1
    },
    {
        "id": 37,
        "name": "西城",
        "parent_id": 1,
        "post": 110102,
        "n": 2
    },
    {
        "id": 40,
        "name": "朝阳",
        "parent_id": 1,
        "post": 110105,
        "n": 5
    },
    {
        "id": 41,
        "name": "丰台",
        "parent_id": 1,
        "post": 110106,
        "n": 6
    },
    {
        "id": 42,
        "name": "石景山",
        "parent_id": 1,
        "post": 110107,
        "n": 7
    },
    {
        "id": 43,
        "name": "海淀",
        "parent_id": 1,
        "post": 110108,
        "n": 8
    },
    {
        "id": 44,
        "name": "门头沟",
        "parent_id": 1,
        "post": 110109,
        "n": 9
    },
    {
        "id": 45,
        "name": "房山",
        "parent_id": 1,
        "post": 110111,
        "n": 10
    },
    {
        "id": 46,
        "name": "通州",
        "parent_id": 1,
        "post": 110112,
        "n": 11
    },
    {
        "id": 47,
        "name": "顺义",
        "parent_id": 1,
        "post": 110113,
        "n": 12
    },
    {
        "id": 48,
        "name": "昌平",
        "parent_id": 1,
        "post": 110114,
        "n": 13
    },
    {
        "id": 49,
        "name": "大兴",
        "parent_id": 1,
        "post": 110115,
        "n": 14
    },
    {
        "id": 50,
        "name": "怀柔",
        "parent_id": 1,
        "post": 110116,
        "n": 15
    },
    {
        "id": 51,
        "name": "平谷",
        "parent_id": 1,
        "post": 110117,
        "n": 16
    },
    {
        "id": 52,
        "name": "密云",
        "parent_id": 1,
        "post": 110228,
        "n": 17
    },
    {
        "id": 53,
        "name": "延庆",
        "parent_id": 1,
        "post": 110229,
        "n": 18
    },
    {
        "id": 54,
        "name": "和平",
        "parent_id": 2,
        "post": 120101,
        "n": 1
    },
    {
        "id": 55,
        "name": "河东",
        "parent_id": 2,
        "post": 120102,
        "n": 2
    },
    {
        "id": 56,
        "name": "河西",
        "parent_id": 2,
        "post": 120103,
        "n": 3
    },
    {
        "id": 57,
        "name": "南开",
        "parent_id": 2,
        "post": 120104,
        "n": 4
    },
    {
        "id": 58,
        "name": "河北",
        "parent_id": 2,
        "post": 120105,
        "n": 5
    },
    {
        "id": 59,
        "name": "红桥",
        "parent_id": 2,
        "post": 120106,
        "n": 6
    },
    {
        "id": 60,
        "name": "东丽",
        "parent_id": 2,
        "post": 120110,
        "n": 7
    },
    {
        "id": 61,
        "name": "西青",
        "parent_id": 2,
        "post": 120111,
        "n": 8
    },
    {
        "id": 62,
        "name": "津南",
        "parent_id": 2,
        "post": 120112,
        "n": 9
    },
    {
        "id": 63,
        "name": "北辰",
        "parent_id": 2,
        "post": 120113,
        "n": 10
    },
    {
        "id": 64,
        "name": "武清",
        "parent_id": 2,
        "post": 120114,
        "n": 11
    },
    {
        "id": 65,
        "name": "宝坻",
        "parent_id": 2,
        "post": 120115,
        "n": 12
    },
    {
        "id": 66,
        "name": "滨海新区",
        "parent_id": 2,
        "post": 120116,
        "n": 13
    },
    {
        "id": 67,
        "name": "宁河",
        "parent_id": 2,
        "post": 120117,
        "n": 14
    },
    {
        "id": 68,
        "name": "蓟州",
        "parent_id": 2,
        "post": 120119,
        "n": 16
    },
    {
        "id": 69,
        "name": "静海",
        "parent_id": 2,
        "post": 120118,
        "n": 15
    },
    {
        "id": 70,
        "name": "黄浦",
        "parent_id": 3,
        "post": 310101,
        "n": 1
    },
    {
        "id": 71,
        "name": "徐汇",
        "parent_id": 3,
        "post": 310104,
        "n": 2
    },
    {
        "id": 72,
        "name": "长宁",
        "parent_id": 3,
        "post": 310105,
        "n": 3
    },
    {
        "id": 73,
        "name": "静安",
        "parent_id": 3,
        "post": 310106,
        "n": 4
    },
    {
        "id": 74,
        "name": "普陀",
        "parent_id": 3,
        "post": 310107,
        "n": 5
    },
    {
        "id": 76,
        "name": "虹口",
        "parent_id": 3,
        "post": 310109,
        "n": 6
    },
    {
        "id": 77,
        "name": "杨浦",
        "parent_id": 3,
        "post": 310110,
        "n": 7
    },
    {
        "id": 78,
        "name": "闵行",
        "parent_id": 3,
        "post": 310112,
        "n": 8
    },
    {
        "id": 79,
        "name": "宝山",
        "parent_id": 3,
        "post": 310113,
        "n": 9
    },
    {
        "id": 80,
        "name": "嘉定",
        "parent_id": 3,
        "post": 310114,
        "n": 10
    },
    {
        "id": 81,
        "name": "浦东新区",
        "parent_id": 3,
        "post": 310115,
        "n": 11
    },
    {
        "id": 82,
        "name": "金山",
        "parent_id": 3,
        "post": 310116,
        "n": 12
    },
    {
        "id": 83,
        "name": "松江",
        "parent_id": 3,
        "post": 310117,
        "n": 13
    },
    {
        "id": 84,
        "name": "青浦",
        "parent_id": 3,
        "post": 310118,
        "n": 14
    },
    {
        "id": 85,
        "name": "奉贤",
        "parent_id": 3,
        "post": 310120,
        "n": 15
    },
    {
        "id": 86,
        "name": "崇明",
        "parent_id": 3,
        "post": 310151,
        "n": 16
    },
    {
        "id": 87,
        "name": "万州",
        "parent_id": 4,
        "post": 500101,
        "n": 1
    },
    {
        "id": 88,
        "name": "涪陵",
        "parent_id": 4,
        "post": 500102,
        "n": 2
    },
    {
        "id": 89,
        "name": "渝中",
        "parent_id": 4,
        "post": 500103,
        "n": 3
    },
    {
        "id": 90,
        "name": "大渡口",
        "parent_id": 4,
        "post": 500104,
        "n": 4
    },
    {
        "id": 91,
        "name": "江北",
        "parent_id": 4,
        "post": 500105,
        "n": 5
    },
    {
        "id": 92,
        "name": "沙坪坝",
        "parent_id": 4,
        "post": 500106,
        "n": 6
    },
    {
        "id": 93,
        "name": "九龙坡",
        "parent_id": 4,
        "post": 500107,
        "n": 7
    },
    {
        "id": 94,
        "name": "南岸",
        "parent_id": 4,
        "post": 500108,
        "n": 8
    },
    {
        "id": 95,
        "name": "北碚",
        "parent_id": 4,
        "post": 500109,
        "n": 9
    },
    {
        "id": 96,
        "name": "綦江",
        "parent_id": 4,
        "post": 500110,
        "n": 10
    },
    {
        "id": 97,
        "name": "大足",
        "parent_id": 4,
        "post": 500111,
        "n": 11
    },
    {
        "id": 98,
        "name": "渝北",
        "parent_id": 4,
        "post": 500112,
        "n": 12
    },
    {
        "id": 99,
        "name": "巴南",
        "parent_id": 4,
        "post": 500113,
        "n": 13
    },
    {
        "id": 100,
        "name": "黔江",
        "parent_id": 4,
        "post": 500114,
        "n": 14
    },
    {
        "id": 101,
        "name": "长寿",
        "parent_id": 4,
        "post": 500115,
        "n": 15
    },
    {
        "id": 102,
        "name": "江津",
        "parent_id": 4,
        "post": 500116,
        "n": 16
    },
    {
        "id": 103,
        "name": "合川",
        "parent_id": 4,
        "post": 500117,
        "n": 17
    },
    {
        "id": 104,
        "name": "永川",
        "parent_id": 4,
        "post": 500118,
        "n": 18
    },
    {
        "id": 105,
        "name": "南川",
        "parent_id": 4,
        "post": 500119,
        "n": 19
    },
    {
        "id": 106,
        "name": "潼南",
        "parent_id": 4,
        "post": 500223,
        "n": 25
    },
    {
        "id": 107,
        "name": "铜梁",
        "parent_id": 4,
        "post": 500151,
        "n": 21
    },
    {
        "id": 108,
        "name": "荣昌",
        "parent_id": 4,
        "post": 500226,
        "n": 26
    },
    {
        "id": 109,
        "name": "璧山",
        "parent_id": 4,
        "post": 500120,
        "n": 20
    },
    {
        "id": 110,
        "name": "梁平",
        "parent_id": 4,
        "post": 500155,
        "n": 23
    },
    {
        "id": 111,
        "name": "城口",
        "parent_id": 4,
        "post": 500229,
        "n": 27
    },
    {
        "id": 112,
        "name": "丰都",
        "parent_id": 4,
        "post": 500230,
        "n": 28
    },
    {
        "id": 113,
        "name": "垫江",
        "parent_id": 4,
        "post": 500231,
        "n": 29
    },
    {
        "id": 114,
        "name": "武隆",
        "parent_id": 4,
        "post": 500156,
        "n": 24
    },
    {
        "id": 115,
        "name": "忠县",
        "parent_id": 4,
        "post": 500233,
        "n": 30
    },
    {
        "id": 116,
        "name": "开州",
        "parent_id": 4,
        "post": 500154,
        "n": 22
    },
    {
        "id": 117,
        "name": "云阳",
        "parent_id": 4,
        "post": 500235,
        "n": 31
    },
    {
        "id": 118,
        "name": "奉节",
        "parent_id": 4,
        "post": 500236,
        "n": 32
    },
    {
        "id": 119,
        "name": "巫山",
        "parent_id": 4,
        "post": 500237,
        "n": 33
    },
    {
        "id": 120,
        "name": "巫溪",
        "parent_id": 4,
        "post": 500238,
        "n": 34
    },
    {
        "id": 121,
        "name": "石柱",
        "parent_id": 4,
        "post": 500240,
        "n": 35
    },
    {
        "id": 122,
        "name": "秀山",
        "parent_id": 4,
        "post": 500241,
        "n": 36
    },
    {
        "id": 123,
        "name": "酉阳",
        "parent_id": 4,
        "post": 500242,
        "n": 37
    },
    {
        "id": 124,
        "name": "彭水",
        "parent_id": 4,
        "post": 500243,
        "n": 38
    },
    {
        "id": 125,
        "name": "石家庄",
        "parent_id": 5,
        "post": 130100,
        "n": 1
    },
    {
        "id": 126,
        "name": "唐山",
        "parent_id": 5,
        "post": 130200,
        "n": 2
    },
    {
        "id": 127,
        "name": "秦皇岛",
        "parent_id": 5,
        "post": 130300,
        "n": 3
    },
    {
        "id": 128,
        "name": "邯郸",
        "parent_id": 5,
        "post": 130400,
        "n": 4
    },
    {
        "id": 129,
        "name": "邢台",
        "parent_id": 5,
        "post": 130500,
        "n": 5
    },
    {
        "id": 130,
        "name": "保定",
        "parent_id": 5,
        "post": 130600,
        "n": 6
    },
    {
        "id": 131,
        "name": "张家口",
        "parent_id": 5,
        "post": 130700,
        "n": 7
    },
    {
        "id": 132,
        "name": "承德",
        "parent_id": 5,
        "post": 130800,
        "n": 8
    },
    {
        "id": 133,
        "name": "沧州",
        "parent_id": 5,
        "post": 130900,
        "n": 9
    },
    {
        "id": 134,
        "name": "廊坊",
        "parent_id": 5,
        "post": 131000,
        "n": 10
    },
    {
        "id": 135,
        "name": "衡水",
        "parent_id": 5,
        "post": 131100,
        "n": 11
    },
    {
        "id": 136,
        "name": "太原",
        "parent_id": 6,
        "post": 140100,
        "n": 1
    },
    {
        "id": 137,
        "name": "大同",
        "parent_id": 6,
        "post": 140200,
        "n": 2
    },
    {
        "id": 138,
        "name": "阳泉",
        "parent_id": 6,
        "post": 140300,
        "n": 3
    },
    {
        "id": 139,
        "name": "长治",
        "parent_id": 6,
        "post": 140400,
        "n": 4
    },
    {
        "id": 140,
        "name": "晋城",
        "parent_id": 6,
        "post": 140500,
        "n": 5
    },
    {
        "id": 141,
        "name": "朔州",
        "parent_id": 6,
        "post": 140600,
        "n": 6
    },
    {
        "id": 142,
        "name": "晋中",
        "parent_id": 6,
        "post": 140700,
        "n": 7
    },
    {
        "id": 143,
        "name": "运城",
        "parent_id": 6,
        "post": 140800,
        "n": 8
    },
    {
        "id": 144,
        "name": "忻州",
        "parent_id": 6,
        "post": 140900,
        "n": 9
    },
    {
        "id": 145,
        "name": "临汾",
        "parent_id": 6,
        "post": 141000,
        "n": 10
    },
    {
        "id": 146,
        "name": "吕梁",
        "parent_id": 6,
        "post": 141100,
        "n": 11
    },
    {
        "id": 147,
        "name": "呼和浩特",
        "parent_id": 7,
        "post": 150100,
        "n": 1
    },
    {
        "id": 148,
        "name": "包头",
        "parent_id": 7,
        "post": 150200,
        "n": 2
    },
    {
        "id": 149,
        "name": "乌海",
        "parent_id": 7,
        "post": 150300,
        "n": 3
    },
    {
        "id": 150,
        "name": "赤峰",
        "parent_id": 7,
        "post": 150400,
        "n": 4
    },
    {
        "id": 151,
        "name": "通辽",
        "parent_id": 7,
        "post": 150500,
        "n": 5
    },
    {
        "id": 152,
        "name": "鄂尔多斯",
        "parent_id": 7,
        "post": 150600,
        "n": 6
    },
    {
        "id": 153,
        "name": "呼伦贝尔",
        "parent_id": 7,
        "post": 150700,
        "n": 7
    },
    {
        "id": 154,
        "name": "巴彦淖尔",
        "parent_id": 7,
        "post": 150800,
        "n": 8
    },
    {
        "id": 155,
        "name": "乌兰察布",
        "parent_id": 7,
        "post": 150900,
        "n": 9
    },
    {
        "id": 156,
        "name": "兴安",
        "parent_id": 7,
        "post": 152200,
        "n": 10
    },
    {
        "id": 157,
        "name": "锡林郭勒",
        "parent_id": 7,
        "post": 152500,
        "n": 11
    },
    {
        "id": 158,
        "name": "阿拉善",
        "parent_id": 7,
        "post": 152900,
        "n": 12
    },
    {
        "id": 159,
        "name": "沈阳",
        "parent_id": 8,
        "post": 210100,
        "n": 1
    },
    {
        "id": 160,
        "name": "大连",
        "parent_id": 8,
        "post": 210200,
        "n": 2
    },
    {
        "id": 161,
        "name": "鞍山",
        "parent_id": 8,
        "post": 210300,
        "n": 3
    },
    {
        "id": 162,
        "name": "抚顺",
        "parent_id": 8,
        "post": 210400,
        "n": 4
    },
    {
        "id": 163,
        "name": "本溪",
        "parent_id": 8,
        "post": 210500,
        "n": 5
    },
    {
        "id": 164,
        "name": "丹东",
        "parent_id": 8,
        "post": 210600,
        "n": 6
    },
    {
        "id": 165,
        "name": "锦州",
        "parent_id": 8,
        "post": 210700,
        "n": 7
    },
    {
        "id": 166,
        "name": "营口",
        "parent_id": 8,
        "post": 210800,
        "n": 8
    },
    {
        "id": 167,
        "name": "阜新",
        "parent_id": 8,
        "post": 210900,
        "n": 9
    },
    {
        "id": 168,
        "name": "辽阳",
        "parent_id": 8,
        "post": 211000,
        "n": 10
    },
    {
        "id": 169,
        "name": "盘锦",
        "parent_id": 8,
        "post": 211100,
        "n": 11
    },
    {
        "id": 170,
        "name": "铁岭",
        "parent_id": 8,
        "post": 211200,
        "n": 12
    },
    {
        "id": 171,
        "name": "朝阳",
        "parent_id": 8,
        "post": 211300,
        "n": 13
    },
    {
        "id": 172,
        "name": "葫芦岛",
        "parent_id": 8,
        "post": 211400,
        "n": 14
    },
    {
        "id": 173,
        "name": "长春",
        "parent_id": 9,
        "post": 220100,
        "n": 1
    },
    {
        "id": 174,
        "name": "吉林",
        "parent_id": 9,
        "post": 220200,
        "n": 2
    },
    {
        "id": 175,
        "name": "四平",
        "parent_id": 9,
        "post": 220300,
        "n": 3
    },
    {
        "id": 176,
        "name": "辽源",
        "parent_id": 9,
        "post": 220400,
        "n": 4
    },
    {
        "id": 177,
        "name": "通化",
        "parent_id": 9,
        "post": 220500,
        "n": 5
    },
    {
        "id": 178,
        "name": "白山",
        "parent_id": 9,
        "post": 220600,
        "n": 6
    },
    {
        "id": 179,
        "name": "松原",
        "parent_id": 9,
        "post": 220700,
        "n": 7
    },
    {
        "id": 180,
        "name": "白城",
        "parent_id": 9,
        "post": 220800,
        "n": 8
    },
    {
        "id": 181,
        "name": "延边",
        "parent_id": 9,
        "post": 222400,
        "n": 9
    },
    {
        "id": 182,
        "name": "哈尔滨",
        "parent_id": 10,
        "post": 230100,
        "n": 1
    },
    {
        "id": 183,
        "name": "齐齐哈尔",
        "parent_id": 10,
        "post": 230200,
        "n": 2
    },
    {
        "id": 184,
        "name": "鸡西",
        "parent_id": 10,
        "post": 230300,
        "n": 3
    },
    {
        "id": 185,
        "name": "鹤岗",
        "parent_id": 10,
        "post": 230400,
        "n": 4
    },
    {
        "id": 186,
        "name": "双鸭山",
        "parent_id": 10,
        "post": 230500,
        "n": 5
    },
    {
        "id": 187,
        "name": "大庆",
        "parent_id": 10,
        "post": 230600,
        "n": 6
    },
    {
        "id": 188,
        "name": "伊春",
        "parent_id": 10,
        "post": 230700,
        "n": 7
    },
    {
        "id": 189,
        "name": "佳木斯",
        "parent_id": 10,
        "post": 230800,
        "n": 8
    },
    {
        "id": 190,
        "name": "七台河",
        "parent_id": 10,
        "post": 230900,
        "n": 9
    },
    {
        "id": 191,
        "name": "牡丹江",
        "parent_id": 10,
        "post": 231000,
        "n": 10
    },
    {
        "id": 192,
        "name": "黑河",
        "parent_id": 10,
        "post": 231100,
        "n": 11
    },
    {
        "id": 193,
        "name": "绥化",
        "parent_id": 10,
        "post": 231200,
        "n": 12
    },
    {
        "id": 194,
        "name": "大兴安岭",
        "parent_id": 10,
        "post": 232700,
        "n": 13
    },
    {
        "id": 195,
        "name": "南京",
        "parent_id": 11,
        "post": 320100,
        "n": 1
    },
    {
        "id": 196,
        "name": "无锡",
        "parent_id": 11,
        "post": 320200,
        "n": 2
    },
    {
        "id": 197,
        "name": "徐州",
        "parent_id": 11,
        "post": 320300,
        "n": 3
    },
    {
        "id": 198,
        "name": "常州",
        "parent_id": 11,
        "post": 320400,
        "n": 4
    },
    {
        "id": 199,
        "name": "苏州",
        "parent_id": 11,
        "post": 320500,
        "n": 5
    },
    {
        "id": 200,
        "name": "南通",
        "parent_id": 11,
        "post": 320600,
        "n": 6
    },
    {
        "id": 201,
        "name": "连云港",
        "parent_id": 11,
        "post": 320700,
        "n": 7
    },
    {
        "id": 202,
        "name": "淮安",
        "parent_id": 11,
        "post": 320800,
        "n": 8
    },
    {
        "id": 203,
        "name": "盐城",
        "parent_id": 11,
        "post": 320900,
        "n": 9
    },
    {
        "id": 204,
        "name": "扬州",
        "parent_id": 11,
        "post": 321000,
        "n": 10
    },
    {
        "id": 205,
        "name": "镇江",
        "parent_id": 11,
        "post": 321100,
        "n": 11
    },
    {
        "id": 206,
        "name": "泰州",
        "parent_id": 11,
        "post": 321200,
        "n": 12
    },
    {
        "id": 207,
        "name": "宿迁",
        "parent_id": 11,
        "post": 321300,
        "n": 13
    },
    {
        "id": 208,
        "name": "杭州",
        "parent_id": 12,
        "post": 330100,
        "n": 1
    },
    {
        "id": 209,
        "name": "宁波",
        "parent_id": 12,
        "post": 330200,
        "n": 2
    },
    {
        "id": 210,
        "name": "温州",
        "parent_id": 12,
        "post": 330300,
        "n": 3
    },
    {
        "id": 211,
        "name": "嘉兴",
        "parent_id": 12,
        "post": 330400,
        "n": 4
    },
    {
        "id": 212,
        "name": "湖州",
        "parent_id": 12,
        "post": 330500,
        "n": 5
    },
    {
        "id": 213,
        "name": "绍兴",
        "parent_id": 12,
        "post": 330600,
        "n": 6
    },
    {
        "id": 214,
        "name": "金华",
        "parent_id": 12,
        "post": 330700,
        "n": 7
    },
    {
        "id": 215,
        "name": "衢州",
        "parent_id": 12,
        "post": 330800,
        "n": 8
    },
    {
        "id": 216,
        "name": "舟山",
        "parent_id": 12,
        "post": 330900,
        "n": 9
    },
    {
        "id": 217,
        "name": "台州",
        "parent_id": 12,
        "post": 331000,
        "n": 10
    },
    {
        "id": 218,
        "name": "丽水",
        "parent_id": 12,
        "post": 331100,
        "n": 11
    },
    {
        "id": 219,
        "name": "合肥",
        "parent_id": 13,
        "post": 340100,
        "n": 1
    },
    {
        "id": 220,
        "name": "芜湖",
        "parent_id": 13,
        "post": 340200,
        "n": 2
    },
    {
        "id": 221,
        "name": "蚌埠",
        "parent_id": 13,
        "post": 340300,
        "n": 3
    },
    {
        "id": 222,
        "name": "淮南",
        "parent_id": 13,
        "post": 340400,
        "n": 4
    },
    {
        "id": 223,
        "name": "马鞍山",
        "parent_id": 13,
        "post": 340500,
        "n": 5
    },
    {
        "id": 224,
        "name": "淮北",
        "parent_id": 13,
        "post": 340600,
        "n": 6
    },
    {
        "id": 225,
        "name": "铜陵",
        "parent_id": 13,
        "post": 340700,
        "n": 7
    },
    {
        "id": 226,
        "name": "安庆",
        "parent_id": 13,
        "post": 340800,
        "n": 8
    },
    {
        "id": 227,
        "name": "黄山",
        "parent_id": 13,
        "post": 341000,
        "n": 9
    },
    {
        "id": 228,
        "name": "滁州",
        "parent_id": 13,
        "post": 341100,
        "n": 10
    },
    {
        "id": 229,
        "name": "阜阳",
        "parent_id": 13,
        "post": 341200,
        "n": 11
    },
    {
        "id": 230,
        "name": "宿州",
        "parent_id": 13,
        "post": 341300,
        "n": 12
    },
    {
        "id": 231,
        "name": "六安",
        "parent_id": 13,
        "post": 341500,
        "n": 13
    },
    {
        "id": 232,
        "name": "亳州",
        "parent_id": 13,
        "post": 341600,
        "n": 14
    },
    {
        "id": 233,
        "name": "池州",
        "parent_id": 13,
        "post": 341700,
        "n": 15
    },
    {
        "id": 234,
        "name": "宣城",
        "parent_id": 13,
        "post": 341800,
        "n": 16
    },
    {
        "id": 235,
        "name": "福州",
        "parent_id": 14,
        "post": 350100,
        "n": 1
    },
    {
        "id": 236,
        "name": "厦门",
        "parent_id": 14,
        "post": 350200,
        "n": 2
    },
    {
        "id": 237,
        "name": "莆田",
        "parent_id": 14,
        "post": 350300,
        "n": 3
    },
    {
        "id": 238,
        "name": "三明",
        "parent_id": 14,
        "post": 350400,
        "n": 4
    },
    {
        "id": 239,
        "name": "泉州",
        "parent_id": 14,
        "post": 350500,
        "n": 5
    },
    {
        "id": 240,
        "name": "漳州",
        "parent_id": 14,
        "post": 350600,
        "n": 6
    },
    {
        "id": 241,
        "name": "南平",
        "parent_id": 14,
        "post": 350700,
        "n": 7
    },
    {
        "id": 242,
        "name": "龙岩",
        "parent_id": 14,
        "post": 350800,
        "n": 8
    },
    {
        "id": 243,
        "name": "宁德",
        "parent_id": 14,
        "post": 350900,
        "n": 9
    },
    {
        "id": 244,
        "name": "南昌",
        "parent_id": 15,
        "post": 360100,
        "n": 1
    },
    {
        "id": 245,
        "name": "景德镇",
        "parent_id": 15,
        "post": 360200,
        "n": 2
    },
    {
        "id": 246,
        "name": "萍乡",
        "parent_id": 15,
        "post": 360300,
        "n": 3
    },
    {
        "id": 247,
        "name": "九江",
        "parent_id": 15,
        "post": 360400,
        "n": 4
    },
    {
        "id": 248,
        "name": "新余",
        "parent_id": 15,
        "post": 360500,
        "n": 5
    },
    {
        "id": 249,
        "name": "鹰潭",
        "parent_id": 15,
        "post": 360600,
        "n": 6
    },
    {
        "id": 250,
        "name": "赣州",
        "parent_id": 15,
        "post": 360700,
        "n": 7
    },
    {
        "id": 251,
        "name": "吉安",
        "parent_id": 15,
        "post": 360800,
        "n": 8
    },
    {
        "id": 252,
        "name": "宜春",
        "parent_id": 15,
        "post": 360900,
        "n": 9
    },
    {
        "id": 253,
        "name": "抚州",
        "parent_id": 15,
        "post": 361000,
        "n": 10
    },
    {
        "id": 254,
        "name": "上饶",
        "parent_id": 15,
        "post": 361100,
        "n": 11
    },
    {
        "id": 255,
        "name": "济南",
        "parent_id": 16,
        "post": 370100,
        "n": 1
    },
    {
        "id": 256,
        "name": "青岛",
        "parent_id": 16,
        "post": 370200,
        "n": 2
    },
    {
        "id": 257,
        "name": "淄博",
        "parent_id": 16,
        "post": 370300,
        "n": 3
    },
    {
        "id": 258,
        "name": "枣庄",
        "parent_id": 16,
        "post": 370400,
        "n": 4
    },
    {
        "id": 259,
        "name": "东营",
        "parent_id": 16,
        "post": 370500,
        "n": 5
    },
    {
        "id": 260,
        "name": "烟台",
        "parent_id": 16,
        "post": 370600,
        "n": 6
    },
    {
        "id": 261,
        "name": "潍坊",
        "parent_id": 16,
        "post": 370700,
        "n": 7
    },
    {
        "id": 262,
        "name": "济宁",
        "parent_id": 16,
        "post": 370800,
        "n": 8
    },
    {
        "id": 263,
        "name": "泰安",
        "parent_id": 16,
        "post": 370900,
        "n": 9
    },
    {
        "id": 264,
        "name": "威海",
        "parent_id": 16,
        "post": 371000,
        "n": 10
    },
    {
        "id": 265,
        "name": "日照",
        "parent_id": 16,
        "post": 371100,
        "n": 11
    },
    {
        "id": 267,
        "name": "临沂",
        "parent_id": 16,
        "post": 371300,
        "n": 13
    },
    {
        "id": 268,
        "name": "德州",
        "parent_id": 16,
        "post": 371400,
        "n": 14
    },
    {
        "id": 269,
        "name": "聊城",
        "parent_id": 16,
        "post": 371500,
        "n": 15
    },
    {
        "id": 270,
        "name": "滨州",
        "parent_id": 16,
        "post": 371600,
        "n": 16
    },
    {
        "id": 271,
        "name": "菏泽",
        "parent_id": 16,
        "post": 371700,
        "n": 17
    },
    {
        "id": 272,
        "name": "郑州",
        "parent_id": 17,
        "post": 410100,
        "n": 1
    },
    {
        "id": 273,
        "name": "开封",
        "parent_id": 17,
        "post": 410200,
        "n": 2
    },
    {
        "id": 274,
        "name": "洛阳",
        "parent_id": 17,
        "post": 410300,
        "n": 3
    },
    {
        "id": 275,
        "name": "平顶山",
        "parent_id": 17,
        "post": 410400,
        "n": 4
    },
    {
        "id": 276,
        "name": "安阳",
        "parent_id": 17,
        "post": 410500,
        "n": 5
    },
    {
        "id": 277,
        "name": "鹤壁",
        "parent_id": 17,
        "post": 410600,
        "n": 6
    },
    {
        "id": 278,
        "name": "新乡",
        "parent_id": 17,
        "post": 410700,
        "n": 7
    },
    {
        "id": 279,
        "name": "焦作",
        "parent_id": 17,
        "post": 410800,
        "n": 8
    },
    {
        "id": 280,
        "name": "濮阳",
        "parent_id": 17,
        "post": 410900,
        "n": 9
    },
    {
        "id": 281,
        "name": "许昌",
        "parent_id": 17,
        "post": 411000,
        "n": 10
    },
    {
        "id": 282,
        "name": "漯河",
        "parent_id": 17,
        "post": 411100,
        "n": 11
    },
    {
        "id": 283,
        "name": "三门峡",
        "parent_id": 17,
        "post": 411200,
        "n": 12
    },
    {
        "id": 284,
        "name": "南阳",
        "parent_id": 17,
        "post": 411300,
        "n": 13
    },
    {
        "id": 285,
        "name": "商丘",
        "parent_id": 17,
        "post": 411400,
        "n": 14
    },
    {
        "id": 286,
        "name": "信阳",
        "parent_id": 17,
        "post": 411500,
        "n": 15
    },
    {
        "id": 287,
        "name": "周口",
        "parent_id": 17,
        "post": 411600,
        "n": 16
    },
    {
        "id": 288,
        "name": "驻马店",
        "parent_id": 17,
        "post": 411700,
        "n": 17
    },
    {
        "id": 289,
        "name": "济源",
        "parent_id": 17,
        "post": 419001,
        "n": 18
    },
    {
        "id": 290,
        "name": "武汉",
        "parent_id": 18,
        "post": 420100,
        "n": 1
    },
    {
        "id": 291,
        "name": "黄石",
        "parent_id": 18,
        "post": 420200,
        "n": 2
    },
    {
        "id": 292,
        "name": "十堰",
        "parent_id": 18,
        "post": 420300,
        "n": 3
    },
    {
        "id": 293,
        "name": "宜昌",
        "parent_id": 18,
        "post": 420500,
        "n": 4
    },
    {
        "id": 294,
        "name": "襄阳",
        "parent_id": 18,
        "post": 420600,
        "n": 5
    },
    {
        "id": 295,
        "name": "鄂州",
        "parent_id": 18,
        "post": 420700,
        "n": 6
    },
    {
        "id": 296,
        "name": "荆门",
        "parent_id": 18,
        "post": 420800,
        "n": 7
    },
    {
        "id": 297,
        "name": "孝感",
        "parent_id": 18,
        "post": 420900,
        "n": 8
    },
    {
        "id": 298,
        "name": "荆州",
        "parent_id": 18,
        "post": 421000,
        "n": 9
    },
    {
        "id": 299,
        "name": "黄冈",
        "parent_id": 18,
        "post": 421100,
        "n": 10
    },
    {
        "id": 300,
        "name": "咸宁",
        "parent_id": 18,
        "post": 421200,
        "n": 11
    },
    {
        "id": 301,
        "name": "随州",
        "parent_id": 18,
        "post": 421300,
        "n": 12
    },
    {
        "id": 302,
        "name": "恩施",
        "parent_id": 18,
        "post": 422800,
        "n": 13
    },
    {
        "id": 303,
        "name": "仙桃",
        "parent_id": 18,
        "post": 429004,
        "n": 14
    },
    {
        "id": 304,
        "name": "潜江",
        "parent_id": 18,
        "post": 429005,
        "n": 15
    },
    {
        "id": 305,
        "name": "天门",
        "parent_id": 18,
        "post": 429006,
        "n": 16
    },
    {
        "id": 306,
        "name": "神农架林区",
        "parent_id": 18,
        "post": 429021,
        "n": 17
    },
    {
        "id": 307,
        "name": "长沙",
        "parent_id": 19,
        "post": 430100,
        "n": 1
    },
    {
        "id": 308,
        "name": "株洲",
        "parent_id": 19,
        "post": 430200,
        "n": 2
    },
    {
        "id": 309,
        "name": "湘潭",
        "parent_id": 19,
        "post": 430300,
        "n": 3
    },
    {
        "id": 310,
        "name": "衡阳",
        "parent_id": 19,
        "post": 430400,
        "n": 4
    },
    {
        "id": 311,
        "name": "邵阳",
        "parent_id": 19,
        "post": 430500,
        "n": 5
    },
    {
        "id": 312,
        "name": "岳阳",
        "parent_id": 19,
        "post": 430600,
        "n": 6
    },
    {
        "id": 313,
        "name": "常德",
        "parent_id": 19,
        "post": 430700,
        "n": 7
    },
    {
        "id": 314,
        "name": "张家界",
        "parent_id": 19,
        "post": 430800,
        "n": 8
    },
    {
        "id": 315,
        "name": "益阳",
        "parent_id": 19,
        "post": 430900,
        "n": 9
    },
    {
        "id": 316,
        "name": "郴州",
        "parent_id": 19,
        "post": 431000,
        "n": 10
    },
    {
        "id": 317,
        "name": "永州",
        "parent_id": 19,
        "post": 431100,
        "n": 11
    },
    {
        "id": 318,
        "name": "怀化",
        "parent_id": 19,
        "post": 431200,
        "n": 12
    },
    {
        "id": 319,
        "name": "娄底",
        "parent_id": 19,
        "post": 431300,
        "n": 13
    },
    {
        "id": 320,
        "name": "湘西",
        "parent_id": 19,
        "post": 433100,
        "n": 14
    },
    {
        "id": 321,
        "name": "广州",
        "parent_id": 20,
        "post": 440100,
        "n": 1
    },
    {
        "id": 322,
        "name": "韶关",
        "parent_id": 20,
        "post": 440200,
        "n": 2
    },
    {
        "id": 323,
        "name": "深圳",
        "parent_id": 20,
        "post": 440300,
        "n": 3
    },
    {
        "id": 324,
        "name": "珠海",
        "parent_id": 20,
        "post": 440400,
        "n": 4
    },
    {
        "id": 325,
        "name": "汕头",
        "parent_id": 20,
        "post": 440500,
        "n": 5
    },
    {
        "id": 326,
        "name": "佛山",
        "parent_id": 20,
        "post": 440600,
        "n": 6
    },
    {
        "id": 327,
        "name": "江门",
        "parent_id": 20,
        "post": 440700,
        "n": 7
    },
    {
        "id": 328,
        "name": "湛江",
        "parent_id": 20,
        "post": 440800,
        "n": 8
    },
    {
        "id": 329,
        "name": "茂名",
        "parent_id": 20,
        "post": 440900,
        "n": 9
    },
    {
        "id": 330,
        "name": "肇庆",
        "parent_id": 20,
        "post": 441200,
        "n": 10
    },
    {
        "id": 331,
        "name": "惠州",
        "parent_id": 20,
        "post": 441300,
        "n": 11
    },
    {
        "id": 332,
        "name": "梅州",
        "parent_id": 20,
        "post": 441400,
        "n": 12
    },
    {
        "id": 333,
        "name": "汕尾",
        "parent_id": 20,
        "post": 441500,
        "n": 13
    },
    {
        "id": 334,
        "name": "河源",
        "parent_id": 20,
        "post": 441600,
        "n": 14
    },
    {
        "id": 335,
        "name": "阳江",
        "parent_id": 20,
        "post": 441700,
        "n": 15
    },
    {
        "id": 336,
        "name": "清远",
        "parent_id": 20,
        "post": 441800,
        "n": 16
    },
    {
        "id": 337,
        "name": "东莞",
        "parent_id": 20,
        "post": 441900,
        "n": 17
    },
    {
        "id": 338,
        "name": "中山",
        "parent_id": 20,
        "post": 442000,
        "n": 18
    },
    {
        "id": 339,
        "name": "潮州",
        "parent_id": 20,
        "post": 445100,
        "n": 19
    },
    {
        "id": 340,
        "name": "揭阳",
        "parent_id": 20,
        "post": 445200,
        "n": 20
    },
    {
        "id": 341,
        "name": "云浮",
        "parent_id": 20,
        "post": 445300,
        "n": 21
    },
    {
        "id": 342,
        "name": "南宁",
        "parent_id": 21,
        "post": 450100,
        "n": 1
    },
    {
        "id": 343,
        "name": "柳州",
        "parent_id": 21,
        "post": 450200,
        "n": 2
    },
    {
        "id": 344,
        "name": "桂林",
        "parent_id": 21,
        "post": 450300,
        "n": 3
    },
    {
        "id": 345,
        "name": "梧州",
        "parent_id": 21,
        "post": 450400,
        "n": 4
    },
    {
        "id": 346,
        "name": "北海",
        "parent_id": 21,
        "post": 450500,
        "n": 5
    },
    {
        "id": 347,
        "name": "防城港",
        "parent_id": 21,
        "post": 450600,
        "n": 6
    },
    {
        "id": 348,
        "name": "钦州",
        "parent_id": 21,
        "post": 450700,
        "n": 7
    },
    {
        "id": 349,
        "name": "贵港",
        "parent_id": 21,
        "post": 450800,
        "n": 8
    },
    {
        "id": 350,
        "name": "玉林",
        "parent_id": 21,
        "post": 450900,
        "n": 9
    },
    {
        "id": 351,
        "name": "百色",
        "parent_id": 21,
        "post": 451000,
        "n": 10
    },
    {
        "id": 352,
        "name": "贺州",
        "parent_id": 21,
        "post": 451100,
        "n": 11
    },
    {
        "id": 353,
        "name": "河池",
        "parent_id": 21,
        "post": 451200,
        "n": 12
    },
    {
        "id": 354,
        "name": "来宾",
        "parent_id": 21,
        "post": 451300,
        "n": 13
    },
    {
        "id": 355,
        "name": "崇左",
        "parent_id": 21,
        "post": 451400,
        "n": 14
    },
    {
        "id": 356,
        "name": "海口",
        "parent_id": 22,
        "post": 460100,
        "n": 1
    },
    {
        "id": 357,
        "name": "三亚",
        "parent_id": 22,
        "post": 460200,
        "n": 2
    },
    {
        "id": 358,
        "name": "三沙",
        "parent_id": 22,
        "post": 460300,
        "n": 3
    },
    {
        "id": 359,
        "name": "五指山",
        "parent_id": 22,
        "post": 469001,
        "n": 5
    },
    {
        "id": 360,
        "name": "琼海",
        "parent_id": 22,
        "post": 469002,
        "n": 6
    },
    {
        "id": 361,
        "name": "儋州",
        "parent_id": 22,
        "post": 460400,
        "n": 4
    },
    {
        "id": 362,
        "name": "文昌",
        "parent_id": 22,
        "post": 469005,
        "n": 7
    },
    {
        "id": 363,
        "name": "万宁",
        "parent_id": 22,
        "post": 469006,
        "n": 8
    },
    {
        "id": 364,
        "name": "东方",
        "parent_id": 22,
        "post": 469007,
        "n": 9
    },
    {
        "id": 365,
        "name": "定安",
        "parent_id": 22,
        "post": 469021,
        "n": 10
    },
    {
        "id": 366,
        "name": "屯昌",
        "parent_id": 22,
        "post": 469022,
        "n": 11
    },
    {
        "id": 367,
        "name": "澄迈",
        "parent_id": 22,
        "post": 469023,
        "n": 12
    },
    {
        "id": 368,
        "name": "临高",
        "parent_id": 22,
        "post": 469024,
        "n": 13
    },
    {
        "id": 369,
        "name": "白沙",
        "parent_id": 22,
        "post": 469025,
        "n": 14
    },
    {
        "id": 370,
        "name": "昌江",
        "parent_id": 22,
        "post": 469026,
        "n": 15
    },
    {
        "id": 371,
        "name": "乐东",
        "parent_id": 22,
        "post": 469027,
        "n": 16
    },
    {
        "id": 372,
        "name": "陵水",
        "parent_id": 22,
        "post": 469028,
        "n": 17
    },
    {
        "id": 373,
        "name": "保亭",
        "parent_id": 22,
        "post": 469029,
        "n": 18
    },
    {
        "id": 374,
        "name": "琼中",
        "parent_id": 22,
        "post": 469030,
        "n": 19
    },
    {
        "id": 375,
        "name": "成都",
        "parent_id": 23,
        "post": 510100,
        "n": 1
    },
    {
        "id": 376,
        "name": "自贡",
        "parent_id": 23,
        "post": 510300,
        "n": 2
    },
    {
        "id": 377,
        "name": "攀枝花",
        "parent_id": 23,
        "post": 510400,
        "n": 3
    },
    {
        "id": 378,
        "name": "泸州",
        "parent_id": 23,
        "post": 510500,
        "n": 4
    },
    {
        "id": 379,
        "name": "德阳",
        "parent_id": 23,
        "post": 510600,
        "n": 5
    },
    {
        "id": 380,
        "name": "绵阳",
        "parent_id": 23,
        "post": 510700,
        "n": 6
    },
    {
        "id": 381,
        "name": "广元",
        "parent_id": 23,
        "post": 510800,
        "n": 7
    },
    {
        "id": 382,
        "name": "遂宁",
        "parent_id": 23,
        "post": 510900,
        "n": 8
    },
    {
        "id": 383,
        "name": "内江",
        "parent_id": 23,
        "post": 511000,
        "n": 9
    },
    {
        "id": 384,
        "name": "乐山",
        "parent_id": 23,
        "post": 511100,
        "n": 10
    },
    {
        "id": 385,
        "name": "南充",
        "parent_id": 23,
        "post": 511300,
        "n": 11
    },
    {
        "id": 386,
        "name": "眉山",
        "parent_id": 23,
        "post": 511400,
        "n": 12
    },
    {
        "id": 387,
        "name": "宜宾",
        "parent_id": 23,
        "post": 511500,
        "n": 13
    },
    {
        "id": 388,
        "name": "广安",
        "parent_id": 23,
        "post": 511600,
        "n": 14
    },
    {
        "id": 389,
        "name": "达州",
        "parent_id": 23,
        "post": 511700,
        "n": 15
    },
    {
        "id": 390,
        "name": "雅安",
        "parent_id": 23,
        "post": 511800,
        "n": 16
    },
    {
        "id": 391,
        "name": "巴中",
        "parent_id": 23,
        "post": 511900,
        "n": 17
    },
    {
        "id": 392,
        "name": "资阳",
        "parent_id": 23,
        "post": 512000,
        "n": 18
    },
    {
        "id": 393,
        "name": "阿坝",
        "parent_id": 23,
        "post": 513200,
        "n": 19
    },
    {
        "id": 394,
        "name": "甘孜",
        "parent_id": 23,
        "post": 513300,
        "n": 20
    },
    {
        "id": 395,
        "name": "凉山",
        "parent_id": 23,
        "post": 615000,
        "n": 21
    },
    {
        "id": 396,
        "name": "贵阳",
        "parent_id": 24,
        "post": 520100,
        "n": 1
    },
    {
        "id": 397,
        "name": "六盘水",
        "parent_id": 24,
        "post": 520200,
        "n": 2
    },
    {
        "id": 398,
        "name": "遵义",
        "parent_id": 24,
        "post": 520300,
        "n": 3
    },
    {
        "id": 399,
        "name": "安顺",
        "parent_id": 24,
        "post": 520400,
        "n": 4
    },
    {
        "id": 400,
        "name": "毕节",
        "parent_id": 24,
        "post": 520500,
        "n": 5
    },
    {
        "id": 401,
        "name": "铜仁",
        "parent_id": 24,
        "post": 520600,
        "n": 6
    },
    {
        "id": 402,
        "name": "黔西南",
        "parent_id": 24,
        "post": 522300,
        "n": 7
    },
    {
        "id": 403,
        "name": "黔东南",
        "parent_id": 24,
        "post": 522600,
        "n": 8
    },
    {
        "id": 404,
        "name": "黔南",
        "parent_id": 24,
        "post": 522700,
        "n": 9
    },
    {
        "id": 405,
        "name": "昆明",
        "parent_id": 25,
        "post": 530100,
        "n": 1
    },
    {
        "id": 406,
        "name": "曲靖",
        "parent_id": 25,
        "post": 530300,
        "n": 2
    },
    {
        "id": 407,
        "name": "玉溪",
        "parent_id": 25,
        "post": 530400,
        "n": 3
    },
    {
        "id": 408,
        "name": "昭通",
        "parent_id": 25,
        "post": 530600,
        "n": 4
    },
    {
        "id": 409,
        "name": "丽江",
        "parent_id": 25,
        "post": 530700,
        "n": 5
    },
    {
        "id": 410,
        "name": "普洱",
        "parent_id": 25,
        "post": 530800,
        "n": 6
    },
    {
        "id": 411,
        "name": "临沧",
        "parent_id": 25,
        "post": 530900,
        "n": 7
    },
    {
        "id": 412,
        "name": "楚雄",
        "parent_id": 25,
        "post": 532300,
        "n": 8
    },
    {
        "id": 413,
        "name": "红河",
        "parent_id": 25,
        "post": 532500,
        "n": 9
    },
    {
        "id": 414,
        "name": "文山",
        "parent_id": 25,
        "post": 532600,
        "n": 10
    },
    {
        "id": 415,
        "name": "西双版纳",
        "parent_id": 25,
        "post": 532800,
        "n": 11
    },
    {
        "id": 416,
        "name": "大理",
        "parent_id": 25,
        "post": 532900,
        "n": 12
    },
    {
        "id": 417,
        "name": "德宏",
        "parent_id": 25,
        "post": 533100,
        "n": 13
    },
    {
        "id": 418,
        "name": "怒江",
        "parent_id": 25,
        "post": 533300,
        "n": 14
    },
    {
        "id": 419,
        "name": "迪庆",
        "parent_id": 25,
        "post": 533400,
        "n": 15
    },
    {
        "id": 420,
        "name": "保山",
        "parent_id": 25,
        "post": 678000,
        "n": 16
    },
    {
        "id": 421,
        "name": "拉萨",
        "parent_id": 26,
        "post": 540100,
        "n": 1
    },
    {
        "id": 422,
        "name": "昌都",
        "parent_id": 26,
        "post": 542100,
        "n": 2
    },
    {
        "id": 423,
        "name": "山南",
        "parent_id": 26,
        "post": 540500,
        "n": 3
    },
    {
        "id": 424,
        "name": "日喀则",
        "parent_id": 26,
        "post": 542300,
        "n": 4
    },
    {
        "id": 425,
        "name": "那曲",
        "parent_id": 26,
        "post": 540600,
        "n": 5
    },
    {
        "id": 426,
        "name": "阿里",
        "parent_id": 26,
        "post": 542500,
        "n": 6
    },
    {
        "id": 427,
        "name": "林芝",
        "parent_id": 26,
        "post": 540400,
        "n": 7
    },
    {
        "id": 428,
        "name": "西安",
        "parent_id": 27,
        "post": 610100,
        "n": 1
    },
    {
        "id": 429,
        "name": "铜川",
        "parent_id": 27,
        "post": 610200,
        "n": 2
    },
    {
        "id": 430,
        "name": "宝鸡",
        "parent_id": 27,
        "post": 610300,
        "n": 3
    },
    {
        "id": 431,
        "name": "咸阳",
        "parent_id": 27,
        "post": 610400,
        "n": 4
    },
    {
        "id": 432,
        "name": "渭南",
        "parent_id": 27,
        "post": 610500,
        "n": 5
    },
    {
        "id": 433,
        "name": "延安",
        "parent_id": 27,
        "post": 610600,
        "n": 6
    },
    {
        "id": 434,
        "name": "汉中",
        "parent_id": 27,
        "post": 610700,
        "n": 7
    },
    {
        "id": 435,
        "name": "榆林",
        "parent_id": 27,
        "post": 610800,
        "n": 8
    },
    {
        "id": 436,
        "name": "安康",
        "parent_id": 27,
        "post": 610900,
        "n": 9
    },
    {
        "id": 437,
        "name": "商洛",
        "parent_id": 27,
        "post": 611000,
        "n": 10
    },
    {
        "id": 438,
        "name": "兰州",
        "parent_id": 28,
        "post": 620100,
        "n": 1
    },
    {
        "id": 439,
        "name": "嘉峪关",
        "parent_id": 28,
        "post": 620200,
        "n": 2
    },
    {
        "id": 440,
        "name": "金昌",
        "parent_id": 28,
        "post": 620300,
        "n": 3
    },
    {
        "id": 441,
        "name": "白银",
        "parent_id": 28,
        "post": 620400,
        "n": 4
    },
    {
        "id": 442,
        "name": "天水",
        "parent_id": 28,
        "post": 620500,
        "n": 5
    },
    {
        "id": 443,
        "name": "武威",
        "parent_id": 28,
        "post": 620600,
        "n": 6
    },
    {
        "id": 444,
        "name": "张掖",
        "parent_id": 28,
        "post": 620700,
        "n": 7
    },
    {
        "id": 445,
        "name": "平凉",
        "parent_id": 28,
        "post": 620800,
        "n": 8
    },
    {
        "id": 446,
        "name": "酒泉",
        "parent_id": 28,
        "post": 620900,
        "n": 9
    },
    {
        "id": 447,
        "name": "庆阳",
        "parent_id": 28,
        "post": 621000,
        "n": 10
    },
    {
        "id": 448,
        "name": "定西",
        "parent_id": 28,
        "post": 621100,
        "n": 11
    },
    {
        "id": 449,
        "name": "陇南",
        "parent_id": 28,
        "post": 621200,
        "n": 12
    },
    {
        "id": 450,
        "name": "临夏",
        "parent_id": 28,
        "post": 622900,
        "n": 13
    },
    {
        "id": 451,
        "name": "甘南",
        "parent_id": 28,
        "post": 623000,
        "n": 14
    },
    {
        "id": 452,
        "name": "西宁",
        "parent_id": 29,
        "post": 630100,
        "n": 1
    },
    {
        "id": 453,
        "name": "海东",
        "parent_id": 29,
        "post": 632100,
        "n": 2
    },
    {
        "id": 454,
        "name": "海北",
        "parent_id": 29,
        "post": 632200,
        "n": 3
    },
    {
        "id": 455,
        "name": "黄南",
        "parent_id": 29,
        "post": 632300,
        "n": 4
    },
    {
        "id": 456,
        "name": "海南",
        "parent_id": 29,
        "post": 632500,
        "n": 5
    },
    {
        "id": 457,
        "name": "果洛",
        "parent_id": 29,
        "post": 632600,
        "n": 6
    },
    {
        "id": 458,
        "name": "玉树",
        "parent_id": 29,
        "post": 632700,
        "n": 7
    },
    {
        "id": 459,
        "name": "海西",
        "parent_id": 29,
        "post": 632800,
        "n": 8
    },
    {
        "id": 460,
        "name": "银川",
        "parent_id": 30,
        "post": 640100,
        "n": 1
    },
    {
        "id": 461,
        "name": "石嘴山",
        "parent_id": 30,
        "post": 640200,
        "n": 2
    },
    {
        "id": 462,
        "name": "吴忠",
        "parent_id": 30,
        "post": 640300,
        "n": 3
    },
    {
        "id": 463,
        "name": "固原",
        "parent_id": 30,
        "post": 640400,
        "n": 4
    },
    {
        "id": 464,
        "name": "中卫",
        "parent_id": 30,
        "post": 640500,
        "n": 5
    },
    {
        "id": 465,
        "name": "乌鲁木齐",
        "parent_id": 31,
        "post": 650100,
        "n": 1
    },
    {
        "id": 466,
        "name": "克拉玛依",
        "parent_id": 31,
        "post": 650200,
        "n": 2
    },
    {
        "id": 467,
        "name": "吐鲁番",
        "parent_id": 31,
        "post": 652100,
        "n": 3
    },
    {
        "id": 468,
        "name": "哈密",
        "parent_id": 31,
        "post": 652200,
        "n": 4
    },
    {
        "id": 469,
        "name": "昌吉",
        "parent_id": 31,
        "post": 652300,
        "n": 5
    },
    {
        "id": 470,
        "name": "博尔塔拉",
        "parent_id": 31,
        "post": 652700,
        "n": 6
    },
    {
        "id": 471,
        "name": "巴音郭楞",
        "parent_id": 31,
        "post": 652800,
        "n": 7
    },
    {
        "id": 472,
        "name": "阿克苏",
        "parent_id": 31,
        "post": 652900,
        "n": 8
    },
    {
        "id": 473,
        "name": "克孜勒苏",
        "parent_id": 31,
        "post": 653000,
        "n": 9
    },
    {
        "id": 474,
        "name": "喀什",
        "parent_id": 31,
        "post": 653100,
        "n": 10
    },
    {
        "id": 475,
        "name": "和田",
        "parent_id": 31,
        "post": 653200,
        "n": 11
    },
    {
        "id": 476,
        "name": "伊犁",
        "parent_id": 31,
        "post": 654000,
        "n": 12
    },
    {
        "id": 477,
        "name": "塔城",
        "parent_id": 31,
        "post": 654200,
        "n": 13
    },
    {
        "id": 478,
        "name": "阿勒泰",
        "parent_id": 31,
        "post": 654300,
        "n": 14
    },
    {
        "id": 479,
        "name": "石河子",
        "parent_id": 31,
        "post": 659001,
        "n": 15
    },
    {
        "id": 480,
        "name": "阿拉尔",
        "parent_id": 31,
        "post": 659002,
        "n": 16
    },
    {
        "id": 481,
        "name": "图木舒克",
        "parent_id": 31,
        "post": 659003,
        "n": 17
    },
    {
        "id": 482,
        "name": "五家渠",
        "parent_id": 31,
        "post": 659004,
        "n": 18
    },
    {
        "id": 483,
        "name": "北屯",
        "parent_id": 31,
        "post": 659005,
        "n": 19
    },
    {
        "id": 484,
        "name": "铁门关",
        "parent_id": 31,
        "post": 659006,
        "n": 20
    },
    {
        "id": 485,
        "name": "台北",
        "parent_id": 32,
        "post": 63,
        "n": 1
    },
    {
        "id": 486,
        "name": "高雄",
        "parent_id": 32,
        "post": 64,
        "n": 2
    },
    {
        "id": 487,
        "name": "基隆",
        "parent_id": 32,
        "post": 10017,
        "n": 3
    },
    {
        "id": 488,
        "name": "台中",
        "parent_id": 32,
        "post": 10019,
        "n": 4
    },
    {
        "id": 489,
        "name": "台南",
        "parent_id": 32,
        "post": 10021,
        "n": 5
    },
    {
        "id": 490,
        "name": "新竹",
        "parent_id": 32,
        "post": 10018,
        "n": 6
    },
    {
        "id": 491,
        "name": "嘉义",
        "parent_id": 32,
        "post": 10020,
        "n": 7
    },
    {
        "id": 492,
        "name": "新北",
        "parent_id": 32,
        "post": "",
        "n": 8
    },
    {
        "id": 493,
        "name": "宜兰",
        "parent_id": 32,
        "post": 10002,
        "n": 9
    },
    {
        "id": 494,
        "name": "桃园",
        "parent_id": 32,
        "post": 10003,
        "n": 10
    },
    {
        "id": 495,
        "name": "新竹",
        "parent_id": 32,
        "post": 10004,
        "n": 11
    },
    {
        "id": 496,
        "name": "苗栗",
        "parent_id": 32,
        "post": 10005,
        "n": 12
    },
    {
        "id": 497,
        "name": "彰化",
        "parent_id": 32,
        "post": 10007,
        "n": 13
    },
    {
        "id": 498,
        "name": "南投",
        "parent_id": 32,
        "post": 10008,
        "n": 14
    },
    {
        "id": 499,
        "name": "云林",
        "parent_id": 32,
        "post": 10009,
        "n": 15
    },
    {
        "id": 500,
        "name": "嘉义",
        "parent_id": 32,
        "post": 10020,
        "n": 16
    },
    {
        "id": 501,
        "name": "屏东",
        "parent_id": 32,
        "post": 10013,
        "n": 17
    },
    {
        "id": 502,
        "name": "台东",
        "parent_id": 32,
        "post": 10014,
        "n": 18
    },
    {
        "id": 503,
        "name": "花莲",
        "parent_id": 32,
        "post": 10015,
        "n": 19
    },
    {
        "id": 504,
        "name": "澎湖",
        "parent_id": 32,
        "post": 10016,
        "n": 20
    },
    {
        "id": 505,
        "name": "连江",
        "parent_id": 32,
        "post": "",
        "n": 21
    },
    {
        "id": 506,
        "name": "金门",
        "parent_id": 32,
        "post": "",
        "n": 22
    },
    {
        "id": 507,
        "name": "中西",
        "parent_id": 33,
        "post": "",
        "n": 1
    },
    {
        "id": 508,
        "name": "葵青",
        "parent_id": 33,
        "post": "",
        "n": 2
    },
    {
        "id": 509,
        "name": "元朗",
        "parent_id": 33,
        "post": "",
        "n": 3
    },
    {
        "id": 510,
        "name": "屯门",
        "parent_id": 33,
        "post": "",
        "n": 4
    },
    {
        "id": 511,
        "name": "荃湾",
        "parent_id": 33,
        "post": "",
        "n": 5
    },
    {
        "id": 512,
        "name": "西贡",
        "parent_id": 33,
        "post": "",
        "n": 6
    },
    {
        "id": 513,
        "name": "沙田",
        "parent_id": 33,
        "post": "",
        "n": 7
    },
    {
        "id": 514,
        "name": "大埔",
        "parent_id": 33,
        "post": "",
        "n": 8
    },
    {
        "id": 515,
        "name": "北区",
        "parent_id": 33,
        "post": "",
        "n": 9
    },
    {
        "id": 516,
        "name": "观塘",
        "parent_id": 33,
        "post": "",
        "n": 10
    },
    {
        "id": 517,
        "name": "黄大仙",
        "parent_id": 33,
        "post": "",
        "n": 11
    },
    {
        "id": 518,
        "name": "深水埗",
        "parent_id": 33,
        "post": "",
        "n": 12
    },
    {
        "id": 519,
        "name": "油尖旺",
        "parent_id": 33,
        "post": "",
        "n": 13
    },
    {
        "id": 520,
        "name": "九龙城",
        "parent_id": 33,
        "post": "",
        "n": 14
    },
    {
        "id": 521,
        "name": "南区",
        "parent_id": 33,
        "post": "",
        "n": 15
    },
    {
        "id": 522,
        "name": "东区",
        "parent_id": 33,
        "post": "",
        "n": 16
    },
    {
        "id": 523,
        "name": "湾仔",
        "parent_id": 33,
        "post": "",
        "n": 17
    },
    {
        "id": 524,
        "name": "离岛",
        "parent_id": 33,
        "post": "",
        "n": 18
    },
    {
        "id": 525,
        "name": "花地玛",
        "parent_id": 34,
        "post": "",
        "n": 1
    },
    {
        "id": 526,
        "name": "圣安多",
        "parent_id": 34,
        "post": "",
        "n": 2
    },
    {
        "id": 527,
        "name": "大堂区",
        "parent_id": 34,
        "post": "",
        "n": 3
    },
    {
        "id": 528,
        "name": "望德",
        "parent_id": 34,
        "post": "",
        "n": 4
    },
    {
        "id": 529,
        "name": "风顺",
        "parent_id": 34,
        "post": "",
        "n": 5
    },
    {
        "id": 530,
        "name": "嘉模",
        "parent_id": 34,
        "post": "",
        "n": 6
    },
    {
        "id": 531,
        "name": "圣方济各",
        "parent_id": 34,
        "post": "",
        "n": 7
    },
    {
        "id": 532,
        "name": "路氹城",
        "parent_id": 34,
        "post": "",
        "n": 8
    },
    {
        "id": 533,
        "name": "长安",
        "parent_id": 125,
        "post": 130102,
        "n": 1
    },
    {
        "id": 535,
        "name": "桥西",
        "parent_id": 125,
        "post": 130104,
        "n": 2
    },
    {
        "id": 536,
        "name": "新华",
        "parent_id": 125,
        "post": 130105,
        "n": 3
    },
    {
        "id": 537,
        "name": "井陉矿",
        "parent_id": 125,
        "post": 130107,
        "n": 4
    },
    {
        "id": 538,
        "name": "裕华",
        "parent_id": 125,
        "post": 130108,
        "n": 5
    },
    {
        "id": 539,
        "name": "井陉",
        "parent_id": 125,
        "post": 130121,
        "n": 9
    },
    {
        "id": 540,
        "name": "正定",
        "parent_id": 125,
        "post": 130123,
        "n": 10
    },
    {
        "id": 541,
        "name": "栾城",
        "parent_id": 125,
        "post": 130111,
        "n": 8
    },
    {
        "id": 542,
        "name": "行唐",
        "parent_id": 125,
        "post": 130125,
        "n": 11
    },
    {
        "id": 543,
        "name": "灵寿",
        "parent_id": 125,
        "post": 130126,
        "n": 12
    },
    {
        "id": 544,
        "name": "高邑",
        "parent_id": 125,
        "post": 130127,
        "n": 13
    },
    {
        "id": 545,
        "name": "深泽",
        "parent_id": 125,
        "post": 130128,
        "n": 14
    },
    {
        "id": 546,
        "name": "赞皇",
        "parent_id": 125,
        "post": 130129,
        "n": 15
    },
    {
        "id": 547,
        "name": "无极",
        "parent_id": 125,
        "post": 130130,
        "n": 16
    },
    {
        "id": 548,
        "name": "平山",
        "parent_id": 125,
        "post": 130131,
        "n": 17
    },
    {
        "id": 549,
        "name": "元氏",
        "parent_id": 125,
        "post": 130132,
        "n": 18
    },
    {
        "id": 550,
        "name": "赵县",
        "parent_id": 125,
        "post": 130133,
        "n": 19
    },
    {
        "id": 551,
        "name": "辛集",
        "parent_id": 125,
        "post": 130181,
        "n": 20
    },
    {
        "id": 552,
        "name": "藁城",
        "parent_id": 125,
        "post": 130109,
        "n": 6
    },
    {
        "id": 553,
        "name": "晋州",
        "parent_id": 125,
        "post": 130183,
        "n": 21
    },
    {
        "id": 554,
        "name": "新乐",
        "parent_id": 125,
        "post": 130184,
        "n": 22
    },
    {
        "id": 555,
        "name": "鹿泉",
        "parent_id": 125,
        "post": 130110,
        "n": 7
    },
    {
        "id": 556,
        "name": "路南",
        "parent_id": 126,
        "post": 130202,
        "n": 1
    },
    {
        "id": 557,
        "name": "路北",
        "parent_id": 126,
        "post": 130203,
        "n": 2
    },
    {
        "id": 558,
        "name": "古冶",
        "parent_id": 126,
        "post": 130204,
        "n": 3
    },
    {
        "id": 559,
        "name": "开平",
        "parent_id": 126,
        "post": 130205,
        "n": 4
    },
    {
        "id": 560,
        "name": "丰南",
        "parent_id": 126,
        "post": 130207,
        "n": 5
    },
    {
        "id": 561,
        "name": "丰润",
        "parent_id": 126,
        "post": 130208,
        "n": 6
    },
    {
        "id": 562,
        "name": "滦州",
        "parent_id": 126,
        "post": 130223,
        "n": 7
    },
    {
        "id": 563,
        "name": "滦南",
        "parent_id": 126,
        "post": 130224,
        "n": 8
    },
    {
        "id": 564,
        "name": "乐亭",
        "parent_id": 126,
        "post": 130225,
        "n": 9
    },
    {
        "id": 565,
        "name": "迁西",
        "parent_id": 126,
        "post": 130227,
        "n": 10
    },
    {
        "id": 566,
        "name": "玉田",
        "parent_id": 126,
        "post": 130229,
        "n": 11
    },
    {
        "id": 567,
        "name": "唐海",
        "parent_id": 126,
        "post": 130230,
        "n": 12
    },
    {
        "id": 568,
        "name": "遵化",
        "parent_id": 126,
        "post": 130281,
        "n": 13
    },
    {
        "id": 569,
        "name": "迁安",
        "parent_id": 126,
        "post": 130283,
        "n": 14
    },
    {
        "id": 570,
        "name": "海港",
        "parent_id": 127,
        "post": 130302,
        "n": 1
    },
    {
        "id": 571,
        "name": "山海关",
        "parent_id": 127,
        "post": 130303,
        "n": 2
    },
    {
        "id": 572,
        "name": "北戴河",
        "parent_id": 127,
        "post": 130304,
        "n": 3
    },
    {
        "id": 573,
        "name": "青龙",
        "parent_id": 127,
        "post": 130321,
        "n": 4
    },
    {
        "id": 574,
        "name": "昌黎",
        "parent_id": 127,
        "post": 130322,
        "n": 5
    },
    {
        "id": 575,
        "name": "抚宁",
        "parent_id": 127,
        "post": 130323,
        "n": 6
    },
    {
        "id": 576,
        "name": "卢龙",
        "parent_id": 127,
        "post": 130324,
        "n": 7
    },
    {
        "id": 577,
        "name": "邯山",
        "parent_id": 128,
        "post": 130402,
        "n": 1
    },
    {
        "id": 578,
        "name": "丛台",
        "parent_id": 128,
        "post": 130403,
        "n": 2
    },
    {
        "id": 579,
        "name": "复兴",
        "parent_id": 128,
        "post": 130404,
        "n": 3
    },
    {
        "id": 580,
        "name": "峰峰矿",
        "parent_id": 128,
        "post": 130406,
        "n": 4
    },
    {
        "id": 582,
        "name": "临漳",
        "parent_id": 128,
        "post": 130423,
        "n": 7
    },
    {
        "id": 583,
        "name": "成安",
        "parent_id": 128,
        "post": 130424,
        "n": 8
    },
    {
        "id": 584,
        "name": "大名",
        "parent_id": 128,
        "post": 130425,
        "n": 9
    },
    {
        "id": 585,
        "name": "涉县",
        "parent_id": 128,
        "post": 130426,
        "n": 10
    },
    {
        "id": 586,
        "name": "磁县",
        "parent_id": 128,
        "post": 130427,
        "n": 11
    },
    {
        "id": 587,
        "name": "肥乡",
        "parent_id": 128,
        "post": 130407,
        "n": 5
    },
    {
        "id": 588,
        "name": "永年",
        "parent_id": 128,
        "post": 130408,
        "n": 6
    },
    {
        "id": 589,
        "name": "邱县",
        "parent_id": 128,
        "post": 130430,
        "n": 12
    },
    {
        "id": 590,
        "name": "鸡泽",
        "parent_id": 128,
        "post": 130431,
        "n": 13
    },
    {
        "id": 591,
        "name": "广平",
        "parent_id": 128,
        "post": 130432,
        "n": 14
    },
    {
        "id": 592,
        "name": "馆陶",
        "parent_id": 128,
        "post": 130433,
        "n": 15
    },
    {
        "id": 593,
        "name": "魏县",
        "parent_id": 128,
        "post": 130434,
        "n": 16
    },
    {
        "id": 594,
        "name": "曲周",
        "parent_id": 128,
        "post": 130435,
        "n": 17
    },
    {
        "id": 595,
        "name": "武安",
        "parent_id": 128,
        "post": 130481,
        "n": 18
    },
    {
        "id": 596,
        "name": "桥东",
        "parent_id": 129,
        "post": 130502,
        "n": 1
    },
    {
        "id": 597,
        "name": "桥西",
        "parent_id": 129,
        "post": 130503,
        "n": 2
    },
    {
        "id": 598,
        "name": "邢台",
        "parent_id": 129,
        "post": 130521,
        "n": 3
    },
    {
        "id": 599,
        "name": "临城",
        "parent_id": 129,
        "post": 130522,
        "n": 4
    },
    {
        "id": 600,
        "name": "内丘",
        "parent_id": 129,
        "post": 130523,
        "n": 5
    },
    {
        "id": 601,
        "name": "柏乡",
        "parent_id": 129,
        "post": 130524,
        "n": 6
    },
    {
        "id": 602,
        "name": "隆尧",
        "parent_id": 129,
        "post": 130525,
        "n": 7
    },
    {
        "id": 603,
        "name": "任县",
        "parent_id": 129,
        "post": 130526,
        "n": 8
    },
    {
        "id": 604,
        "name": "南和",
        "parent_id": 129,
        "post": 130527,
        "n": 9
    },
    {
        "id": 605,
        "name": "宁晋",
        "parent_id": 129,
        "post": 130528,
        "n": 10
    },
    {
        "id": 606,
        "name": "巨鹿",
        "parent_id": 129,
        "post": 130529,
        "n": 11
    },
    {
        "id": 607,
        "name": "新河",
        "parent_id": 129,
        "post": 130530,
        "n": 12
    },
    {
        "id": 608,
        "name": "广宗",
        "parent_id": 129,
        "post": 130531,
        "n": 13
    },
    {
        "id": 609,
        "name": "平乡",
        "parent_id": 129,
        "post": 130532,
        "n": 14
    },
    {
        "id": 610,
        "name": "威县",
        "parent_id": 129,
        "post": 130533,
        "n": 15
    },
    {
        "id": 611,
        "name": "清河",
        "parent_id": 129,
        "post": 130534,
        "n": 16
    },
    {
        "id": 612,
        "name": "临西",
        "parent_id": 129,
        "post": 130535,
        "n": 17
    },
    {
        "id": 613,
        "name": "南宫",
        "parent_id": 129,
        "post": 130581,
        "n": 18
    },
    {
        "id": 614,
        "name": "沙河",
        "parent_id": 129,
        "post": 130582,
        "n": 19
    },
    {
        "id": 615,
        "name": "竞秀",
        "parent_id": 130,
        "post": 130602,
        "n": 1
    },
    {
        "id": 616,
        "name": "莲池",
        "parent_id": 130,
        "post": 130603,
        "n": 2
    },
    {
        "id": 618,
        "name": "满城",
        "parent_id": 130,
        "post": 130621,
        "n": 4
    },
    {
        "id": 619,
        "name": "清苑",
        "parent_id": 130,
        "post": 130622,
        "n": 5
    },
    {
        "id": 620,
        "name": "涞水",
        "parent_id": 130,
        "post": 130623,
        "n": 6
    },
    {
        "id": 621,
        "name": "阜平",
        "parent_id": 130,
        "post": 130624,
        "n": 7
    },
    {
        "id": 622,
        "name": "徐水",
        "parent_id": 130,
        "post": 130625,
        "n": 8
    },
    {
        "id": 623,
        "name": "定兴",
        "parent_id": 130,
        "post": 130626,
        "n": 9
    },
    {
        "id": 624,
        "name": "唐县",
        "parent_id": 130,
        "post": 130627,
        "n": 10
    },
    {
        "id": 625,
        "name": "高阳",
        "parent_id": 130,
        "post": 130628,
        "n": 11
    },
    {
        "id": 626,
        "name": "容城",
        "parent_id": 130,
        "post": 130629,
        "n": 12
    },
    {
        "id": 627,
        "name": "涞源",
        "parent_id": 130,
        "post": 130630,
        "n": 13
    },
    {
        "id": 628,
        "name": "望都",
        "parent_id": 130,
        "post": 130631,
        "n": 14
    },
    {
        "id": 629,
        "name": "安新",
        "parent_id": 130,
        "post": 130632,
        "n": 15
    },
    {
        "id": 630,
        "name": "易县",
        "parent_id": 130,
        "post": 130633,
        "n": 16
    },
    {
        "id": 631,
        "name": "曲阳",
        "parent_id": 130,
        "post": 130634,
        "n": 17
    },
    {
        "id": 632,
        "name": "蠡县",
        "parent_id": 130,
        "post": 130635,
        "n": 18
    },
    {
        "id": 633,
        "name": "顺平",
        "parent_id": 130,
        "post": 130636,
        "n": 19
    },
    {
        "id": 634,
        "name": "博野",
        "parent_id": 130,
        "post": 130637,
        "n": 20
    },
    {
        "id": 635,
        "name": "雄县",
        "parent_id": 130,
        "post": 130638,
        "n": 21
    },
    {
        "id": 636,
        "name": "涿州",
        "parent_id": 130,
        "post": 130681,
        "n": 22
    },
    {
        "id": 637,
        "name": "定州",
        "parent_id": 130,
        "post": 130682,
        "n": 23
    },
    {
        "id": 638,
        "name": "安国",
        "parent_id": 130,
        "post": 130683,
        "n": 24
    },
    {
        "id": 639,
        "name": "高碑店",
        "parent_id": 130,
        "post": 130684,
        "n": 25
    },
    {
        "id": 640,
        "name": "桥东",
        "parent_id": 131,
        "post": 130702,
        "n": 1
    },
    {
        "id": 641,
        "name": "桥西",
        "parent_id": 131,
        "post": 130703,
        "n": 2
    },
    {
        "id": 642,
        "name": "宣化",
        "parent_id": 131,
        "post": 130705,
        "n": 3
    },
    {
        "id": 643,
        "name": "下花园",
        "parent_id": 131,
        "post": 130706,
        "n": 4
    },
    {
        "id": 645,
        "name": "张北",
        "parent_id": 131,
        "post": 130722,
        "n": 7
    },
    {
        "id": 646,
        "name": "康保",
        "parent_id": 131,
        "post": 130723,
        "n": 8
    },
    {
        "id": 647,
        "name": "沽源",
        "parent_id": 131,
        "post": 130724,
        "n": 9
    },
    {
        "id": 648,
        "name": "尚义",
        "parent_id": 131,
        "post": 130725,
        "n": 10
    },
    {
        "id": 649,
        "name": "蔚县",
        "parent_id": 131,
        "post": 130726,
        "n": 11
    },
    {
        "id": 650,
        "name": "阳原",
        "parent_id": 131,
        "post": 130727,
        "n": 12
    },
    {
        "id": 651,
        "name": "怀安",
        "parent_id": 131,
        "post": 130728,
        "n": 13
    },
    {
        "id": 652,
        "name": "万全",
        "parent_id": 131,
        "post": 130708,
        "n": 5
    },
    {
        "id": 653,
        "name": "怀来",
        "parent_id": 131,
        "post": 130730,
        "n": 14
    },
    {
        "id": 654,
        "name": "涿鹿",
        "parent_id": 131,
        "post": 130731,
        "n": 15
    },
    {
        "id": 655,
        "name": "赤城",
        "parent_id": 131,
        "post": 130732,
        "n": 16
    },
    {
        "id": 656,
        "name": "崇礼",
        "parent_id": 131,
        "post": 130709,
        "n": 6
    },
    {
        "id": 657,
        "name": "双桥",
        "parent_id": 132,
        "post": 130802,
        "n": 1
    },
    {
        "id": 658,
        "name": "双滦",
        "parent_id": 132,
        "post": 130803,
        "n": 2
    },
    {
        "id": 659,
        "name": "鹰手营子",
        "parent_id": 132,
        "post": 130804,
        "n": 3
    },
    {
        "id": 660,
        "name": "承德",
        "parent_id": 132,
        "post": 130821,
        "n": 4
    },
    {
        "id": 661,
        "name": "兴隆",
        "parent_id": 132,
        "post": 130822,
        "n": 5
    },
    {
        "id": 662,
        "name": "平泉",
        "parent_id": 132,
        "post": 130881,
        "n": 11
    },
    {
        "id": 663,
        "name": "滦平",
        "parent_id": 132,
        "post": 130824,
        "n": 6
    },
    {
        "id": 664,
        "name": "隆化",
        "parent_id": 132,
        "post": 130825,
        "n": 7
    },
    {
        "id": 665,
        "name": "丰宁",
        "parent_id": 132,
        "post": 130826,
        "n": 8
    },
    {
        "id": 666,
        "name": "宽城",
        "parent_id": 132,
        "post": 130827,
        "n": 9
    },
    {
        "id": 667,
        "name": "围场",
        "parent_id": 132,
        "post": 130828,
        "n": 10
    },
    {
        "id": 668,
        "name": "新华",
        "parent_id": 133,
        "post": 130902,
        "n": 1
    },
    {
        "id": 669,
        "name": "运河",
        "parent_id": 133,
        "post": 130903,
        "n": 2
    },
    {
        "id": 670,
        "name": "沧县",
        "parent_id": 133,
        "post": 130921,
        "n": 3
    },
    {
        "id": 671,
        "name": "青县",
        "parent_id": 133,
        "post": 130922,
        "n": 4
    },
    {
        "id": 672,
        "name": "东光",
        "parent_id": 133,
        "post": 130923,
        "n": 5
    },
    {
        "id": 673,
        "name": "海兴",
        "parent_id": 133,
        "post": 130924,
        "n": 6
    },
    {
        "id": 674,
        "name": "盐山",
        "parent_id": 133,
        "post": 130925,
        "n": 7
    },
    {
        "id": 675,
        "name": "肃宁",
        "parent_id": 133,
        "post": 130926,
        "n": 8
    },
    {
        "id": 676,
        "name": "南皮",
        "parent_id": 133,
        "post": 130927,
        "n": 9
    },
    {
        "id": 677,
        "name": "吴桥",
        "parent_id": 133,
        "post": 130928,
        "n": 10
    },
    {
        "id": 678,
        "name": "献县",
        "parent_id": 133,
        "post": 130929,
        "n": 11
    },
    {
        "id": 679,
        "name": "孟村",
        "parent_id": 133,
        "post": 130930,
        "n": 12
    },
    {
        "id": 680,
        "name": "泊头",
        "parent_id": 133,
        "post": 130981,
        "n": 13
    },
    {
        "id": 681,
        "name": "任丘",
        "parent_id": 133,
        "post": 130982,
        "n": 14
    },
    {
        "id": 682,
        "name": "黄骅",
        "parent_id": 133,
        "post": 130983,
        "n": 15
    },
    {
        "id": 683,
        "name": "河间",
        "parent_id": 133,
        "post": 130984,
        "n": 16
    },
    {
        "id": 684,
        "name": "安次",
        "parent_id": 134,
        "post": 131002,
        "n": 1
    },
    {
        "id": 685,
        "name": "广阳",
        "parent_id": 134,
        "post": 131003,
        "n": 2
    },
    {
        "id": 686,
        "name": "固安",
        "parent_id": 134,
        "post": 131022,
        "n": 3
    },
    {
        "id": 687,
        "name": "永清",
        "parent_id": 134,
        "post": 131023,
        "n": 4
    },
    {
        "id": 688,
        "name": "香河",
        "parent_id": 134,
        "post": 131024,
        "n": 5
    },
    {
        "id": 689,
        "name": "大城",
        "parent_id": 134,
        "post": 131025,
        "n": 6
    },
    {
        "id": 690,
        "name": "文安",
        "parent_id": 134,
        "post": 131026,
        "n": 7
    },
    {
        "id": 691,
        "name": "大厂",
        "parent_id": 134,
        "post": 131028,
        "n": 8
    },
    {
        "id": 692,
        "name": "霸州",
        "parent_id": 134,
        "post": 131081,
        "n": 9
    },
    {
        "id": 693,
        "name": "三河",
        "parent_id": 134,
        "post": 131082,
        "n": 10
    },
    {
        "id": 694,
        "name": "桃城",
        "parent_id": 135,
        "post": 131102,
        "n": 1
    },
    {
        "id": 695,
        "name": "枣强",
        "parent_id": 135,
        "post": 131121,
        "n": 3
    },
    {
        "id": 696,
        "name": "武邑",
        "parent_id": 135,
        "post": 131122,
        "n": 4
    },
    {
        "id": 697,
        "name": "武强",
        "parent_id": 135,
        "post": 131123,
        "n": 5
    },
    {
        "id": 698,
        "name": "饶阳",
        "parent_id": 135,
        "post": 131124,
        "n": 6
    },
    {
        "id": 699,
        "name": "安平",
        "parent_id": 135,
        "post": 131125,
        "n": 7
    },
    {
        "id": 700,
        "name": "故城",
        "parent_id": 135,
        "post": 131126,
        "n": 8
    },
    {
        "id": 701,
        "name": "景县",
        "parent_id": 135,
        "post": 131127,
        "n": 9
    },
    {
        "id": 702,
        "name": "阜城",
        "parent_id": 135,
        "post": 131128,
        "n": 10
    },
    {
        "id": 703,
        "name": "冀州",
        "parent_id": 135,
        "post": 131103,
        "n": 2
    },
    {
        "id": 704,
        "name": "深州",
        "parent_id": 135,
        "post": 131182,
        "n": 11
    },
    {
        "id": 705,
        "name": "小店",
        "parent_id": 136,
        "post": 140105,
        "n": 1
    },
    {
        "id": 706,
        "name": "迎泽",
        "parent_id": 136,
        "post": 140106,
        "n": 2
    },
    {
        "id": 707,
        "name": "杏花岭",
        "parent_id": 136,
        "post": 140107,
        "n": 3
    },
    {
        "id": 708,
        "name": "尖草坪",
        "parent_id": 136,
        "post": 140108,
        "n": 4
    },
    {
        "id": 709,
        "name": "万柏林",
        "parent_id": 136,
        "post": 140109,
        "n": 5
    },
    {
        "id": 710,
        "name": "晋源",
        "parent_id": 136,
        "post": 140110,
        "n": 6
    },
    {
        "id": 711,
        "name": "清徐",
        "parent_id": 136,
        "post": 140121,
        "n": 7
    },
    {
        "id": 712,
        "name": "阳曲",
        "parent_id": 136,
        "post": 140122,
        "n": 8
    },
    {
        "id": 713,
        "name": "娄烦",
        "parent_id": 136,
        "post": 140123,
        "n": 9
    },
    {
        "id": 714,
        "name": "古交",
        "parent_id": 136,
        "post": 140181,
        "n": 10
    },
    {
        "id": 715,
        "name": "平城",
        "parent_id": 137,
        "post": 140213,
        "n": 2
    },
    {
        "id": 716,
        "name": "云冈",
        "parent_id": 137,
        "post": 140214,
        "n": 3
    },
    {
        "id": 718,
        "name": "新荣",
        "parent_id": 137,
        "post": 140212,
        "n": 1
    },
    {
        "id": 719,
        "name": "阳高",
        "parent_id": 137,
        "post": 140221,
        "n": 5
    },
    {
        "id": 720,
        "name": "天镇",
        "parent_id": 137,
        "post": 140222,
        "n": 6
    },
    {
        "id": 721,
        "name": "广灵",
        "parent_id": 137,
        "post": 140223,
        "n": 7
    },
    {
        "id": 722,
        "name": "灵丘",
        "parent_id": 137,
        "post": 140224,
        "n": 8
    },
    {
        "id": 723,
        "name": "浑源",
        "parent_id": 137,
        "post": 140225,
        "n": 9
    },
    {
        "id": 724,
        "name": "左云",
        "parent_id": 137,
        "post": 140226,
        "n": 10
    },
    {
        "id": 725,
        "name": "云州",
        "parent_id": 137,
        "post": 140215,
        "n": 4
    },
    {
        "id": 726,
        "name": "城区",
        "parent_id": 138,
        "post": 140302,
        "n": 1
    },
    {
        "id": 727,
        "name": "矿区",
        "parent_id": 138,
        "post": 140303,
        "n": 2
    },
    {
        "id": 728,
        "name": "郊区",
        "parent_id": 138,
        "post": 140311,
        "n": 3
    },
    {
        "id": 729,
        "name": "平定",
        "parent_id": 138,
        "post": 140321,
        "n": 4
    },
    {
        "id": 730,
        "name": "盂县",
        "parent_id": 138,
        "post": 140322,
        "n": 5
    },
    {
        "id": 731,
        "name": "潞州",
        "parent_id": 139,
        "post": 140403,
        "n": 1
    },
    {
        "id": 733,
        "name": "上党",
        "parent_id": 139,
        "post": 140404,
        "n": 2
    },
    {
        "id": 734,
        "name": "襄垣",
        "parent_id": 139,
        "post": 140423,
        "n": 5
    },
    {
        "id": 735,
        "name": "屯留",
        "parent_id": 139,
        "post": 140405,
        "n": 3
    },
    {
        "id": 736,
        "name": "平顺",
        "parent_id": 139,
        "post": 140425,
        "n": 6
    },
    {
        "id": 737,
        "name": "黎城",
        "parent_id": 139,
        "post": 140426,
        "n": 7
    },
    {
        "id": 738,
        "name": "壶关",
        "parent_id": 139,
        "post": 140427,
        "n": 8
    },
    {
        "id": 739,
        "name": "长子",
        "parent_id": 139,
        "post": 140428,
        "n": 9
    },
    {
        "id": 740,
        "name": "武乡",
        "parent_id": 139,
        "post": 140429,
        "n": 10
    },
    {
        "id": 741,
        "name": "沁县",
        "parent_id": 139,
        "post": 140430,
        "n": 11
    },
    {
        "id": 742,
        "name": "沁源",
        "parent_id": 139,
        "post": 140431,
        "n": 12
    },
    {
        "id": 743,
        "name": "潞城",
        "parent_id": 139,
        "post": 140406,
        "n": 4
    },
    {
        "id": 744,
        "name": "城区",
        "parent_id": 140,
        "post": 140502,
        "n": 1
    },
    {
        "id": 745,
        "name": "沁水",
        "parent_id": 140,
        "post": 140521,
        "n": 2
    },
    {
        "id": 746,
        "name": "阳城",
        "parent_id": 140,
        "post": 140522,
        "n": 3
    },
    {
        "id": 747,
        "name": "陵川",
        "parent_id": 140,
        "post": 140524,
        "n": 4
    },
    {
        "id": 748,
        "name": "泽州",
        "parent_id": 140,
        "post": 140525,
        "n": 5
    },
    {
        "id": 749,
        "name": "高平",
        "parent_id": 140,
        "post": 140581,
        "n": 6
    },
    {
        "id": 750,
        "name": "朔城",
        "parent_id": 141,
        "post": 140602,
        "n": 1
    },
    {
        "id": 751,
        "name": "平鲁",
        "parent_id": 141,
        "post": 140603,
        "n": 2
    },
    {
        "id": 752,
        "name": "山阴",
        "parent_id": 141,
        "post": 140621,
        "n": 3
    },
    {
        "id": 753,
        "name": "应县",
        "parent_id": 141,
        "post": 140622,
        "n": 4
    },
    {
        "id": 754,
        "name": "右玉",
        "parent_id": 141,
        "post": 140623,
        "n": 5
    },
    {
        "id": 755,
        "name": "怀仁",
        "parent_id": 141,
        "post": 140681,
        "n": 6
    },
    {
        "id": 756,
        "name": "榆次",
        "parent_id": 142,
        "post": 140702,
        "n": 1
    },
    {
        "id": 757,
        "name": "榆社",
        "parent_id": 142,
        "post": 140721,
        "n": 3
    },
    {
        "id": 758,
        "name": "左权",
        "parent_id": 142,
        "post": 140722,
        "n": 4
    },
    {
        "id": 759,
        "name": "和顺",
        "parent_id": 142,
        "post": 140723,
        "n": 5
    },
    {
        "id": 760,
        "name": "昔阳",
        "parent_id": 142,
        "post": 140724,
        "n": 6
    },
    {
        "id": 761,
        "name": "寿阳",
        "parent_id": 142,
        "post": 140725,
        "n": 7
    },
    {
        "id": 762,
        "name": "太谷",
        "parent_id": 142,
        "post": 140703,
        "n": 2
    },
    {
        "id": 763,
        "name": "祁县",
        "parent_id": 142,
        "post": 140727,
        "n": 8
    },
    {
        "id": 764,
        "name": "平遥",
        "parent_id": 142,
        "post": 140728,
        "n": 9
    },
    {
        "id": 765,
        "name": "灵石",
        "parent_id": 142,
        "post": 140729,
        "n": 10
    },
    {
        "id": 766,
        "name": "介休",
        "parent_id": 142,
        "post": 140781,
        "n": 11
    },
    {
        "id": 767,
        "name": "盐湖",
        "parent_id": 143,
        "post": 140802,
        "n": 1
    },
    {
        "id": 768,
        "name": "临猗",
        "parent_id": 143,
        "post": 140821,
        "n": 2
    },
    {
        "id": 769,
        "name": "万荣",
        "parent_id": 143,
        "post": 140822,
        "n": 3
    },
    {
        "id": 770,
        "name": "闻喜",
        "parent_id": 143,
        "post": 140823,
        "n": 4
    },
    {
        "id": 771,
        "name": "稷山",
        "parent_id": 143,
        "post": 140824,
        "n": 5
    },
    {
        "id": 772,
        "name": "新绛",
        "parent_id": 143,
        "post": 140825,
        "n": 6
    },
    {
        "id": 773,
        "name": "绛县",
        "parent_id": 143,
        "post": 140826,
        "n": 7
    },
    {
        "id": 774,
        "name": "垣曲",
        "parent_id": 143,
        "post": 140827,
        "n": 8
    },
    {
        "id": 775,
        "name": "夏县",
        "parent_id": 143,
        "post": 140828,
        "n": 9
    },
    {
        "id": 776,
        "name": "平陆",
        "parent_id": 143,
        "post": 140829,
        "n": 10
    },
    {
        "id": 777,
        "name": "芮城",
        "parent_id": 143,
        "post": 140830,
        "n": 11
    },
    {
        "id": 778,
        "name": "永济",
        "parent_id": 143,
        "post": 140881,
        "n": 12
    },
    {
        "id": 779,
        "name": "河津",
        "parent_id": 143,
        "post": 140882,
        "n": 13
    },
    {
        "id": 780,
        "name": "忻府",
        "parent_id": 144,
        "post": 140902,
        "n": 1
    },
    {
        "id": 781,
        "name": "定襄",
        "parent_id": 144,
        "post": 140921,
        "n": 2
    },
    {
        "id": 782,
        "name": "五台",
        "parent_id": 144,
        "post": 140922,
        "n": 3
    },
    {
        "id": 783,
        "name": "代县",
        "parent_id": 144,
        "post": 140923,
        "n": 4
    },
    {
        "id": 784,
        "name": "繁峙",
        "parent_id": 144,
        "post": 140924,
        "n": 5
    },
    {
        "id": 785,
        "name": "宁武",
        "parent_id": 144,
        "post": 140925,
        "n": 6
    },
    {
        "id": 786,
        "name": "静乐",
        "parent_id": 144,
        "post": 140926,
        "n": 7
    },
    {
        "id": 787,
        "name": "神池",
        "parent_id": 144,
        "post": 140927,
        "n": 8
    },
    {
        "id": 788,
        "name": "五寨",
        "parent_id": 144,
        "post": 140928,
        "n": 9
    },
    {
        "id": 789,
        "name": "岢岚",
        "parent_id": 144,
        "post": 140929,
        "n": 10
    },
    {
        "id": 790,
        "name": "河曲",
        "parent_id": 144,
        "post": 140930,
        "n": 11
    },
    {
        "id": 791,
        "name": "保德",
        "parent_id": 144,
        "post": 140931,
        "n": 12
    },
    {
        "id": 792,
        "name": "偏关",
        "parent_id": 144,
        "post": 140932,
        "n": 13
    },
    {
        "id": 793,
        "name": "原平",
        "parent_id": 144,
        "post": 140981,
        "n": 14
    },
    {
        "id": 794,
        "name": "尧都",
        "parent_id": 145,
        "post": 141002,
        "n": 1
    },
    {
        "id": 795,
        "name": "曲沃",
        "parent_id": 145,
        "post": 141021,
        "n": 2
    },
    {
        "id": 796,
        "name": "翼城",
        "parent_id": 145,
        "post": 141022,
        "n": 3
    },
    {
        "id": 797,
        "name": "襄汾",
        "parent_id": 145,
        "post": 141023,
        "n": 4
    },
    {
        "id": 798,
        "name": "洪洞",
        "parent_id": 145,
        "post": 141024,
        "n": 5
    },
    {
        "id": 799,
        "name": "古县",
        "parent_id": 145,
        "post": 141025,
        "n": 6
    },
    {
        "id": 800,
        "name": "安泽",
        "parent_id": 145,
        "post": 141026,
        "n": 7
    },
    {
        "id": 801,
        "name": "浮山",
        "parent_id": 145,
        "post": 141027,
        "n": 8
    },
    {
        "id": 802,
        "name": "吉县",
        "parent_id": 145,
        "post": 141028,
        "n": 9
    },
    {
        "id": 803,
        "name": "乡宁",
        "parent_id": 145,
        "post": 141029,
        "n": 10
    },
    {
        "id": 804,
        "name": "大宁",
        "parent_id": 145,
        "post": 141030,
        "n": 11
    },
    {
        "id": 805,
        "name": "隰县",
        "parent_id": 145,
        "post": 141031,
        "n": 12
    },
    {
        "id": 806,
        "name": "永和",
        "parent_id": 145,
        "post": 141032,
        "n": 13
    },
    {
        "id": 807,
        "name": "蒲县",
        "parent_id": 145,
        "post": 141033,
        "n": 14
    },
    {
        "id": 808,
        "name": "汾西",
        "parent_id": 145,
        "post": 141034,
        "n": 15
    },
    {
        "id": 809,
        "name": "侯马",
        "parent_id": 145,
        "post": 141081,
        "n": 16
    },
    {
        "id": 810,
        "name": "霍州",
        "parent_id": 145,
        "post": 141082,
        "n": 17
    },
    {
        "id": 811,
        "name": "离石",
        "parent_id": 146,
        "post": 141102,
        "n": 1
    },
    {
        "id": 812,
        "name": "文水",
        "parent_id": 146,
        "post": 141121,
        "n": 2
    },
    {
        "id": 813,
        "name": "交城",
        "parent_id": 146,
        "post": 141122,
        "n": 3
    },
    {
        "id": 814,
        "name": "兴县",
        "parent_id": 146,
        "post": 141123,
        "n": 4
    },
    {
        "id": 815,
        "name": "临县",
        "parent_id": 146,
        "post": 141124,
        "n": 5
    },
    {
        "id": 816,
        "name": "柳林",
        "parent_id": 146,
        "post": 141125,
        "n": 6
    },
    {
        "id": 817,
        "name": "石楼",
        "parent_id": 146,
        "post": 141126,
        "n": 7
    },
    {
        "id": 818,
        "name": "岚县",
        "parent_id": 146,
        "post": 141127,
        "n": 8
    },
    {
        "id": 819,
        "name": "方山",
        "parent_id": 146,
        "post": 141128,
        "n": 9
    },
    {
        "id": 820,
        "name": "中阳",
        "parent_id": 146,
        "post": 141129,
        "n": 10
    },
    {
        "id": 821,
        "name": "交口",
        "parent_id": 146,
        "post": 141130,
        "n": 11
    },
    {
        "id": 822,
        "name": "孝义",
        "parent_id": 146,
        "post": 141181,
        "n": 12
    },
    {
        "id": 823,
        "name": "汾阳",
        "parent_id": 146,
        "post": 141182,
        "n": 13
    },
    {
        "id": 824,
        "name": "新城",
        "parent_id": 147,
        "post": 150102,
        "n": 1
    },
    {
        "id": 825,
        "name": "回民",
        "parent_id": 147,
        "post": 150103,
        "n": 2
    },
    {
        "id": 826,
        "name": "玉泉",
        "parent_id": 147,
        "post": 150104,
        "n": 3
    },
    {
        "id": 827,
        "name": "赛罕",
        "parent_id": 147,
        "post": 150105,
        "n": 4
    },
    {
        "id": 828,
        "name": "土默特左",
        "parent_id": 147,
        "post": 150121,
        "n": 5
    },
    {
        "id": 829,
        "name": "托克托",
        "parent_id": 147,
        "post": 150122,
        "n": 6
    },
    {
        "id": 830,
        "name": "和林格尔",
        "parent_id": 147,
        "post": 150123,
        "n": 7
    },
    {
        "id": 831,
        "name": "清水河",
        "parent_id": 147,
        "post": 150124,
        "n": 8
    },
    {
        "id": 832,
        "name": "武川",
        "parent_id": 147,
        "post": 150125,
        "n": 9
    },
    {
        "id": 833,
        "name": "东河",
        "parent_id": 148,
        "post": 150202,
        "n": 1
    },
    {
        "id": 834,
        "name": "昆都仑",
        "parent_id": 148,
        "post": 150203,
        "n": 2
    },
    {
        "id": 835,
        "name": "青山",
        "parent_id": 148,
        "post": 150204,
        "n": 3
    },
    {
        "id": 836,
        "name": "石拐",
        "parent_id": 148,
        "post": 150205,
        "n": 4
    },
    {
        "id": 837,
        "name": "白云",
        "parent_id": 148,
        "post": 150206,
        "n": 5
    },
    {
        "id": 838,
        "name": "九原",
        "parent_id": 148,
        "post": 150207,
        "n": 6
    },
    {
        "id": 839,
        "name": "土默特右",
        "parent_id": 148,
        "post": 150221,
        "n": 7
    },
    {
        "id": 840,
        "name": "固阳",
        "parent_id": 148,
        "post": 150222,
        "n": 8
    },
    {
        "id": 841,
        "name": "达尔罕茂明安",
        "parent_id": 148,
        "post": 150223,
        "n": 9
    },
    {
        "id": 842,
        "name": "海勃湾",
        "parent_id": 149,
        "post": 150302,
        "n": 1
    },
    {
        "id": 843,
        "name": "海南",
        "parent_id": 149,
        "post": 150303,
        "n": 2
    },
    {
        "id": 844,
        "name": "乌达",
        "parent_id": 149,
        "post": 150304,
        "n": 3
    },
    {
        "id": 845,
        "name": "红山",
        "parent_id": 150,
        "post": 150402,
        "n": 1
    },
    {
        "id": 846,
        "name": "元宝山",
        "parent_id": 150,
        "post": 150403,
        "n": 2
    },
    {
        "id": 847,
        "name": "松山",
        "parent_id": 150,
        "post": 150404,
        "n": 3
    },
    {
        "id": 848,
        "name": "阿鲁科尔沁",
        "parent_id": 150,
        "post": 150421,
        "n": 4
    },
    {
        "id": 849,
        "name": "巴林左",
        "parent_id": 150,
        "post": 150422,
        "n": 5
    },
    {
        "id": 850,
        "name": "巴林右",
        "parent_id": 150,
        "post": 150423,
        "n": 6
    },
    {
        "id": 851,
        "name": "林西",
        "parent_id": 150,
        "post": 150424,
        "n": 7
    },
    {
        "id": 852,
        "name": "克什克腾",
        "parent_id": 150,
        "post": 150425,
        "n": 8
    },
    {
        "id": 853,
        "name": "翁牛特",
        "parent_id": 150,
        "post": 150426,
        "n": 9
    },
    {
        "id": 854,
        "name": "喀喇沁",
        "parent_id": 150,
        "post": 150428,
        "n": 10
    },
    {
        "id": 855,
        "name": "宁城",
        "parent_id": 150,
        "post": 150429,
        "n": 11
    },
    {
        "id": 856,
        "name": "敖汉",
        "parent_id": 150,
        "post": 150430,
        "n": 12
    },
    {
        "id": 857,
        "name": "科尔沁",
        "parent_id": 151,
        "post": 150502,
        "n": 1
    },
    {
        "id": 858,
        "name": "科尔沁左翼中",
        "parent_id": 151,
        "post": 150521,
        "n": 2
    },
    {
        "id": 859,
        "name": "科尔沁左翼后",
        "parent_id": 151,
        "post": 150522,
        "n": 3
    },
    {
        "id": 860,
        "name": "开鲁",
        "parent_id": 151,
        "post": 150523,
        "n": 4
    },
    {
        "id": 861,
        "name": "库伦",
        "parent_id": 151,
        "post": 150524,
        "n": 5
    },
    {
        "id": 862,
        "name": "奈曼",
        "parent_id": 151,
        "post": 150525,
        "n": 6
    },
    {
        "id": 863,
        "name": "扎鲁特",
        "parent_id": 151,
        "post": 150526,
        "n": 7
    },
    {
        "id": 864,
        "name": "霍林郭勒",
        "parent_id": 151,
        "post": 150581,
        "n": 8
    },
    {
        "id": 865,
        "name": "东胜",
        "parent_id": 152,
        "post": 150602,
        "n": 1
    },
    {
        "id": 866,
        "name": "达拉特",
        "parent_id": 152,
        "post": 150621,
        "n": 3
    },
    {
        "id": 867,
        "name": "准格尔",
        "parent_id": 152,
        "post": 150622,
        "n": 4
    },
    {
        "id": 868,
        "name": "鄂托克前",
        "parent_id": 152,
        "post": 150623,
        "n": 5
    },
    {
        "id": 869,
        "name": "鄂托克",
        "parent_id": 152,
        "post": 150624,
        "n": 6
    },
    {
        "id": 870,
        "name": "杭锦",
        "parent_id": 152,
        "post": 150625,
        "n": 7
    },
    {
        "id": 871,
        "name": "乌审",
        "parent_id": 152,
        "post": 150626,
        "n": 8
    },
    {
        "id": 872,
        "name": "伊金霍洛",
        "parent_id": 152,
        "post": 150627,
        "n": 9
    },
    {
        "id": 873,
        "name": "海拉尔",
        "parent_id": 153,
        "post": 150702,
        "n": 1
    },
    {
        "id": 874,
        "name": "阿荣",
        "parent_id": 153,
        "post": 150721,
        "n": 2
    },
    {
        "id": 875,
        "name": "莫力达瓦",
        "parent_id": 153,
        "post": 150722,
        "n": 3
    },
    {
        "id": 876,
        "name": "鄂伦春",
        "parent_id": 153,
        "post": 150723,
        "n": 4
    },
    {
        "id": 877,
        "name": "鄂温克族",
        "parent_id": 153,
        "post": 150724,
        "n": 5
    },
    {
        "id": 878,
        "name": "陈巴尔虎",
        "parent_id": 153,
        "post": 150725,
        "n": 6
    },
    {
        "id": 879,
        "name": "新巴尔虎左",
        "parent_id": 153,
        "post": 150726,
        "n": 7
    },
    {
        "id": 880,
        "name": "新巴尔虎右",
        "parent_id": 153,
        "post": 150727,
        "n": 8
    },
    {
        "id": 881,
        "name": "满洲里",
        "parent_id": 153,
        "post": 150781,
        "n": 9
    },
    {
        "id": 882,
        "name": "牙克石",
        "parent_id": 153,
        "post": 150782,
        "n": 10
    },
    {
        "id": 883,
        "name": "扎兰屯",
        "parent_id": 153,
        "post": 150783,
        "n": 11
    },
    {
        "id": 884,
        "name": "额尔古纳",
        "parent_id": 153,
        "post": 150784,
        "n": 12
    },
    {
        "id": 885,
        "name": "根河",
        "parent_id": 153,
        "post": 150785,
        "n": 13
    },
    {
        "id": 886,
        "name": "临河",
        "parent_id": 154,
        "post": 150802,
        "n": 1
    },
    {
        "id": 887,
        "name": "五原",
        "parent_id": 154,
        "post": 150821,
        "n": 2
    },
    {
        "id": 888,
        "name": "磴口",
        "parent_id": 154,
        "post": 150822,
        "n": 3
    },
    {
        "id": 889,
        "name": "乌拉特前",
        "parent_id": 154,
        "post": 150823,
        "n": 4
    },
    {
        "id": 890,
        "name": "乌拉特中",
        "parent_id": 154,
        "post": 150824,
        "n": 5
    },
    {
        "id": 891,
        "name": "乌拉特后",
        "parent_id": 154,
        "post": 150825,
        "n": 6
    },
    {
        "id": 892,
        "name": "杭锦后",
        "parent_id": 154,
        "post": 150826,
        "n": 7
    },
    {
        "id": 893,
        "name": "集宁",
        "parent_id": 155,
        "post": 150902,
        "n": 1
    },
    {
        "id": 894,
        "name": "卓资",
        "parent_id": 155,
        "post": 150921,
        "n": 2
    },
    {
        "id": 895,
        "name": "化德",
        "parent_id": 155,
        "post": 150922,
        "n": 3
    },
    {
        "id": 896,
        "name": "商都",
        "parent_id": 155,
        "post": 150923,
        "n": 4
    },
    {
        "id": 897,
        "name": "兴和",
        "parent_id": 155,
        "post": 150924,
        "n": 5
    },
    {
        "id": 898,
        "name": "凉城",
        "parent_id": 155,
        "post": 150925,
        "n": 6
    },
    {
        "id": 899,
        "name": "察哈尔右翼前",
        "parent_id": 155,
        "post": 150926,
        "n": 7
    },
    {
        "id": 900,
        "name": "察哈尔右翼中",
        "parent_id": 155,
        "post": 150927,
        "n": 8
    },
    {
        "id": 901,
        "name": "察哈尔右翼后",
        "parent_id": 155,
        "post": 150928,
        "n": 9
    },
    {
        "id": 902,
        "name": "四子王",
        "parent_id": 155,
        "post": 150929,
        "n": 10
    },
    {
        "id": 903,
        "name": "丰镇",
        "parent_id": 155,
        "post": 150981,
        "n": 11
    },
    {
        "id": 904,
        "name": "乌兰浩特",
        "parent_id": 156,
        "post": 152201,
        "n": 1
    },
    {
        "id": 905,
        "name": "阿尔山",
        "parent_id": 156,
        "post": 152202,
        "n": 2
    },
    {
        "id": 906,
        "name": "科尔沁右翼前",
        "parent_id": 156,
        "post": 152221,
        "n": 3
    },
    {
        "id": 907,
        "name": "科尔沁右翼中",
        "parent_id": 156,
        "post": 152222,
        "n": 4
    },
    {
        "id": 908,
        "name": "扎赉特",
        "parent_id": 156,
        "post": 152223,
        "n": 5
    },
    {
        "id": 909,
        "name": "突泉",
        "parent_id": 156,
        "post": 152224,
        "n": 6
    },
    {
        "id": 910,
        "name": "二连浩特",
        "parent_id": 157,
        "post": 152501,
        "n": 1
    },
    {
        "id": 911,
        "name": "锡林浩特",
        "parent_id": 157,
        "post": 152502,
        "n": 2
    },
    {
        "id": 912,
        "name": "阿巴嘎",
        "parent_id": 157,
        "post": 152522,
        "n": 3
    },
    {
        "id": 913,
        "name": "苏尼特左",
        "parent_id": 157,
        "post": 152523,
        "n": 4
    },
    {
        "id": 914,
        "name": "苏尼特右",
        "parent_id": 157,
        "post": 152524,
        "n": 5
    },
    {
        "id": 915,
        "name": "东乌珠穆沁",
        "parent_id": 157,
        "post": 152525,
        "n": 6
    },
    {
        "id": 916,
        "name": "西乌珠穆沁",
        "parent_id": 157,
        "post": 152526,
        "n": 7
    },
    {
        "id": 917,
        "name": "太仆寺",
        "parent_id": 157,
        "post": 152527,
        "n": 8
    },
    {
        "id": 918,
        "name": "镶黄",
        "parent_id": 157,
        "post": 152528,
        "n": 9
    },
    {
        "id": 919,
        "name": "正镶白",
        "parent_id": 157,
        "post": 152529,
        "n": 10
    },
    {
        "id": 920,
        "name": "正蓝",
        "parent_id": 157,
        "post": 152530,
        "n": 11
    },
    {
        "id": 921,
        "name": "多伦",
        "parent_id": 157,
        "post": 152531,
        "n": 12
    },
    {
        "id": 922,
        "name": "阿拉善左",
        "parent_id": 158,
        "post": 152921,
        "n": 1
    },
    {
        "id": 923,
        "name": "阿拉善右",
        "parent_id": 158,
        "post": 152922,
        "n": 2
    },
    {
        "id": 924,
        "name": "额济纳",
        "parent_id": 158,
        "post": 152923,
        "n": 3
    },
    {
        "id": 925,
        "name": "和平",
        "parent_id": 159,
        "post": 210102,
        "n": 1
    },
    {
        "id": 926,
        "name": "沈河",
        "parent_id": 159,
        "post": 210103,
        "n": 2
    },
    {
        "id": 927,
        "name": "大东",
        "parent_id": 159,
        "post": 210104,
        "n": 3
    },
    {
        "id": 928,
        "name": "皇姑",
        "parent_id": 159,
        "post": 210105,
        "n": 4
    },
    {
        "id": 929,
        "name": "铁西",
        "parent_id": 159,
        "post": 210106,
        "n": 5
    },
    {
        "id": 930,
        "name": "苏家屯",
        "parent_id": 159,
        "post": 210111,
        "n": 6
    },
    {
        "id": 931,
        "name": "浑南",
        "parent_id": 159,
        "post": 210112,
        "n": 7
    },
    {
        "id": 932,
        "name": "沈北新区",
        "parent_id": 159,
        "post": 210113,
        "n": 8
    },
    {
        "id": 933,
        "name": "于洪",
        "parent_id": 159,
        "post": 210114,
        "n": 9
    },
    {
        "id": 934,
        "name": "辽中",
        "parent_id": 159,
        "post": 210115,
        "n": 10
    },
    {
        "id": 935,
        "name": "康平",
        "parent_id": 159,
        "post": 210123,
        "n": 11
    },
    {
        "id": 936,
        "name": "法库",
        "parent_id": 159,
        "post": 210124,
        "n": 12
    },
    {
        "id": 937,
        "name": "新民",
        "parent_id": 159,
        "post": 210181,
        "n": 13
    },
    {
        "id": 938,
        "name": "中山",
        "parent_id": 160,
        "post": 210202,
        "n": 1
    },
    {
        "id": 939,
        "name": "西岗",
        "parent_id": 160,
        "post": 210203,
        "n": 2
    },
    {
        "id": 940,
        "name": "沙河口",
        "parent_id": 160,
        "post": 210204,
        "n": 3
    },
    {
        "id": 941,
        "name": "甘井子",
        "parent_id": 160,
        "post": 210211,
        "n": 4
    },
    {
        "id": 942,
        "name": "旅顺口",
        "parent_id": 160,
        "post": 210212,
        "n": 5
    },
    {
        "id": 943,
        "name": "金州",
        "parent_id": 160,
        "post": 210213,
        "n": 6
    },
    {
        "id": 944,
        "name": "长海",
        "parent_id": 160,
        "post": 210224,
        "n": 7
    },
    {
        "id": 945,
        "name": "瓦房店",
        "parent_id": 160,
        "post": 210281,
        "n": 8
    },
    {
        "id": 946,
        "name": "普兰店",
        "parent_id": 160,
        "post": 210282,
        "n": 9
    },
    {
        "id": 947,
        "name": "庄河",
        "parent_id": 160,
        "post": 210283,
        "n": 10
    },
    {
        "id": 948,
        "name": "铁东",
        "parent_id": 161,
        "post": 210302,
        "n": 1
    },
    {
        "id": 949,
        "name": "铁西",
        "parent_id": 161,
        "post": 210303,
        "n": 2
    },
    {
        "id": 950,
        "name": "立山",
        "parent_id": 161,
        "post": 210304,
        "n": 3
    },
    {
        "id": 951,
        "name": "千山",
        "parent_id": 161,
        "post": 210311,
        "n": 4
    },
    {
        "id": 952,
        "name": "台安",
        "parent_id": 161,
        "post": 210321,
        "n": 5
    },
    {
        "id": 953,
        "name": "岫岩",
        "parent_id": 161,
        "post": 210323,
        "n": 6
    },
    {
        "id": 954,
        "name": "海城",
        "parent_id": 161,
        "post": 210381,
        "n": 7
    },
    {
        "id": 955,
        "name": "新抚",
        "parent_id": 162,
        "post": 210402,
        "n": 1
    },
    {
        "id": 956,
        "name": "东洲",
        "parent_id": 162,
        "post": 210403,
        "n": 2
    },
    {
        "id": 957,
        "name": "望花",
        "parent_id": 162,
        "post": 210404,
        "n": 3
    },
    {
        "id": 958,
        "name": "顺城",
        "parent_id": 162,
        "post": 210411,
        "n": 4
    },
    {
        "id": 959,
        "name": "抚顺",
        "parent_id": 162,
        "post": 210421,
        "n": 5
    },
    {
        "id": 960,
        "name": "新宾",
        "parent_id": 162,
        "post": 210422,
        "n": 6
    },
    {
        "id": 961,
        "name": "清原",
        "parent_id": 162,
        "post": 210423,
        "n": 7
    },
    {
        "id": 962,
        "name": "平山",
        "parent_id": 163,
        "post": 210502,
        "n": 1
    },
    {
        "id": 963,
        "name": "溪湖",
        "parent_id": 163,
        "post": 210503,
        "n": 2
    },
    {
        "id": 964,
        "name": "明山",
        "parent_id": 163,
        "post": 210504,
        "n": 3
    },
    {
        "id": 965,
        "name": "南芬",
        "parent_id": 163,
        "post": 210505,
        "n": 4
    },
    {
        "id": 966,
        "name": "本溪",
        "parent_id": 163,
        "post": 210521,
        "n": 5
    },
    {
        "id": 967,
        "name": "桓仁",
        "parent_id": 163,
        "post": 210522,
        "n": 6
    },
    {
        "id": 968,
        "name": "元宝",
        "parent_id": 164,
        "post": 210602,
        "n": 1
    },
    {
        "id": 969,
        "name": "振兴",
        "parent_id": 164,
        "post": 210603,
        "n": 2
    },
    {
        "id": 970,
        "name": "振安",
        "parent_id": 164,
        "post": 210604,
        "n": 3
    },
    {
        "id": 971,
        "name": "宽甸",
        "parent_id": 164,
        "post": 210624,
        "n": 4
    },
    {
        "id": 972,
        "name": "东港",
        "parent_id": 164,
        "post": 210681,
        "n": 5
    },
    {
        "id": 973,
        "name": "凤城",
        "parent_id": 164,
        "post": 210682,
        "n": 6
    },
    {
        "id": 974,
        "name": "古塔",
        "parent_id": 165,
        "post": 210702,
        "n": 1
    },
    {
        "id": 975,
        "name": "凌河",
        "parent_id": 165,
        "post": 210703,
        "n": 2
    },
    {
        "id": 976,
        "name": "太和",
        "parent_id": 165,
        "post": 210711,
        "n": 3
    },
    {
        "id": 977,
        "name": "黑山",
        "parent_id": 165,
        "post": 210726,
        "n": 4
    },
    {
        "id": 978,
        "name": "义县",
        "parent_id": 165,
        "post": 210727,
        "n": 5
    },
    {
        "id": 979,
        "name": "凌海",
        "parent_id": 165,
        "post": 210781,
        "n": 6
    },
    {
        "id": 980,
        "name": "北镇",
        "parent_id": 165,
        "post": 210782,
        "n": 7
    },
    {
        "id": 981,
        "name": "站前",
        "parent_id": 166,
        "post": 210802,
        "n": 1
    },
    {
        "id": 982,
        "name": "西市",
        "parent_id": 166,
        "post": 210803,
        "n": 2
    },
    {
        "id": 983,
        "name": "鲅鱼圈",
        "parent_id": 166,
        "post": 210804,
        "n": 3
    },
    {
        "id": 984,
        "name": "老边",
        "parent_id": 166,
        "post": 210811,
        "n": 4
    },
    {
        "id": 985,
        "name": "盖州",
        "parent_id": 166,
        "post": 210881,
        "n": 5
    },
    {
        "id": 986,
        "name": "大石桥",
        "parent_id": 166,
        "post": 210882,
        "n": 6
    },
    {
        "id": 987,
        "name": "海州",
        "parent_id": 167,
        "post": 210902,
        "n": 1
    },
    {
        "id": 988,
        "name": "新邱",
        "parent_id": 167,
        "post": 210903,
        "n": 2
    },
    {
        "id": 989,
        "name": "太平",
        "parent_id": 167,
        "post": 210904,
        "n": 3
    },
    {
        "id": 990,
        "name": "清河门",
        "parent_id": 167,
        "post": 210905,
        "n": 4
    },
    {
        "id": 991,
        "name": "细河",
        "parent_id": 167,
        "post": 210911,
        "n": 5
    },
    {
        "id": 992,
        "name": "阜新",
        "parent_id": 167,
        "post": 210921,
        "n": 6
    },
    {
        "id": 993,
        "name": "彰武",
        "parent_id": 167,
        "post": 210922,
        "n": 7
    },
    {
        "id": 994,
        "name": "白塔",
        "parent_id": 168,
        "post": 211002,
        "n": 1
    },
    {
        "id": 995,
        "name": "文圣",
        "parent_id": 168,
        "post": 211003,
        "n": 2
    },
    {
        "id": 996,
        "name": "宏伟",
        "parent_id": 168,
        "post": 211004,
        "n": 3
    },
    {
        "id": 997,
        "name": "弓长岭",
        "parent_id": 168,
        "post": 211005,
        "n": 4
    },
    {
        "id": 998,
        "name": "辽阳",
        "parent_id": 168,
        "post": 211021,
        "n": 5
    },
    {
        "id": 999,
        "name": "灯塔",
        "parent_id": 168,
        "post": 211081,
        "n": 6
    },
    {
        "id": 1000,
        "name": "太子河",
        "parent_id": 168,
        "post": 211110,
        "n": 7
    },
    {
        "id": 1001,
        "name": "双台子",
        "parent_id": 169,
        "post": 211103,
        "n": 1
    },
    {
        "id": 1002,
        "name": "兴隆台",
        "parent_id": 169,
        "post": 211103,
        "n": 2
    },
    {
        "id": 1003,
        "name": "大洼",
        "parent_id": 169,
        "post": 211104,
        "n": 3
    },
    {
        "id": 1004,
        "name": "盘山",
        "parent_id": 169,
        "post": 211122,
        "n": 4
    },
    {
        "id": 1005,
        "name": "银州",
        "parent_id": 170,
        "post": 211202,
        "n": 1
    },
    {
        "id": 1006,
        "name": "清河",
        "parent_id": 170,
        "post": 211204,
        "n": 2
    },
    {
        "id": 1007,
        "name": "铁岭",
        "parent_id": 170,
        "post": 211221,
        "n": 3
    },
    {
        "id": 1008,
        "name": "西丰",
        "parent_id": 170,
        "post": 211223,
        "n": 4
    },
    {
        "id": 1009,
        "name": "昌图",
        "parent_id": 170,
        "post": 211224,
        "n": 5
    },
    {
        "id": 1010,
        "name": "调兵山",
        "parent_id": 170,
        "post": 211281,
        "n": 6
    },
    {
        "id": 1011,
        "name": "开原",
        "parent_id": 170,
        "post": 211282,
        "n": 7
    },
    {
        "id": 1012,
        "name": "双塔",
        "parent_id": 171,
        "post": 211302,
        "n": 1
    },
    {
        "id": 1013,
        "name": "龙城",
        "parent_id": 171,
        "post": 211303,
        "n": 2
    },
    {
        "id": 1014,
        "name": "朝阳",
        "parent_id": 171,
        "post": 211321,
        "n": 3
    },
    {
        "id": 1015,
        "name": "建平",
        "parent_id": 171,
        "post": 211322,
        "n": 4
    },
    {
        "id": 1016,
        "name": "喀喇沁左翼",
        "parent_id": 171,
        "post": 211324,
        "n": 5
    },
    {
        "id": 1017,
        "name": "北票",
        "parent_id": 171,
        "post": 211381,
        "n": 6
    },
    {
        "id": 1018,
        "name": "凌源",
        "parent_id": 171,
        "post": 211382,
        "n": 7
    },
    {
        "id": 1019,
        "name": "连山",
        "parent_id": 172,
        "post": 211402,
        "n": 1
    },
    {
        "id": 1020,
        "name": "龙港",
        "parent_id": 172,
        "post": 211403,
        "n": 2
    },
    {
        "id": 1021,
        "name": "南票",
        "parent_id": 172,
        "post": 211404,
        "n": 3
    },
    {
        "id": 1022,
        "name": "绥中",
        "parent_id": 172,
        "post": 211421,
        "n": 4
    },
    {
        "id": 1023,
        "name": "建昌",
        "parent_id": 172,
        "post": 211422,
        "n": 5
    },
    {
        "id": 1024,
        "name": "兴城",
        "parent_id": 172,
        "post": 211481,
        "n": 6
    },
    {
        "id": 1025,
        "name": "南关",
        "parent_id": 173,
        "post": 220102,
        "n": 1
    },
    {
        "id": 1026,
        "name": "宽城",
        "parent_id": 173,
        "post": 220103,
        "n": 2
    },
    {
        "id": 1027,
        "name": "朝阳",
        "parent_id": 173,
        "post": 220104,
        "n": 3
    },
    {
        "id": 1028,
        "name": "二道",
        "parent_id": 173,
        "post": 220105,
        "n": 4
    },
    {
        "id": 1029,
        "name": "绿园",
        "parent_id": 173,
        "post": 220106,
        "n": 5
    },
    {
        "id": 1030,
        "name": "双阳",
        "parent_id": 173,
        "post": 220112,
        "n": 6
    },
    {
        "id": 1031,
        "name": "农安",
        "parent_id": 173,
        "post": 220122,
        "n": 8
    },
    {
        "id": 1032,
        "name": "九台",
        "parent_id": 173,
        "post": 220113,
        "n": 7
    },
    {
        "id": 1033,
        "name": "榆树",
        "parent_id": 173,
        "post": 220182,
        "n": 9
    },
    {
        "id": 1034,
        "name": "德惠",
        "parent_id": 173,
        "post": 220183,
        "n": 10
    },
    {
        "id": 1035,
        "name": "昌邑",
        "parent_id": 174,
        "post": 220202,
        "n": 1
    },
    {
        "id": 1036,
        "name": "龙潭",
        "parent_id": 174,
        "post": 220203,
        "n": 2
    },
    {
        "id": 1037,
        "name": "船营",
        "parent_id": 174,
        "post": 220204,
        "n": 3
    },
    {
        "id": 1038,
        "name": "丰满",
        "parent_id": 174,
        "post": 220211,
        "n": 4
    },
    {
        "id": 1039,
        "name": "永吉",
        "parent_id": 174,
        "post": 220221,
        "n": 5
    },
    {
        "id": 1040,
        "name": "桦甸",
        "parent_id": 174,
        "post": 220281,
        "n": 6
    },
    {
        "id": 1041,
        "name": "蛟河",
        "parent_id": 174,
        "post": 220282,
        "n": 7
    },
    {
        "id": 1042,
        "name": "舒兰",
        "parent_id": 174,
        "post": 220283,
        "n": 8
    },
    {
        "id": 1043,
        "name": "磐石",
        "parent_id": 174,
        "post": 220284,
        "n": 9
    },
    {
        "id": 1044,
        "name": "铁西",
        "parent_id": 175,
        "post": 220302,
        "n": 1
    },
    {
        "id": 1045,
        "name": "铁东",
        "parent_id": 175,
        "post": 220303,
        "n": 2
    },
    {
        "id": 1046,
        "name": "梨树",
        "parent_id": 175,
        "post": 220322,
        "n": 3
    },
    {
        "id": 1047,
        "name": "伊通",
        "parent_id": 175,
        "post": 220323,
        "n": 4
    },
    {
        "id": 1048,
        "name": "公主岭",
        "parent_id": 175,
        "post": 220381,
        "n": 5
    },
    {
        "id": 1049,
        "name": "双辽",
        "parent_id": 175,
        "post": 220382,
        "n": 6
    },
    {
        "id": 1050,
        "name": "龙山",
        "parent_id": 176,
        "post": 220402,
        "n": 1
    },
    {
        "id": 1051,
        "name": "西安",
        "parent_id": 176,
        "post": 220403,
        "n": 2
    },
    {
        "id": 1052,
        "name": "东丰",
        "parent_id": 176,
        "post": 220421,
        "n": 3
    },
    {
        "id": 1053,
        "name": "东辽",
        "parent_id": 176,
        "post": 220422,
        "n": 4
    },
    {
        "id": 1054,
        "name": "东昌",
        "parent_id": 177,
        "post": 220502,
        "n": 1
    },
    {
        "id": 1055,
        "name": "二道江",
        "parent_id": 177,
        "post": 220503,
        "n": 2
    },
    {
        "id": 1056,
        "name": "通化",
        "parent_id": 177,
        "post": 220521,
        "n": 3
    },
    {
        "id": 1057,
        "name": "辉南",
        "parent_id": 177,
        "post": 220523,
        "n": 4
    },
    {
        "id": 1058,
        "name": "柳河",
        "parent_id": 177,
        "post": 220524,
        "n": 5
    },
    {
        "id": 1059,
        "name": "梅河口",
        "parent_id": 177,
        "post": 220581,
        "n": 6
    },
    {
        "id": 1060,
        "name": "集安",
        "parent_id": 177,
        "post": 220582,
        "n": 7
    },
    {
        "id": 1061,
        "name": "浑江",
        "parent_id": 178,
        "post": 220602,
        "n": 1
    },
    {
        "id": 1062,
        "name": "江源",
        "parent_id": 178,
        "post": 220604,
        "n": 2
    },
    {
        "id": 1063,
        "name": "抚松",
        "parent_id": 178,
        "post": 220621,
        "n": 3
    },
    {
        "id": 1064,
        "name": "靖宇",
        "parent_id": 178,
        "post": 220622,
        "n": 4
    },
    {
        "id": 1065,
        "name": "长白",
        "parent_id": 178,
        "post": 220623,
        "n": 5
    },
    {
        "id": 1066,
        "name": "临江",
        "parent_id": 178,
        "post": 220681,
        "n": 6
    },
    {
        "id": 1067,
        "name": "宁江",
        "parent_id": 179,
        "post": 220702,
        "n": 1
    },
    {
        "id": 1068,
        "name": "前郭尔罗斯",
        "parent_id": 179,
        "post": 220721,
        "n": 2
    },
    {
        "id": 1069,
        "name": "长岭",
        "parent_id": 179,
        "post": 220722,
        "n": 3
    },
    {
        "id": 1070,
        "name": "乾安",
        "parent_id": 179,
        "post": 220723,
        "n": 4
    },
    {
        "id": 1071,
        "name": "扶余",
        "parent_id": 179,
        "post": 220724,
        "n": 5
    },
    {
        "id": 1072,
        "name": "洮北",
        "parent_id": 180,
        "post": 220802,
        "n": 1
    },
    {
        "id": 1073,
        "name": "镇赉",
        "parent_id": 180,
        "post": 220821,
        "n": 2
    },
    {
        "id": 1074,
        "name": "洮南",
        "parent_id": 180,
        "post": 220881,
        "n": 4
    },
    {
        "id": 1075,
        "name": "大安",
        "parent_id": 180,
        "post": 220882,
        "n": 5
    },
    {
        "id": 1076,
        "name": "通榆",
        "parent_id": 180,
        "post": 220822,
        "n": 3
    },
    {
        "id": 1077,
        "name": "延吉",
        "parent_id": 181,
        "post": 222401,
        "n": 1
    },
    {
        "id": 1078,
        "name": "图们",
        "parent_id": 181,
        "post": 222402,
        "n": 2
    },
    {
        "id": 1079,
        "name": "敦化",
        "parent_id": 181,
        "post": 222403,
        "n": 3
    },
    {
        "id": 1080,
        "name": "珲春",
        "parent_id": 181,
        "post": 222404,
        "n": 4
    },
    {
        "id": 1081,
        "name": "龙井",
        "parent_id": 181,
        "post": 222405,
        "n": 5
    },
    {
        "id": 1082,
        "name": "和龙",
        "parent_id": 181,
        "post": 222406,
        "n": 6
    },
    {
        "id": 1083,
        "name": "汪清",
        "parent_id": 181,
        "post": 222424,
        "n": 7
    },
    {
        "id": 1084,
        "name": "安图",
        "parent_id": 181,
        "post": 222426,
        "n": 8
    },
    {
        "id": 1085,
        "name": "道里",
        "parent_id": 182,
        "post": 230102,
        "n": 1
    },
    {
        "id": 1086,
        "name": "南岗",
        "parent_id": 182,
        "post": 230103,
        "n": 2
    },
    {
        "id": 1087,
        "name": "道外",
        "parent_id": 182,
        "post": 230104,
        "n": 3
    },
    {
        "id": 1088,
        "name": "平房",
        "parent_id": 182,
        "post": 230108,
        "n": 4
    },
    {
        "id": 1089,
        "name": "松北",
        "parent_id": 182,
        "post": 230109,
        "n": 5
    },
    {
        "id": 1090,
        "name": "香坊",
        "parent_id": 182,
        "post": 230110,
        "n": 6
    },
    {
        "id": 1091,
        "name": "呼兰",
        "parent_id": 182,
        "post": 230111,
        "n": 7
    },
    {
        "id": 1092,
        "name": "阿城",
        "parent_id": 182,
        "post": 230112,
        "n": 8
    },
    {
        "id": 1093,
        "name": "依兰",
        "parent_id": 182,
        "post": 230123,
        "n": 9
    },
    {
        "id": 1094,
        "name": "方正",
        "parent_id": 182,
        "post": 230124,
        "n": 10
    },
    {
        "id": 1095,
        "name": "宾县",
        "parent_id": 182,
        "post": 230125,
        "n": 11
    },
    {
        "id": 1096,
        "name": "巴彦",
        "parent_id": 182,
        "post": 230126,
        "n": 12
    },
    {
        "id": 1097,
        "name": "木兰",
        "parent_id": 182,
        "post": 230127,
        "n": 13
    },
    {
        "id": 1098,
        "name": "通河",
        "parent_id": 182,
        "post": 230128,
        "n": 14
    },
    {
        "id": 1099,
        "name": "延寿",
        "parent_id": 182,
        "post": 230129,
        "n": 15
    },
    {
        "id": 1100,
        "name": "双城",
        "parent_id": 182,
        "post": 230182,
        "n": 16
    },
    {
        "id": 1101,
        "name": "尚志",
        "parent_id": 182,
        "post": 230183,
        "n": 17
    },
    {
        "id": 1102,
        "name": "五常",
        "parent_id": 182,
        "post": 230184,
        "n": 18
    },
    {
        "id": 1103,
        "name": "龙沙",
        "parent_id": 183,
        "post": 230202,
        "n": 1
    },
    {
        "id": 1104,
        "name": "建华",
        "parent_id": 183,
        "post": 230203,
        "n": 2
    },
    {
        "id": 1105,
        "name": "铁锋",
        "parent_id": 183,
        "post": 230204,
        "n": 3
    },
    {
        "id": 1106,
        "name": "昂昂溪",
        "parent_id": 183,
        "post": 230205,
        "n": 4
    },
    {
        "id": 1107,
        "name": "富拉尔基",
        "parent_id": 183,
        "post": 230206,
        "n": 5
    },
    {
        "id": 1108,
        "name": "碾子山",
        "parent_id": 183,
        "post": 230207,
        "n": 6
    },
    {
        "id": 1109,
        "name": "梅里斯",
        "parent_id": 183,
        "post": 230208,
        "n": 7
    },
    {
        "id": 1110,
        "name": "龙江",
        "parent_id": 183,
        "post": 230221,
        "n": 8
    },
    {
        "id": 1111,
        "name": "依安",
        "parent_id": 183,
        "post": 230223,
        "n": 9
    },
    {
        "id": 1112,
        "name": "泰来",
        "parent_id": 183,
        "post": 230224,
        "n": 10
    },
    {
        "id": 1113,
        "name": "甘南",
        "parent_id": 183,
        "post": 230225,
        "n": 11
    },
    {
        "id": 1114,
        "name": "富裕",
        "parent_id": 183,
        "post": 230227,
        "n": 12
    },
    {
        "id": 1115,
        "name": "克山",
        "parent_id": 183,
        "post": 230229,
        "n": 13
    },
    {
        "id": 1116,
        "name": "克东",
        "parent_id": 183,
        "post": 230230,
        "n": 14
    },
    {
        "id": 1117,
        "name": "拜泉",
        "parent_id": 183,
        "post": 230231,
        "n": 15
    },
    {
        "id": 1118,
        "name": "讷河",
        "parent_id": 183,
        "post": 230281,
        "n": 16
    },
    {
        "id": 1119,
        "name": "鸡冠",
        "parent_id": 184,
        "post": 230302,
        "n": 1
    },
    {
        "id": 1120,
        "name": "恒山",
        "parent_id": 184,
        "post": 230303,
        "n": 2
    },
    {
        "id": 1121,
        "name": "滴道",
        "parent_id": 184,
        "post": 230304,
        "n": 3
    },
    {
        "id": 1122,
        "name": "梨树",
        "parent_id": 184,
        "post": 230305,
        "n": 4
    },
    {
        "id": 1123,
        "name": "城子河",
        "parent_id": 184,
        "post": 230306,
        "n": 5
    },
    {
        "id": 1124,
        "name": "麻山",
        "parent_id": 184,
        "post": 230307,
        "n": 6
    },
    {
        "id": 1125,
        "name": "鸡东",
        "parent_id": 184,
        "post": 230321,
        "n": 7
    },
    {
        "id": 1126,
        "name": "虎林",
        "parent_id": 184,
        "post": 230381,
        "n": 8
    },
    {
        "id": 1127,
        "name": "密山",
        "parent_id": 184,
        "post": 230382,
        "n": 9
    },
    {
        "id": 1128,
        "name": "向阳",
        "parent_id": 185,
        "post": 230402,
        "n": 1
    },
    {
        "id": 1129,
        "name": "工农",
        "parent_id": 185,
        "post": 230403,
        "n": 2
    },
    {
        "id": 1130,
        "name": "南山",
        "parent_id": 185,
        "post": 230404,
        "n": 3
    },
    {
        "id": 1131,
        "name": "兴安",
        "parent_id": 185,
        "post": 230405,
        "n": 4
    },
    {
        "id": 1132,
        "name": "东山",
        "parent_id": 185,
        "post": 230406,
        "n": 5
    },
    {
        "id": 1133,
        "name": "兴山",
        "parent_id": 185,
        "post": 230407,
        "n": 6
    },
    {
        "id": 1134,
        "name": "萝北",
        "parent_id": 185,
        "post": 230421,
        "n": 7
    },
    {
        "id": 1135,
        "name": "绥滨",
        "parent_id": 185,
        "post": 230422,
        "n": 8
    },
    {
        "id": 1136,
        "name": "尖山",
        "parent_id": 186,
        "post": 230502,
        "n": 1
    },
    {
        "id": 1137,
        "name": "岭东",
        "parent_id": 186,
        "post": 230503,
        "n": 2
    },
    {
        "id": 1138,
        "name": "四方台",
        "parent_id": 186,
        "post": 230505,
        "n": 3
    },
    {
        "id": 1139,
        "name": "宝山",
        "parent_id": 186,
        "post": 230506,
        "n": 4
    },
    {
        "id": 1140,
        "name": "集贤",
        "parent_id": 186,
        "post": 230521,
        "n": 5
    },
    {
        "id": 1141,
        "name": "友谊",
        "parent_id": 186,
        "post": 230522,
        "n": 6
    },
    {
        "id": 1142,
        "name": "宝清",
        "parent_id": 186,
        "post": 230523,
        "n": 7
    },
    {
        "id": 1143,
        "name": "饶河",
        "parent_id": 186,
        "post": 230524,
        "n": 8
    },
    {
        "id": 1144,
        "name": "萨尔图",
        "parent_id": 187,
        "post": 230602,
        "n": 1
    },
    {
        "id": 1145,
        "name": "龙凤",
        "parent_id": 187,
        "post": 230603,
        "n": 2
    },
    {
        "id": 1146,
        "name": "让胡路",
        "parent_id": 187,
        "post": 230604,
        "n": 3
    },
    {
        "id": 1147,
        "name": "红岗",
        "parent_id": 187,
        "post": 230605,
        "n": 4
    },
    {
        "id": 1148,
        "name": "大同",
        "parent_id": 187,
        "post": 230606,
        "n": 5
    },
    {
        "id": 1149,
        "name": "肇州",
        "parent_id": 187,
        "post": 230621,
        "n": 6
    },
    {
        "id": 1150,
        "name": "肇源",
        "parent_id": 187,
        "post": 230622,
        "n": 7
    },
    {
        "id": 1151,
        "name": "林甸",
        "parent_id": 187,
        "post": 230623,
        "n": 8
    },
    {
        "id": 1152,
        "name": "杜尔伯特",
        "parent_id": 187,
        "post": 230624,
        "n": 9
    },
    {
        "id": 1154,
        "name": "南岔",
        "parent_id": 188,
        "post": 230726,
        "n": 8
    },
    {
        "id": 1155,
        "name": "友好",
        "parent_id": 188,
        "post": 230719,
        "n": 3
    },
    {
        "id": 1156,
        "name": "金林",
        "parent_id": 188,
        "post": 230751,
        "n": 9
    },
    {
        "id": 1157,
        "name": "乌翠",
        "parent_id": 188,
        "post": 230718,
        "n": 2
    },
    {
        "id": 1158,
        "name": "丰林",
        "parent_id": 188,
        "post": 230724,
        "n": 6
    },
    {
        "id": 1162,
        "name": "伊美",
        "parent_id": 188,
        "post": 230717,
        "n": 1
    },
    {
        "id": 1163,
        "name": "汤旺",
        "parent_id": 188,
        "post": 230723,
        "n": 5
    },
    {
        "id": 1164,
        "name": "大箐山",
        "parent_id": 188,
        "post": 230725,
        "n": 7
    },
    {
        "id": 1168,
        "name": "嘉荫",
        "parent_id": 188,
        "post": 230722,
        "n": 4
    },
    {
        "id": 1169,
        "name": "铁力",
        "parent_id": 188,
        "post": 230781,
        "n": 10
    },
    {
        "id": 1170,
        "name": "向阳",
        "parent_id": 189,
        "post": 230803,
        "n": 1
    },
    {
        "id": 1171,
        "name": "前进",
        "parent_id": 189,
        "post": 230804,
        "n": 2
    },
    {
        "id": 1172,
        "name": "东风",
        "parent_id": 189,
        "post": 230805,
        "n": 3
    },
    {
        "id": 1173,
        "name": "郊区",
        "parent_id": 189,
        "post": 230811,
        "n": 4
    },
    {
        "id": 1174,
        "name": "桦南",
        "parent_id": 189,
        "post": 230822,
        "n": 5
    },
    {
        "id": 1175,
        "name": "桦川",
        "parent_id": 189,
        "post": 230826,
        "n": 6
    },
    {
        "id": 1176,
        "name": "汤原",
        "parent_id": 189,
        "post": 230828,
        "n": 7
    },
    {
        "id": 1177,
        "name": "抚远",
        "parent_id": 189,
        "post": 230883,
        "n": 10
    },
    {
        "id": 1178,
        "name": "同江",
        "parent_id": 189,
        "post": 230881,
        "n": 8
    },
    {
        "id": 1179,
        "name": "富锦",
        "parent_id": 189,
        "post": 230882,
        "n": 9
    },
    {
        "id": 1180,
        "name": "新兴",
        "parent_id": 190,
        "post": 230902,
        "n": 1
    },
    {
        "id": 1181,
        "name": "桃山",
        "parent_id": 190,
        "post": 230903,
        "n": 2
    },
    {
        "id": 1182,
        "name": "茄子河",
        "parent_id": 190,
        "post": 230904,
        "n": 3
    },
    {
        "id": 1183,
        "name": "勃利",
        "parent_id": 190,
        "post": 230921,
        "n": 4
    },
    {
        "id": 1184,
        "name": "东安",
        "parent_id": 191,
        "post": 231002,
        "n": 1
    },
    {
        "id": 1185,
        "name": "阳明",
        "parent_id": 191,
        "post": 231003,
        "n": 2
    },
    {
        "id": 1186,
        "name": "爱民",
        "parent_id": 191,
        "post": 231004,
        "n": 3
    },
    {
        "id": 1187,
        "name": "西安",
        "parent_id": 191,
        "post": 231005,
        "n": 4
    },
    {
        "id": 1188,
        "name": "东宁",
        "parent_id": 191,
        "post": 231086,
        "n": 10
    },
    {
        "id": 1189,
        "name": "林口",
        "parent_id": 191,
        "post": 231025,
        "n": 5
    },
    {
        "id": 1190,
        "name": "绥芬河",
        "parent_id": 191,
        "post": 231081,
        "n": 6
    },
    {
        "id": 1191,
        "name": "海林",
        "parent_id": 191,
        "post": 231083,
        "n": 7
    },
    {
        "id": 1192,
        "name": "宁安",
        "parent_id": 191,
        "post": 231084,
        "n": 8
    },
    {
        "id": 1193,
        "name": "穆棱",
        "parent_id": 191,
        "post": 231085,
        "n": 9
    },
    {
        "id": 1194,
        "name": "爱辉",
        "parent_id": 192,
        "post": 231102,
        "n": 1
    },
    {
        "id": 1195,
        "name": "嫩江",
        "parent_id": 192,
        "post": 231183,
        "n": 6
    },
    {
        "id": 1196,
        "name": "逊克",
        "parent_id": 192,
        "post": 231123,
        "n": 2
    },
    {
        "id": 1197,
        "name": "孙吴",
        "parent_id": 192,
        "post": 231124,
        "n": 3
    },
    {
        "id": 1198,
        "name": "北安",
        "parent_id": 192,
        "post": 231181,
        "n": 4
    },
    {
        "id": 1199,
        "name": "五大连池",
        "parent_id": 192,
        "post": 231182,
        "n": 5
    },
    {
        "id": 1200,
        "name": "北林",
        "parent_id": 193,
        "post": 231202,
        "n": 1
    },
    {
        "id": 1201,
        "name": "望奎",
        "parent_id": 193,
        "post": 231221,
        "n": 2
    },
    {
        "id": 1202,
        "name": "兰西",
        "parent_id": 193,
        "post": 231222,
        "n": 3
    },
    {
        "id": 1203,
        "name": "青冈",
        "parent_id": 193,
        "post": 231223,
        "n": 4
    },
    {
        "id": 1204,
        "name": "庆安",
        "parent_id": 193,
        "post": 231224,
        "n": 5
    },
    {
        "id": 1205,
        "name": "明水",
        "parent_id": 193,
        "post": 231225,
        "n": 6
    },
    {
        "id": 1206,
        "name": "绥棱",
        "parent_id": 193,
        "post": 231226,
        "n": 7
    },
    {
        "id": 1207,
        "name": "安达",
        "parent_id": 193,
        "post": 231281,
        "n": 8
    },
    {
        "id": 1208,
        "name": "肇东",
        "parent_id": 193,
        "post": 231282,
        "n": 9
    },
    {
        "id": 1209,
        "name": "海伦",
        "parent_id": 193,
        "post": 231283,
        "n": 10
    },
    {
        "id": 1210,
        "name": "加格达奇",
        "parent_id": 194,
        "post": 232701,
        "n": 1
    },
    {
        "id": 1211,
        "name": "松岭",
        "parent_id": 194,
        "post": 232702,
        "n": 2
    },
    {
        "id": 1212,
        "name": "新林",
        "parent_id": 194,
        "post": 232703,
        "n": 3
    },
    {
        "id": 1213,
        "name": "呼中",
        "parent_id": 194,
        "post": 232704,
        "n": 4
    },
    {
        "id": 1214,
        "name": "呼玛",
        "parent_id": 194,
        "post": 232721,
        "n": 5
    },
    {
        "id": 1215,
        "name": "塔河",
        "parent_id": 194,
        "post": 232722,
        "n": 6
    },
    {
        "id": 1216,
        "name": "漠河",
        "parent_id": 194,
        "post": 232701,
        "n": 7
    },
    {
        "id": 1217,
        "name": "玄武",
        "parent_id": 195,
        "post": 320102,
        "n": 1
    },
    {
        "id": 1218,
        "name": "秦淮",
        "parent_id": 195,
        "post": 320104,
        "n": 2
    },
    {
        "id": 1219,
        "name": "建邺",
        "parent_id": 195,
        "post": 320105,
        "n": 3
    },
    {
        "id": 1220,
        "name": "鼓楼",
        "parent_id": 195,
        "post": 320106,
        "n": 4
    },
    {
        "id": 1221,
        "name": "浦口",
        "parent_id": 195,
        "post": 320111,
        "n": 5
    },
    {
        "id": 1222,
        "name": "栖霞",
        "parent_id": 195,
        "post": 320113,
        "n": 6
    },
    {
        "id": 1223,
        "name": "雨花台",
        "parent_id": 195,
        "post": 320114,
        "n": 7
    },
    {
        "id": 1224,
        "name": "江宁",
        "parent_id": 195,
        "post": 320115,
        "n": 8
    },
    {
        "id": 1225,
        "name": "六合",
        "parent_id": 195,
        "post": 320116,
        "n": 9
    },
    {
        "id": 1226,
        "name": "溧水",
        "parent_id": 195,
        "post": 320124,
        "n": 10
    },
    {
        "id": 1227,
        "name": "高淳",
        "parent_id": 195,
        "post": 320125,
        "n": 11
    },
    {
        "id": 1228,
        "name": "梁溪",
        "parent_id": 196,
        "post": 320202,
        "n": 1
    },
    {
        "id": 1229,
        "name": "新吴",
        "parent_id": 196,
        "post": "",
        "n": 2
    },
    {
        "id": 1231,
        "name": "锡山",
        "parent_id": 196,
        "post": 320205,
        "n": 4
    },
    {
        "id": 1232,
        "name": "惠山",
        "parent_id": 196,
        "post": 320206,
        "n": 5
    },
    {
        "id": 1233,
        "name": "滨湖",
        "parent_id": 196,
        "post": 320211,
        "n": 6
    },
    {
        "id": 1234,
        "name": "江阴",
        "parent_id": 196,
        "post": 320281,
        "n": 7
    },
    {
        "id": 1235,
        "name": "宜兴",
        "parent_id": 196,
        "post": 320282,
        "n": 8
    },
    {
        "id": 1236,
        "name": "鼓楼",
        "parent_id": 197,
        "post": 320302,
        "n": 1
    },
    {
        "id": 1237,
        "name": "云龙",
        "parent_id": 197,
        "post": 320303,
        "n": 2
    },
    {
        "id": 1238,
        "name": "贾汪",
        "parent_id": 197,
        "post": 320305,
        "n": 3
    },
    {
        "id": 1239,
        "name": "泉山",
        "parent_id": 197,
        "post": 320311,
        "n": 4
    },
    {
        "id": 1240,
        "name": "铜山",
        "parent_id": 197,
        "post": 320312,
        "n": 5
    },
    {
        "id": 1241,
        "name": "丰县",
        "parent_id": 197,
        "post": 320321,
        "n": 6
    },
    {
        "id": 1242,
        "name": "沛县",
        "parent_id": 197,
        "post": 320322,
        "n": 7
    },
    {
        "id": 1243,
        "name": "睢宁",
        "parent_id": 197,
        "post": 320324,
        "n": 8
    },
    {
        "id": 1244,
        "name": "新沂",
        "parent_id": 197,
        "post": 320381,
        "n": 9
    },
    {
        "id": 1245,
        "name": "邳州",
        "parent_id": 197,
        "post": 320382,
        "n": 10
    },
    {
        "id": 1246,
        "name": "天宁",
        "parent_id": 198,
        "post": 320402,
        "n": 1
    },
    {
        "id": 1247,
        "name": "钟楼",
        "parent_id": 198,
        "post": 320404,
        "n": 2
    },
    {
        "id": 1249,
        "name": "新北",
        "parent_id": 198,
        "post": 320411,
        "n": 4
    },
    {
        "id": 1250,
        "name": "武进",
        "parent_id": 198,
        "post": 320412,
        "n": 5
    },
    {
        "id": 1251,
        "name": "溧阳",
        "parent_id": 198,
        "post": 320481,
        "n": 6
    },
    {
        "id": 1252,
        "name": "金坛",
        "parent_id": 198,
        "post": 320482,
        "n": 7
    },
    {
        "id": 1253,
        "name": "虎丘",
        "parent_id": 199,
        "post": 320505,
        "n": 1
    },
    {
        "id": 1254,
        "name": "吴中",
        "parent_id": 199,
        "post": 320506,
        "n": 2
    },
    {
        "id": 1255,
        "name": "相城",
        "parent_id": 199,
        "post": 320507,
        "n": 3
    },
    {
        "id": 1256,
        "name": "姑苏",
        "parent_id": 199,
        "post": 320508,
        "n": 4
    },
    {
        "id": 1257,
        "name": "吴江",
        "parent_id": 199,
        "post": 320509,
        "n": 5
    },
    {
        "id": 1258,
        "name": "常熟",
        "parent_id": 199,
        "post": 320581,
        "n": 6
    },
    {
        "id": 1259,
        "name": "张家港",
        "parent_id": 199,
        "post": 320582,
        "n": 7
    },
    {
        "id": 1260,
        "name": "昆山",
        "parent_id": 199,
        "post": 320583,
        "n": 8
    },
    {
        "id": 1261,
        "name": "太仓",
        "parent_id": 199,
        "post": 320585,
        "n": 9
    },
    {
        "id": 1262,
        "name": "崇川",
        "parent_id": 200,
        "post": 320602,
        "n": 1
    },
    {
        "id": 1263,
        "name": "港闸",
        "parent_id": 200,
        "post": 320611,
        "n": 2
    },
    {
        "id": 1264,
        "name": "通州",
        "parent_id": 200,
        "post": 320612,
        "n": 3
    },
    {
        "id": 1265,
        "name": "海安",
        "parent_id": 200,
        "post": 320685,
        "n": 4
    },
    {
        "id": 1266,
        "name": "如东",
        "parent_id": 200,
        "post": 320623,
        "n": 5
    },
    {
        "id": 1267,
        "name": "启东",
        "parent_id": 200,
        "post": 320681,
        "n": 6
    },
    {
        "id": 1268,
        "name": "如皋",
        "parent_id": 200,
        "post": 320682,
        "n": 7
    },
    {
        "id": 1269,
        "name": "海门",
        "parent_id": 200,
        "post": 320684,
        "n": 8
    },
    {
        "id": 1270,
        "name": "连云",
        "parent_id": 201,
        "post": 320703,
        "n": 1
    },
    {
        "id": 1272,
        "name": "海州",
        "parent_id": 201,
        "post": 320706,
        "n": 2
    },
    {
        "id": 1273,
        "name": "赣榆",
        "parent_id": 201,
        "post": 320721,
        "n": 3
    },
    {
        "id": 1274,
        "name": "东海",
        "parent_id": 201,
        "post": 320722,
        "n": 4
    },
    {
        "id": 1275,
        "name": "灌云",
        "parent_id": 201,
        "post": 320723,
        "n": 5
    },
    {
        "id": 1276,
        "name": "灌南",
        "parent_id": 201,
        "post": 320724,
        "n": 6
    },
    {
        "id": 1278,
        "name": "淮安",
        "parent_id": 202,
        "post": 320803,
        "n": 1
    },
    {
        "id": 1279,
        "name": "淮阴",
        "parent_id": 202,
        "post": 320804,
        "n": 2
    },
    {
        "id": 1280,
        "name": "清江浦",
        "parent_id": 202,
        "post": 320812,
        "n": 3
    },
    {
        "id": 1281,
        "name": "涟水",
        "parent_id": 202,
        "post": 320826,
        "n": 5
    },
    {
        "id": 1282,
        "name": "洪泽",
        "parent_id": 202,
        "post": 320813,
        "n": 4
    },
    {
        "id": 1283,
        "name": "盱眙",
        "parent_id": 202,
        "post": 320830,
        "n": 6
    },
    {
        "id": 1284,
        "name": "金湖",
        "parent_id": 202,
        "post": 320831,
        "n": 7
    },
    {
        "id": 1285,
        "name": "亭湖",
        "parent_id": 203,
        "post": 320902,
        "n": 1
    },
    {
        "id": 1286,
        "name": "盐都",
        "parent_id": 203,
        "post": 320903,
        "n": 2
    },
    {
        "id": 1287,
        "name": "响水",
        "parent_id": 203,
        "post": 320921,
        "n": 3
    },
    {
        "id": 1288,
        "name": "滨海",
        "parent_id": 203,
        "post": 320922,
        "n": 4
    },
    {
        "id": 1289,
        "name": "阜宁",
        "parent_id": 203,
        "post": 320923,
        "n": 5
    },
    {
        "id": 1290,
        "name": "射阳",
        "parent_id": 203,
        "post": 320924,
        "n": 6
    },
    {
        "id": 1291,
        "name": "建湖",
        "parent_id": 203,
        "post": 320925,
        "n": 7
    },
    {
        "id": 1292,
        "name": "东台",
        "parent_id": 203,
        "post": 320981,
        "n": 8
    },
    {
        "id": 1293,
        "name": "大丰",
        "parent_id": 203,
        "post": 320982,
        "n": 9
    },
    {
        "id": 1294,
        "name": "广陵",
        "parent_id": 204,
        "post": 321002,
        "n": 1
    },
    {
        "id": 1295,
        "name": "邗江",
        "parent_id": 204,
        "post": 321003,
        "n": 2
    },
    {
        "id": 1296,
        "name": "江都",
        "parent_id": 204,
        "post": 321012,
        "n": 3
    },
    {
        "id": 1297,
        "name": "宝应",
        "parent_id": 204,
        "post": 321023,
        "n": 4
    },
    {
        "id": 1298,
        "name": "仪征",
        "parent_id": 204,
        "post": 321081,
        "n": 5
    },
    {
        "id": 1299,
        "name": "高邮",
        "parent_id": 204,
        "post": 321084,
        "n": 6
    },
    {
        "id": 1300,
        "name": "京口",
        "parent_id": 205,
        "post": 321102,
        "n": 1
    },
    {
        "id": 1301,
        "name": "润州",
        "parent_id": 205,
        "post": 321111,
        "n": 2
    },
    {
        "id": 1302,
        "name": "丹徒",
        "parent_id": 205,
        "post": 321112,
        "n": 3
    },
    {
        "id": 1303,
        "name": "丹阳",
        "parent_id": 205,
        "post": 321181,
        "n": 4
    },
    {
        "id": 1304,
        "name": "扬中",
        "parent_id": 205,
        "post": 321182,
        "n": 5
    },
    {
        "id": 1305,
        "name": "句容",
        "parent_id": 205,
        "post": 321183,
        "n": 6
    },
    {
        "id": 1306,
        "name": "海陵",
        "parent_id": 206,
        "post": 321202,
        "n": 1
    },
    {
        "id": 1307,
        "name": "高港",
        "parent_id": 206,
        "post": 321203,
        "n": 2
    },
    {
        "id": 1308,
        "name": "兴化",
        "parent_id": 206,
        "post": 321281,
        "n": 3
    },
    {
        "id": 1309,
        "name": "靖江",
        "parent_id": 206,
        "post": 321282,
        "n": 4
    },
    {
        "id": 1310,
        "name": "泰兴",
        "parent_id": 206,
        "post": 321283,
        "n": 5
    },
    {
        "id": 1311,
        "name": "姜堰",
        "parent_id": 206,
        "post": 321284,
        "n": 6
    },
    {
        "id": 1312,
        "name": "宿城",
        "parent_id": 207,
        "post": 321302,
        "n": 1
    },
    {
        "id": 1313,
        "name": "宿豫",
        "parent_id": 207,
        "post": 321311,
        "n": 2
    },
    {
        "id": 1314,
        "name": "沭阳",
        "parent_id": 207,
        "post": 321322,
        "n": 3
    },
    {
        "id": 1315,
        "name": "泗阳",
        "parent_id": 207,
        "post": 321323,
        "n": 4
    },
    {
        "id": 1316,
        "name": "泗洪",
        "parent_id": 207,
        "post": 321324,
        "n": 5
    },
    {
        "id": 1317,
        "name": "上城",
        "parent_id": 208,
        "post": 330102,
        "n": 1
    },
    {
        "id": 1318,
        "name": "下城",
        "parent_id": 208,
        "post": 330103,
        "n": 2
    },
    {
        "id": 1319,
        "name": "江干",
        "parent_id": 208,
        "post": 330104,
        "n": 3
    },
    {
        "id": 1320,
        "name": "拱墅",
        "parent_id": 208,
        "post": 330105,
        "n": 4
    },
    {
        "id": 1321,
        "name": "西湖",
        "parent_id": 208,
        "post": 330106,
        "n": 5
    },
    {
        "id": 1322,
        "name": "滨江",
        "parent_id": 208,
        "post": 330108,
        "n": 6
    },
    {
        "id": 1323,
        "name": "萧山",
        "parent_id": 208,
        "post": 330109,
        "n": 7
    },
    {
        "id": 1324,
        "name": "余杭",
        "parent_id": 208,
        "post": 330110,
        "n": 8
    },
    {
        "id": 1325,
        "name": "桐庐",
        "parent_id": 208,
        "post": 330122,
        "n": 10
    },
    {
        "id": 1326,
        "name": "淳安",
        "parent_id": 208,
        "post": 330127,
        "n": 11
    },
    {
        "id": 1327,
        "name": "建德",
        "parent_id": 208,
        "post": 330182,
        "n": 12
    },
    {
        "id": 1328,
        "name": "富阳",
        "parent_id": 208,
        "post": 330183,
        "n": 13
    },
    {
        "id": 1329,
        "name": "临安",
        "parent_id": 208,
        "post": 330112,
        "n": 9
    },
    {
        "id": 1330,
        "name": "海曙",
        "parent_id": 209,
        "post": 330203,
        "n": 1
    },
    {
        "id": 1332,
        "name": "江北",
        "parent_id": 209,
        "post": 330205,
        "n": 3
    },
    {
        "id": 1333,
        "name": "北仑",
        "parent_id": 209,
        "post": 330206,
        "n": 4
    },
    {
        "id": 1334,
        "name": "镇海",
        "parent_id": 209,
        "post": 330211,
        "n": 5
    },
    {
        "id": 1335,
        "name": "鄞州",
        "parent_id": 209,
        "post": 330212,
        "n": 6
    },
    {
        "id": 1336,
        "name": "象山",
        "parent_id": 209,
        "post": 330225,
        "n": 8
    },
    {
        "id": 1337,
        "name": "宁海",
        "parent_id": 209,
        "post": 330226,
        "n": 9
    },
    {
        "id": 1338,
        "name": "余姚",
        "parent_id": 209,
        "post": 330281,
        "n": 10
    },
    {
        "id": 1339,
        "name": "慈溪",
        "parent_id": 209,
        "post": 330282,
        "n": 11
    },
    {
        "id": 1340,
        "name": "奉化",
        "parent_id": 209,
        "post": 330213,
        "n": 7
    },
    {
        "id": 1341,
        "name": "鹿城",
        "parent_id": 210,
        "post": 330302,
        "n": 1
    },
    {
        "id": 1342,
        "name": "龙湾",
        "parent_id": 210,
        "post": 330303,
        "n": 2
    },
    {
        "id": 1343,
        "name": "瓯海",
        "parent_id": 210,
        "post": 330304,
        "n": 3
    },
    {
        "id": 1344,
        "name": "洞头",
        "parent_id": 210,
        "post": 330322,
        "n": 4
    },
    {
        "id": 1345,
        "name": "永嘉",
        "parent_id": 210,
        "post": 330324,
        "n": 5
    },
    {
        "id": 1346,
        "name": "平阳",
        "parent_id": 210,
        "post": 330326,
        "n": 6
    },
    {
        "id": 1347,
        "name": "苍南",
        "parent_id": 210,
        "post": 330327,
        "n": 7
    },
    {
        "id": 1348,
        "name": "文成",
        "parent_id": 210,
        "post": 330328,
        "n": 8
    },
    {
        "id": 1349,
        "name": "泰顺",
        "parent_id": 210,
        "post": 330329,
        "n": 9
    },
    {
        "id": 1350,
        "name": "瑞安",
        "parent_id": 210,
        "post": 330381,
        "n": 10
    },
    {
        "id": 1351,
        "name": "乐清",
        "parent_id": 210,
        "post": 330382,
        "n": 11
    },
    {
        "id": 1352,
        "name": "南湖",
        "parent_id": 211,
        "post": 330402,
        "n": 1
    },
    {
        "id": 1353,
        "name": "秀洲",
        "parent_id": 211,
        "post": 330411,
        "n": 2
    },
    {
        "id": 1354,
        "name": "嘉善",
        "parent_id": 211,
        "post": 330421,
        "n": 3
    },
    {
        "id": 1355,
        "name": "海盐",
        "parent_id": 211,
        "post": 330424,
        "n": 4
    },
    {
        "id": 1356,
        "name": "海宁",
        "parent_id": 211,
        "post": 330481,
        "n": 5
    },
    {
        "id": 1357,
        "name": "平湖",
        "parent_id": 211,
        "post": 330482,
        "n": 6
    },
    {
        "id": 1358,
        "name": "桐乡",
        "parent_id": 211,
        "post": 330483,
        "n": 7
    },
    {
        "id": 1359,
        "name": "吴兴",
        "parent_id": 212,
        "post": 330502,
        "n": 1
    },
    {
        "id": 1360,
        "name": "南浔",
        "parent_id": 212,
        "post": 330503,
        "n": 2
    },
    {
        "id": 1361,
        "name": "德清",
        "parent_id": 212,
        "post": 330521,
        "n": 3
    },
    {
        "id": 1362,
        "name": "长兴",
        "parent_id": 212,
        "post": 330522,
        "n": 4
    },
    {
        "id": 1363,
        "name": "安吉",
        "parent_id": 212,
        "post": 330523,
        "n": 5
    },
    {
        "id": 1364,
        "name": "越城",
        "parent_id": 213,
        "post": 330602,
        "n": 1
    },
    {
        "id": 1365,
        "name": "柯桥",
        "parent_id": 213,
        "post": 330603,
        "n": 2
    },
    {
        "id": 1366,
        "name": "新昌",
        "parent_id": 213,
        "post": 330624,
        "n": 4
    },
    {
        "id": 1367,
        "name": "诸暨",
        "parent_id": 213,
        "post": 330681,
        "n": 5
    },
    {
        "id": 1368,
        "name": "上虞",
        "parent_id": 213,
        "post": 330604,
        "n": 3
    },
    {
        "id": 1369,
        "name": "嵊州",
        "parent_id": 213,
        "post": 330683,
        "n": 6
    },
    {
        "id": 1370,
        "name": "婺城",
        "parent_id": 214,
        "post": 330702,
        "n": 1
    },
    {
        "id": 1371,
        "name": "金东",
        "parent_id": 214,
        "post": 330703,
        "n": 2
    },
    {
        "id": 1372,
        "name": "武义",
        "parent_id": 214,
        "post": 330723,
        "n": 3
    },
    {
        "id": 1373,
        "name": "浦江",
        "parent_id": 214,
        "post": 330726,
        "n": 4
    },
    {
        "id": 1374,
        "name": "磐安",
        "parent_id": 214,
        "post": 330727,
        "n": 5
    },
    {
        "id": 1375,
        "name": "兰溪",
        "parent_id": 214,
        "post": 330781,
        "n": 6
    },
    {
        "id": 1376,
        "name": "义乌",
        "parent_id": 214,
        "post": 330782,
        "n": 7
    },
    {
        "id": 1377,
        "name": "东阳",
        "parent_id": 214,
        "post": 330783,
        "n": 8
    },
    {
        "id": 1378,
        "name": "永康",
        "parent_id": 214,
        "post": 330784,
        "n": 9
    },
    {
        "id": 1379,
        "name": "柯城",
        "parent_id": 215,
        "post": 330802,
        "n": 1
    },
    {
        "id": 1380,
        "name": "衢江",
        "parent_id": 215,
        "post": 330803,
        "n": 2
    },
    {
        "id": 1381,
        "name": "常山",
        "parent_id": 215,
        "post": 330822,
        "n": 3
    },
    {
        "id": 1382,
        "name": "开化",
        "parent_id": 215,
        "post": 330824,
        "n": 4
    },
    {
        "id": 1383,
        "name": "龙游",
        "parent_id": 215,
        "post": 330825,
        "n": 5
    },
    {
        "id": 1384,
        "name": "江山",
        "parent_id": 215,
        "post": 330881,
        "n": 6
    },
    {
        "id": 1385,
        "name": "定海",
        "parent_id": 216,
        "post": 330902,
        "n": 1
    },
    {
        "id": 1386,
        "name": "普陀",
        "parent_id": 216,
        "post": 330903,
        "n": 2
    },
    {
        "id": 1387,
        "name": "岱山",
        "parent_id": 216,
        "post": 330921,
        "n": 3
    },
    {
        "id": 1388,
        "name": "嵊泗",
        "parent_id": 216,
        "post": 330922,
        "n": 4
    },
    {
        "id": 1389,
        "name": "椒江",
        "parent_id": 217,
        "post": 331002,
        "n": 1
    },
    {
        "id": 1390,
        "name": "黄岩",
        "parent_id": 217,
        "post": 331003,
        "n": 2
    },
    {
        "id": 1391,
        "name": "路桥",
        "parent_id": 217,
        "post": 331004,
        "n": 3
    },
    {
        "id": 1392,
        "name": "玉环",
        "parent_id": 217,
        "post": 331083,
        "n": 9
    },
    {
        "id": 1393,
        "name": "三门",
        "parent_id": 217,
        "post": 331022,
        "n": 4
    },
    {
        "id": 1394,
        "name": "天台",
        "parent_id": 217,
        "post": 331023,
        "n": 5
    },
    {
        "id": 1395,
        "name": "仙居",
        "parent_id": 217,
        "post": 331024,
        "n": 6
    },
    {
        "id": 1396,
        "name": "温岭",
        "parent_id": 217,
        "post": 331081,
        "n": 7
    },
    {
        "id": 1397,
        "name": "临海",
        "parent_id": 217,
        "post": 331082,
        "n": 8
    },
    {
        "id": 1398,
        "name": "莲都",
        "parent_id": 218,
        "post": 331102,
        "n": 1
    },
    {
        "id": 1399,
        "name": "青田",
        "parent_id": 218,
        "post": 331121,
        "n": 2
    },
    {
        "id": 1400,
        "name": "缙云",
        "parent_id": 218,
        "post": 331122,
        "n": 3
    },
    {
        "id": 1401,
        "name": "遂昌",
        "parent_id": 218,
        "post": 331123,
        "n": 4
    },
    {
        "id": 1402,
        "name": "松阳",
        "parent_id": 218,
        "post": 331124,
        "n": 5
    },
    {
        "id": 1403,
        "name": "云和",
        "parent_id": 218,
        "post": 331125,
        "n": 6
    },
    {
        "id": 1404,
        "name": "庆元",
        "parent_id": 218,
        "post": 331126,
        "n": 7
    },
    {
        "id": 1405,
        "name": "景宁",
        "parent_id": 218,
        "post": 331127,
        "n": 8
    },
    {
        "id": 1406,
        "name": "龙泉",
        "parent_id": 218,
        "post": 331181,
        "n": 9
    },
    {
        "id": 1407,
        "name": "瑶海",
        "parent_id": 219,
        "post": 340102,
        "n": 1
    },
    {
        "id": 1408,
        "name": "庐阳",
        "parent_id": 219,
        "post": 340103,
        "n": 2
    },
    {
        "id": 1409,
        "name": "蜀山",
        "parent_id": 219,
        "post": 340104,
        "n": 3
    },
    {
        "id": 1410,
        "name": "包河",
        "parent_id": 219,
        "post": 340111,
        "n": 4
    },
    {
        "id": 1411,
        "name": "长丰",
        "parent_id": 219,
        "post": 340121,
        "n": 5
    },
    {
        "id": 1412,
        "name": "肥东",
        "parent_id": 219,
        "post": 340122,
        "n": 6
    },
    {
        "id": 1413,
        "name": "肥西",
        "parent_id": 219,
        "post": 340123,
        "n": 7
    },
    {
        "id": 1414,
        "name": "庐江",
        "parent_id": 219,
        "post": 340124,
        "n": 8
    },
    {
        "id": 1415,
        "name": "巢湖",
        "parent_id": 219,
        "post": 340181,
        "n": 9
    },
    {
        "id": 1416,
        "name": "镜湖",
        "parent_id": 220,
        "post": 340202,
        "n": 1
    },
    {
        "id": 1417,
        "name": "弋江",
        "parent_id": 220,
        "post": 340203,
        "n": 2
    },
    {
        "id": 1418,
        "name": "鸠江",
        "parent_id": 220,
        "post": 340207,
        "n": 3
    },
    {
        "id": 1419,
        "name": "三山",
        "parent_id": 220,
        "post": 340208,
        "n": 4
    },
    {
        "id": 1420,
        "name": "芜湖",
        "parent_id": 220,
        "post": 340221,
        "n": 5
    },
    {
        "id": 1421,
        "name": "繁昌",
        "parent_id": 220,
        "post": 340222,
        "n": 6
    },
    {
        "id": 1422,
        "name": "南陵",
        "parent_id": 220,
        "post": 340223,
        "n": 7
    },
    {
        "id": 1423,
        "name": "无为",
        "parent_id": 220,
        "post": 340281,
        "n": 8
    },
    {
        "id": 1424,
        "name": "龙子湖",
        "parent_id": 221,
        "post": 340302,
        "n": 1
    },
    {
        "id": 1425,
        "name": "蚌山",
        "parent_id": 221,
        "post": 340303,
        "n": 2
    },
    {
        "id": 1426,
        "name": "禹会",
        "parent_id": 221,
        "post": 340304,
        "n": 3
    },
    {
        "id": 1427,
        "name": "淮上",
        "parent_id": 221,
        "post": 340311,
        "n": 4
    },
    {
        "id": 1428,
        "name": "怀远",
        "parent_id": 221,
        "post": 340321,
        "n": 5
    },
    {
        "id": 1429,
        "name": "五河",
        "parent_id": 221,
        "post": 340322,
        "n": 6
    },
    {
        "id": 1430,
        "name": "固镇",
        "parent_id": 221,
        "post": 340323,
        "n": 7
    },
    {
        "id": 1431,
        "name": "大通",
        "parent_id": 222,
        "post": 340402,
        "n": 1
    },
    {
        "id": 1432,
        "name": "田家庵",
        "parent_id": 222,
        "post": 340403,
        "n": 2
    },
    {
        "id": 1433,
        "name": "谢家集",
        "parent_id": 222,
        "post": 340404,
        "n": 3
    },
    {
        "id": 1434,
        "name": "八公山",
        "parent_id": 222,
        "post": 340405,
        "n": 4
    },
    {
        "id": 1435,
        "name": "潘集",
        "parent_id": 222,
        "post": 340406,
        "n": 5
    },
    {
        "id": 1436,
        "name": "凤台",
        "parent_id": 222,
        "post": 340421,
        "n": 6
    },
    {
        "id": 1437,
        "name": "花山",
        "parent_id": 223,
        "post": 340503,
        "n": 1
    },
    {
        "id": 1438,
        "name": "雨山",
        "parent_id": 223,
        "post": 340504,
        "n": 2
    },
    {
        "id": 1439,
        "name": "博望",
        "parent_id": 223,
        "post": 340506,
        "n": 3
    },
    {
        "id": 1440,
        "name": "当涂",
        "parent_id": 223,
        "post": 340521,
        "n": 4
    },
    {
        "id": 1441,
        "name": "含山",
        "parent_id": 223,
        "post": 340522,
        "n": 5
    },
    {
        "id": 1442,
        "name": "和县",
        "parent_id": 223,
        "post": 340523,
        "n": 6
    },
    {
        "id": 1443,
        "name": "杜集",
        "parent_id": 224,
        "post": 340602,
        "n": 1
    },
    {
        "id": 1444,
        "name": "相山",
        "parent_id": 224,
        "post": 340603,
        "n": 2
    },
    {
        "id": 1445,
        "name": "烈山",
        "parent_id": 224,
        "post": 340604,
        "n": 3
    },
    {
        "id": 1446,
        "name": "濉溪",
        "parent_id": 224,
        "post": 340621,
        "n": 4
    },
    {
        "id": 1447,
        "name": "铜官山",
        "parent_id": 225,
        "post": 340702,
        "n": 1
    },
    {
        "id": 1449,
        "name": "郊区",
        "parent_id": 225,
        "post": 340711,
        "n": 3
    },
    {
        "id": 1450,
        "name": "义安",
        "parent_id": 225,
        "post": 340721,
        "n": 4
    },
    {
        "id": 1451,
        "name": "迎江",
        "parent_id": 226,
        "post": 340802,
        "n": 1
    },
    {
        "id": 1452,
        "name": "大观",
        "parent_id": 226,
        "post": 340803,
        "n": 2
    },
    {
        "id": 1453,
        "name": "宜秀",
        "parent_id": 226,
        "post": 340811,
        "n": 3
    },
    {
        "id": 1454,
        "name": "怀宁",
        "parent_id": 226,
        "post": 340822,
        "n": 4
    },
    {
        "id": 1455,
        "name": "枞阳",
        "parent_id": 225,
        "post": 340823,
        "n": 5
    },
    {
        "id": 1456,
        "name": "潜山",
        "parent_id": 226,
        "post": 340824,
        "n": 6
    },
    {
        "id": 1457,
        "name": "太湖",
        "parent_id": 226,
        "post": 340825,
        "n": 7
    },
    {
        "id": 1458,
        "name": "宿松",
        "parent_id": 226,
        "post": 340826,
        "n": 8
    },
    {
        "id": 1459,
        "name": "望江",
        "parent_id": 226,
        "post": 340827,
        "n": 9
    },
    {
        "id": 1460,
        "name": "岳西",
        "parent_id": 226,
        "post": 340828,
        "n": 10
    },
    {
        "id": 1461,
        "name": "桐城",
        "parent_id": 226,
        "post": 340881,
        "n": 11
    },
    {
        "id": 1462,
        "name": "屯溪",
        "parent_id": 227,
        "post": 341002,
        "n": 1
    },
    {
        "id": 1463,
        "name": "黄山",
        "parent_id": 227,
        "post": 341003,
        "n": 2
    },
    {
        "id": 1464,
        "name": "徽州",
        "parent_id": 227,
        "post": 341004,
        "n": 3
    },
    {
        "id": 1465,
        "name": "歙县",
        "parent_id": 227,
        "post": 341021,
        "n": 4
    },
    {
        "id": 1466,
        "name": "休宁",
        "parent_id": 227,
        "post": 341022,
        "n": 5
    },
    {
        "id": 1467,
        "name": "黟县",
        "parent_id": 227,
        "post": 341023,
        "n": 6
    },
    {
        "id": 1468,
        "name": "祁门",
        "parent_id": 227,
        "post": 341024,
        "n": 7
    },
    {
        "id": 1469,
        "name": "琅玡",
        "parent_id": 228,
        "post": 341102,
        "n": 1
    },
    {
        "id": 1470,
        "name": "南谯",
        "parent_id": 228,
        "post": 341103,
        "n": 2
    },
    {
        "id": 1471,
        "name": "来安",
        "parent_id": 228,
        "post": 341122,
        "n": 3
    },
    {
        "id": 1472,
        "name": "全椒",
        "parent_id": 228,
        "post": 341124,
        "n": 4
    },
    {
        "id": 1473,
        "name": "定远",
        "parent_id": 228,
        "post": 341125,
        "n": 5
    },
    {
        "id": 1474,
        "name": "凤阳",
        "parent_id": 228,
        "post": 341126,
        "n": 6
    },
    {
        "id": 1475,
        "name": "天长",
        "parent_id": 228,
        "post": 341181,
        "n": 7
    },
    {
        "id": 1476,
        "name": "明光",
        "parent_id": 228,
        "post": 341182,
        "n": 8
    },
    {
        "id": 1477,
        "name": "颍州",
        "parent_id": 229,
        "post": 341202,
        "n": 1
    },
    {
        "id": 1478,
        "name": "颍东",
        "parent_id": 229,
        "post": 341203,
        "n": 2
    },
    {
        "id": 1479,
        "name": "颍泉",
        "parent_id": 229,
        "post": 341204,
        "n": 3
    },
    {
        "id": 1480,
        "name": "临泉",
        "parent_id": 229,
        "post": 341221,
        "n": 4
    },
    {
        "id": 1481,
        "name": "太和",
        "parent_id": 229,
        "post": 341222,
        "n": 5
    },
    {
        "id": 1482,
        "name": "阜南",
        "parent_id": 229,
        "post": 341225,
        "n": 6
    },
    {
        "id": 1483,
        "name": "颖上",
        "parent_id": 229,
        "post": 341226,
        "n": 7
    },
    {
        "id": 1484,
        "name": "界首",
        "parent_id": 229,
        "post": 341282,
        "n": 8
    },
    {
        "id": 1485,
        "name": "埇桥",
        "parent_id": 230,
        "post": 341302,
        "n": 1
    },
    {
        "id": 1486,
        "name": "砀山",
        "parent_id": 230,
        "post": 341321,
        "n": 2
    },
    {
        "id": 1487,
        "name": "萧县",
        "parent_id": 230,
        "post": 341322,
        "n": 3
    },
    {
        "id": 1488,
        "name": "灵璧",
        "parent_id": 230,
        "post": 341323,
        "n": 4
    },
    {
        "id": 1489,
        "name": "泗县",
        "parent_id": 230,
        "post": 341324,
        "n": 5
    },
    {
        "id": 1490,
        "name": "金安",
        "parent_id": 231,
        "post": 341502,
        "n": 1
    },
    {
        "id": 1491,
        "name": "裕安",
        "parent_id": 231,
        "post": 341503,
        "n": 2
    },
    {
        "id": 1492,
        "name": "寿县",
        "parent_id": 222,
        "post": 341521,
        "n": 3
    },
    {
        "id": 1493,
        "name": "霍邱",
        "parent_id": 231,
        "post": 341522,
        "n": 4
    },
    {
        "id": 1494,
        "name": "舒城",
        "parent_id": 231,
        "post": 341523,
        "n": 5
    },
    {
        "id": 1495,
        "name": "金寨",
        "parent_id": 231,
        "post": 341524,
        "n": 6
    },
    {
        "id": 1496,
        "name": "霍山",
        "parent_id": 231,
        "post": 341525,
        "n": 7
    },
    {
        "id": 1497,
        "name": "谯城",
        "parent_id": 232,
        "post": 341602,
        "n": 1
    },
    {
        "id": 1498,
        "name": "涡阳",
        "parent_id": 232,
        "post": 341621,
        "n": 2
    },
    {
        "id": 1499,
        "name": "蒙城",
        "parent_id": 232,
        "post": 341622,
        "n": 3
    },
    {
        "id": 1500,
        "name": "利辛",
        "parent_id": 232,
        "post": 341623,
        "n": 4
    },
    {
        "id": 1501,
        "name": "贵池",
        "parent_id": 233,
        "post": 341702,
        "n": 1
    },
    {
        "id": 1502,
        "name": "东至",
        "parent_id": 233,
        "post": 341721,
        "n": 2
    },
    {
        "id": 1503,
        "name": "石台",
        "parent_id": 233,
        "post": 341722,
        "n": 3
    },
    {
        "id": 1504,
        "name": "青阳",
        "parent_id": 233,
        "post": 341723,
        "n": 4
    },
    {
        "id": 1505,
        "name": "宣州",
        "parent_id": 234,
        "post": 341802,
        "n": 1
    },
    {
        "id": 1506,
        "name": "郎溪",
        "parent_id": 234,
        "post": 341821,
        "n": 2
    },
    {
        "id": 1507,
        "name": "广德",
        "parent_id": 234,
        "post": 341882,
        "n": 7
    },
    {
        "id": 1508,
        "name": "泾县",
        "parent_id": 234,
        "post": 341823,
        "n": 3
    },
    {
        "id": 1509,
        "name": "绩溪",
        "parent_id": 234,
        "post": 341824,
        "n": 4
    },
    {
        "id": 1510,
        "name": "旌德",
        "parent_id": 234,
        "post": 341825,
        "n": 5
    },
    {
        "id": 1511,
        "name": "宁国",
        "parent_id": 234,
        "post": 341881,
        "n": 6
    },
    {
        "id": 1512,
        "name": "鼓楼",
        "parent_id": 235,
        "post": 350102,
        "n": 1
    },
    {
        "id": 1513,
        "name": "台江",
        "parent_id": 235,
        "post": 350103,
        "n": 2
    },
    {
        "id": 1514,
        "name": "仓山",
        "parent_id": 235,
        "post": 350104,
        "n": 3
    },
    {
        "id": 1515,
        "name": "马尾",
        "parent_id": 235,
        "post": 350105,
        "n": 4
    },
    {
        "id": 1516,
        "name": "晋安",
        "parent_id": 235,
        "post": 350111,
        "n": 5
    },
    {
        "id": 1517,
        "name": "闽侯",
        "parent_id": 235,
        "post": 350121,
        "n": 7
    },
    {
        "id": 1518,
        "name": "连江",
        "parent_id": 235,
        "post": 350122,
        "n": 8
    },
    {
        "id": 1519,
        "name": "罗源",
        "parent_id": 235,
        "post": 350123,
        "n": 9
    },
    {
        "id": 1520,
        "name": "闽清",
        "parent_id": 235,
        "post": 350124,
        "n": 10
    },
    {
        "id": 1521,
        "name": "永泰",
        "parent_id": 235,
        "post": 350125,
        "n": 11
    },
    {
        "id": 1522,
        "name": "平潭",
        "parent_id": 235,
        "post": 350128,
        "n": 12
    },
    {
        "id": 1523,
        "name": "福清",
        "parent_id": 235,
        "post": 350181,
        "n": 13
    },
    {
        "id": 1524,
        "name": "长乐",
        "parent_id": 235,
        "post": 350112,
        "n": 6
    },
    {
        "id": 1525,
        "name": "思明",
        "parent_id": 236,
        "post": 350203,
        "n": 1
    },
    {
        "id": 1526,
        "name": "海沧",
        "parent_id": 236,
        "post": 350205,
        "n": 2
    },
    {
        "id": 1527,
        "name": "湖里",
        "parent_id": 236,
        "post": 350206,
        "n": 3
    },
    {
        "id": 1528,
        "name": "集美",
        "parent_id": 236,
        "post": 350211,
        "n": 4
    },
    {
        "id": 1529,
        "name": "同安",
        "parent_id": 236,
        "post": 350212,
        "n": 5
    },
    {
        "id": 1530,
        "name": "翔安",
        "parent_id": 236,
        "post": 350213,
        "n": 6
    },
    {
        "id": 1531,
        "name": "城厢",
        "parent_id": 237,
        "post": 350302,
        "n": 1
    },
    {
        "id": 1532,
        "name": "涵江",
        "parent_id": 237,
        "post": 350303,
        "n": 2
    },
    {
        "id": 1533,
        "name": "荔城",
        "parent_id": 237,
        "post": 350304,
        "n": 3
    },
    {
        "id": 1534,
        "name": "秀屿",
        "parent_id": 237,
        "post": 350305,
        "n": 4
    },
    {
        "id": 1535,
        "name": "仙游",
        "parent_id": 237,
        "post": 350322,
        "n": 5
    },
    {
        "id": 1536,
        "name": "梅列",
        "parent_id": 238,
        "post": 350402,
        "n": 1
    },
    {
        "id": 1537,
        "name": "三元",
        "parent_id": 238,
        "post": 350403,
        "n": 2
    },
    {
        "id": 1538,
        "name": "明溪",
        "parent_id": 238,
        "post": 350421,
        "n": 3
    },
    {
        "id": 1539,
        "name": "清流",
        "parent_id": 238,
        "post": 350423,
        "n": 4
    },
    {
        "id": 1540,
        "name": "宁化",
        "parent_id": 238,
        "post": 350424,
        "n": 5
    },
    {
        "id": 1541,
        "name": "大田",
        "parent_id": 238,
        "post": 350425,
        "n": 6
    },
    {
        "id": 1542,
        "name": "尤溪",
        "parent_id": 238,
        "post": 350426,
        "n": 7
    },
    {
        "id": 1543,
        "name": "沙县",
        "parent_id": 238,
        "post": 350427,
        "n": 8
    },
    {
        "id": 1544,
        "name": "将乐",
        "parent_id": 238,
        "post": 350428,
        "n": 9
    },
    {
        "id": 1545,
        "name": "泰宁",
        "parent_id": 238,
        "post": 350429,
        "n": 10
    },
    {
        "id": 1546,
        "name": "建宁",
        "parent_id": 238,
        "post": 350430,
        "n": 11
    },
    {
        "id": 1547,
        "name": "永安",
        "parent_id": 238,
        "post": 350481,
        "n": 12
    },
    {
        "id": 1548,
        "name": "鲤城",
        "parent_id": 239,
        "post": 350502,
        "n": 1
    },
    {
        "id": 1549,
        "name": "丰泽",
        "parent_id": 239,
        "post": 350503,
        "n": 2
    },
    {
        "id": 1550,
        "name": "洛江",
        "parent_id": 239,
        "post": 350504,
        "n": 3
    },
    {
        "id": 1551,
        "name": "泉港",
        "parent_id": 239,
        "post": 350505,
        "n": 4
    },
    {
        "id": 1552,
        "name": "惠安",
        "parent_id": 239,
        "post": 350521,
        "n": 5
    },
    {
        "id": 1553,
        "name": "安溪",
        "parent_id": 239,
        "post": 350524,
        "n": 6
    },
    {
        "id": 1554,
        "name": "永春",
        "parent_id": 239,
        "post": 350525,
        "n": 7
    },
    {
        "id": 1555,
        "name": "德化",
        "parent_id": 239,
        "post": 350526,
        "n": 8
    },
    {
        "id": 1556,
        "name": "金门",
        "parent_id": 239,
        "post": 350527,
        "n": 9
    },
    {
        "id": 1557,
        "name": "石狮",
        "parent_id": 239,
        "post": 350581,
        "n": 10
    },
    {
        "id": 1558,
        "name": "晋江",
        "parent_id": 239,
        "post": 350582,
        "n": 11
    },
    {
        "id": 1559,
        "name": "南安",
        "parent_id": 239,
        "post": 350583,
        "n": 12
    },
    {
        "id": 1560,
        "name": "芗城",
        "parent_id": 240,
        "post": 350602,
        "n": 1
    },
    {
        "id": 1561,
        "name": "龙文",
        "parent_id": 240,
        "post": 350603,
        "n": 2
    },
    {
        "id": 1562,
        "name": "云霄",
        "parent_id": 240,
        "post": 350622,
        "n": 3
    },
    {
        "id": 1563,
        "name": "漳浦",
        "parent_id": 240,
        "post": 350623,
        "n": 4
    },
    {
        "id": 1564,
        "name": "诏安",
        "parent_id": 240,
        "post": 350624,
        "n": 5
    },
    {
        "id": 1565,
        "name": "长泰",
        "parent_id": 240,
        "post": 350625,
        "n": 6
    },
    {
        "id": 1566,
        "name": "东山",
        "parent_id": 240,
        "post": 350626,
        "n": 7
    },
    {
        "id": 1567,
        "name": "南靖",
        "parent_id": 240,
        "post": 350627,
        "n": 8
    },
    {
        "id": 1568,
        "name": "平和",
        "parent_id": 240,
        "post": 350628,
        "n": 9
    },
    {
        "id": 1569,
        "name": "华安",
        "parent_id": 240,
        "post": 350629,
        "n": 10
    },
    {
        "id": 1570,
        "name": "龙海",
        "parent_id": 240,
        "post": 350681,
        "n": 11
    },
    {
        "id": 1571,
        "name": "延平",
        "parent_id": 241,
        "post": 350702,
        "n": 1
    },
    {
        "id": 1572,
        "name": "顺昌",
        "parent_id": 241,
        "post": 350721,
        "n": 3
    },
    {
        "id": 1573,
        "name": "浦城",
        "parent_id": 241,
        "post": 350722,
        "n": 4
    },
    {
        "id": 1574,
        "name": "光泽",
        "parent_id": 241,
        "post": 350723,
        "n": 5
    },
    {
        "id": 1575,
        "name": "松溪",
        "parent_id": 241,
        "post": 350724,
        "n": 6
    },
    {
        "id": 1576,
        "name": "政和",
        "parent_id": 241,
        "post": 350725,
        "n": 7
    },
    {
        "id": 1577,
        "name": "邵武",
        "parent_id": 241,
        "post": 350781,
        "n": 8
    },
    {
        "id": 1578,
        "name": "武夷山",
        "parent_id": 241,
        "post": 350782,
        "n": 9
    },
    {
        "id": 1579,
        "name": "建瓯",
        "parent_id": 241,
        "post": 350783,
        "n": 10
    },
    {
        "id": 1580,
        "name": "建阳",
        "parent_id": 241,
        "post": 350703,
        "n": 2
    },
    {
        "id": 1581,
        "name": "新罗",
        "parent_id": 242,
        "post": 350802,
        "n": 1
    },
    {
        "id": 1582,
        "name": "长汀",
        "parent_id": 242,
        "post": 350821,
        "n": 3
    },
    {
        "id": 1583,
        "name": "永定",
        "parent_id": 242,
        "post": 350803,
        "n": 2
    },
    {
        "id": 1584,
        "name": "上杭",
        "parent_id": 242,
        "post": 350823,
        "n": 4
    },
    {
        "id": 1585,
        "name": "武平",
        "parent_id": 242,
        "post": 350824,
        "n": 5
    },
    {
        "id": 1586,
        "name": "连城",
        "parent_id": 242,
        "post": 350825,
        "n": 6
    },
    {
        "id": 1587,
        "name": "漳平",
        "parent_id": 242,
        "post": 350881,
        "n": 7
    },
    {
        "id": 1588,
        "name": "蕉城",
        "parent_id": 243,
        "post": 350902,
        "n": 1
    },
    {
        "id": 1589,
        "name": "霞浦",
        "parent_id": 243,
        "post": 350921,
        "n": 2
    },
    {
        "id": 1590,
        "name": "古田",
        "parent_id": 243,
        "post": 350922,
        "n": 3
    },
    {
        "id": 1591,
        "name": "屏南",
        "parent_id": 243,
        "post": 350923,
        "n": 4
    },
    {
        "id": 1592,
        "name": "寿宁",
        "parent_id": 243,
        "post": 350924,
        "n": 5
    },
    {
        "id": 1593,
        "name": "周宁",
        "parent_id": 243,
        "post": 350925,
        "n": 6
    },
    {
        "id": 1594,
        "name": "柘荣",
        "parent_id": 243,
        "post": 350926,
        "n": 7
    },
    {
        "id": 1595,
        "name": "福安",
        "parent_id": 243,
        "post": 350981,
        "n": 8
    },
    {
        "id": 1596,
        "name": "福鼎",
        "parent_id": 243,
        "post": 350982,
        "n": 9
    },
    {
        "id": 1597,
        "name": "东湖",
        "parent_id": 244,
        "post": 360102,
        "n": 1
    },
    {
        "id": 1598,
        "name": "西湖",
        "parent_id": 244,
        "post": 360103,
        "n": 2
    },
    {
        "id": 1599,
        "name": "青云谱",
        "parent_id": 244,
        "post": 360104,
        "n": 3
    },
    {
        "id": 1600,
        "name": "红谷滩",
        "parent_id": 244,
        "post": 360113,
        "n": 6
    },
    {
        "id": 1601,
        "name": "青山湖",
        "parent_id": 244,
        "post": 360111,
        "n": 4
    },
    {
        "id": 1602,
        "name": "南昌",
        "parent_id": 244,
        "post": 360121,
        "n": 7
    },
    {
        "id": 1603,
        "name": "新建",
        "parent_id": 244,
        "post": 360112,
        "n": 5
    },
    {
        "id": 1604,
        "name": "安义",
        "parent_id": 244,
        "post": 360123,
        "n": 8
    },
    {
        "id": 1605,
        "name": "进贤",
        "parent_id": 244,
        "post": 360124,
        "n": 9
    },
    {
        "id": 1606,
        "name": "昌江",
        "parent_id": 245,
        "post": 360202,
        "n": 1
    },
    {
        "id": 1607,
        "name": "珠山",
        "parent_id": 245,
        "post": 360203,
        "n": 2
    },
    {
        "id": 1608,
        "name": "浮梁",
        "parent_id": 245,
        "post": 360222,
        "n": 3
    },
    {
        "id": 1609,
        "name": "乐平",
        "parent_id": 245,
        "post": 360281,
        "n": 4
    },
    {
        "id": 1610,
        "name": "安源",
        "parent_id": 246,
        "post": 360302,
        "n": 1
    },
    {
        "id": 1611,
        "name": "湘东",
        "parent_id": 246,
        "post": 360313,
        "n": 2
    },
    {
        "id": 1612,
        "name": "莲花",
        "parent_id": 246,
        "post": 360321,
        "n": 3
    },
    {
        "id": 1613,
        "name": "上栗",
        "parent_id": 246,
        "post": 360322,
        "n": 4
    },
    {
        "id": 1614,
        "name": "芦溪",
        "parent_id": 246,
        "post": 360323,
        "n": 5
    },
    {
        "id": 1615,
        "name": "濂溪",
        "parent_id": 247,
        "post": 360402,
        "n": 1
    },
    {
        "id": 1616,
        "name": "浔阳",
        "parent_id": 247,
        "post": 360403,
        "n": 2
    },
    {
        "id": 1617,
        "name": "柴桑",
        "parent_id": 247,
        "post": 360404,
        "n": 3
    },
    {
        "id": 1618,
        "name": "武宁",
        "parent_id": 247,
        "post": 360423,
        "n": 4
    },
    {
        "id": 1619,
        "name": "修水",
        "parent_id": 247,
        "post": 360424,
        "n": 5
    },
    {
        "id": 1620,
        "name": "永修",
        "parent_id": 247,
        "post": 360425,
        "n": 6
    },
    {
        "id": 1621,
        "name": "德安",
        "parent_id": 247,
        "post": 360426,
        "n": 7
    },
    {
        "id": 1622,
        "name": "庐山",
        "parent_id": 247,
        "post": 360483,
        "n": 13
    },
    {
        "id": 1623,
        "name": "都昌",
        "parent_id": 247,
        "post": 360428,
        "n": 8
    },
    {
        "id": 1624,
        "name": "湖口",
        "parent_id": 247,
        "post": 360429,
        "n": 9
    },
    {
        "id": 1625,
        "name": "彭泽",
        "parent_id": 247,
        "post": 360430,
        "n": 10
    },
    {
        "id": 1626,
        "name": "瑞昌",
        "parent_id": 247,
        "post": 360481,
        "n": 11
    },
    {
        "id": 1627,
        "name": "共青城",
        "parent_id": 247,
        "post": 360482,
        "n": 12
    },
    {
        "id": 1628,
        "name": "渝水",
        "parent_id": 248,
        "post": 360502,
        "n": 1
    },
    {
        "id": 1629,
        "name": "分宜",
        "parent_id": 248,
        "post": 360521,
        "n": 2
    },
    {
        "id": 1630,
        "name": "月湖",
        "parent_id": 249,
        "post": 360602,
        "n": 1
    },
    {
        "id": 1631,
        "name": "余江",
        "parent_id": 249,
        "post": 360603,
        "n": 2
    },
    {
        "id": 1632,
        "name": "贵溪",
        "parent_id": 249,
        "post": 360681,
        "n": 3
    },
    {
        "id": 1633,
        "name": "章贡",
        "parent_id": 250,
        "post": 360702,
        "n": 1
    },
    {
        "id": 1634,
        "name": "赣县",
        "parent_id": 250,
        "post": 360704,
        "n": 2
    },
    {
        "id": 1635,
        "name": "信丰",
        "parent_id": 250,
        "post": 360722,
        "n": 3
    },
    {
        "id": 1636,
        "name": "大余",
        "parent_id": 250,
        "post": 360723,
        "n": 4
    },
    {
        "id": 1637,
        "name": "上犹",
        "parent_id": 250,
        "post": 360724,
        "n": 5
    },
    {
        "id": 1638,
        "name": "崇义",
        "parent_id": 250,
        "post": 360725,
        "n": 6
    },
    {
        "id": 1639,
        "name": "安远",
        "parent_id": 250,
        "post": 360726,
        "n": 7
    },
    {
        "id": 1640,
        "name": "龙南",
        "parent_id": 250,
        "post": 360727,
        "n": 8
    },
    {
        "id": 1641,
        "name": "定南",
        "parent_id": 250,
        "post": 360728,
        "n": 9
    },
    {
        "id": 1642,
        "name": "全南",
        "parent_id": 250,
        "post": 360729,
        "n": 10
    },
    {
        "id": 1643,
        "name": "宁都",
        "parent_id": 250,
        "post": 360730,
        "n": 11
    },
    {
        "id": 1644,
        "name": "于都",
        "parent_id": 250,
        "post": 360731,
        "n": 12
    },
    {
        "id": 1645,
        "name": "兴国",
        "parent_id": 250,
        "post": 360732,
        "n": 13
    },
    {
        "id": 1646,
        "name": "会昌",
        "parent_id": 250,
        "post": 360733,
        "n": 14
    },
    {
        "id": 1647,
        "name": "寻乌",
        "parent_id": 250,
        "post": 360734,
        "n": 15
    },
    {
        "id": 1648,
        "name": "石城",
        "parent_id": 250,
        "post": 360735,
        "n": 16
    },
    {
        "id": 1649,
        "name": "瑞金",
        "parent_id": 250,
        "post": 360781,
        "n": 17
    },
    {
        "id": 1650,
        "name": "南康",
        "parent_id": 250,
        "post": 360782,
        "n": 18
    },
    {
        "id": 1651,
        "name": "吉州",
        "parent_id": 251,
        "post": 360802,
        "n": 1
    },
    {
        "id": 1652,
        "name": "青原",
        "parent_id": 251,
        "post": 360803,
        "n": 2
    },
    {
        "id": 1653,
        "name": "吉安",
        "parent_id": 251,
        "post": 360821,
        "n": 3
    },
    {
        "id": 1654,
        "name": "吉水",
        "parent_id": 251,
        "post": 360822,
        "n": 4
    },
    {
        "id": 1655,
        "name": "峡江",
        "parent_id": 251,
        "post": 360823,
        "n": 5
    },
    {
        "id": 1656,
        "name": "新干",
        "parent_id": 251,
        "post": 360824,
        "n": 6
    },
    {
        "id": 1657,
        "name": "永丰",
        "parent_id": 251,
        "post": 360825,
        "n": 7
    },
    {
        "id": 1658,
        "name": "泰和",
        "parent_id": 251,
        "post": 360826,
        "n": 8
    },
    {
        "id": 1659,
        "name": "遂川",
        "parent_id": 251,
        "post": 360827,
        "n": 9
    },
    {
        "id": 1660,
        "name": "万安",
        "parent_id": 251,
        "post": 360828,
        "n": 10
    },
    {
        "id": 1661,
        "name": "安福",
        "parent_id": 251,
        "post": 360829,
        "n": 11
    },
    {
        "id": 1662,
        "name": "永新",
        "parent_id": 251,
        "post": 360830,
        "n": 12
    },
    {
        "id": 1663,
        "name": "井冈山",
        "parent_id": 251,
        "post": 360881,
        "n": 13
    },
    {
        "id": 1664,
        "name": "袁州",
        "parent_id": 252,
        "post": 360902,
        "n": 1
    },
    {
        "id": 1665,
        "name": "奉新",
        "parent_id": 252,
        "post": 360921,
        "n": 2
    },
    {
        "id": 1666,
        "name": "万载",
        "parent_id": 252,
        "post": 360922,
        "n": 3
    },
    {
        "id": 1667,
        "name": "上高",
        "parent_id": 252,
        "post": 360923,
        "n": 4
    },
    {
        "id": 1668,
        "name": "宜丰",
        "parent_id": 252,
        "post": 360924,
        "n": 5
    },
    {
        "id": 1669,
        "name": "靖安",
        "parent_id": 252,
        "post": 360925,
        "n": 6
    },
    {
        "id": 1670,
        "name": "铜鼓",
        "parent_id": 252,
        "post": 360926,
        "n": 7
    },
    {
        "id": 1671,
        "name": "丰城",
        "parent_id": 252,
        "post": 360981,
        "n": 8
    },
    {
        "id": 1672,
        "name": "樟树",
        "parent_id": 252,
        "post": 360982,
        "n": 9
    },
    {
        "id": 1673,
        "name": "高安",
        "parent_id": 252,
        "post": 360983,
        "n": 10
    },
    {
        "id": 1674,
        "name": "临川",
        "parent_id": 253,
        "post": 361002,
        "n": 1
    },
    {
        "id": 1675,
        "name": "南城",
        "parent_id": 253,
        "post": 361021,
        "n": 3
    },
    {
        "id": 1676,
        "name": "黎川",
        "parent_id": 253,
        "post": 361022,
        "n": 4
    },
    {
        "id": 1677,
        "name": "南丰",
        "parent_id": 253,
        "post": 361023,
        "n": 5
    },
    {
        "id": 1678,
        "name": "崇仁",
        "parent_id": 253,
        "post": 361024,
        "n": 6
    },
    {
        "id": 1679,
        "name": "乐安",
        "parent_id": 253,
        "post": 361025,
        "n": 7
    },
    {
        "id": 1680,
        "name": "宜黄",
        "parent_id": 253,
        "post": 361026,
        "n": 8
    },
    {
        "id": 1681,
        "name": "金溪",
        "parent_id": 253,
        "post": 361027,
        "n": 9
    },
    {
        "id": 1682,
        "name": "资溪",
        "parent_id": 253,
        "post": 361028,
        "n": 10
    },
    {
        "id": 1683,
        "name": "东乡",
        "parent_id": 253,
        "post": 361003,
        "n": 2
    },
    {
        "id": 1684,
        "name": "广昌",
        "parent_id": 253,
        "post": 361030,
        "n": 11
    },
    {
        "id": 1685,
        "name": "信州",
        "parent_id": 254,
        "post": 361102,
        "n": 1
    },
    {
        "id": 1686,
        "name": "广信",
        "parent_id": 254,
        "post": 361104,
        "n": 3
    },
    {
        "id": 1687,
        "name": "广丰",
        "parent_id": 254,
        "post": 361103,
        "n": 2
    },
    {
        "id": 1688,
        "name": "玉山",
        "parent_id": 254,
        "post": 361123,
        "n": 4
    },
    {
        "id": 1689,
        "name": "铅山",
        "parent_id": 254,
        "post": 361124,
        "n": 5
    },
    {
        "id": 1690,
        "name": "横峰",
        "parent_id": 254,
        "post": 361125,
        "n": 6
    },
    {
        "id": 1691,
        "name": "弋阳",
        "parent_id": 254,
        "post": 361126,
        "n": 7
    },
    {
        "id": 1692,
        "name": "余干",
        "parent_id": 254,
        "post": 361127,
        "n": 8
    },
    {
        "id": 1693,
        "name": "鄱阳",
        "parent_id": 254,
        "post": 361128,
        "n": 9
    },
    {
        "id": 1694,
        "name": "万年",
        "parent_id": 254,
        "post": 361129,
        "n": 10
    },
    {
        "id": 1695,
        "name": "婺源",
        "parent_id": 254,
        "post": 361130,
        "n": 11
    },
    {
        "id": 1696,
        "name": "德兴",
        "parent_id": 254,
        "post": 361181,
        "n": 12
    },
    {
        "id": 1697,
        "name": "历下",
        "parent_id": 255,
        "post": 370102,
        "n": 1
    },
    {
        "id": 1698,
        "name": "市中",
        "parent_id": 255,
        "post": 370103,
        "n": 2
    },
    {
        "id": 1699,
        "name": "槐荫",
        "parent_id": 255,
        "post": 370104,
        "n": 3
    },
    {
        "id": 1700,
        "name": "天桥",
        "parent_id": 255,
        "post": 370105,
        "n": 4
    },
    {
        "id": 1701,
        "name": "历城",
        "parent_id": 255,
        "post": 370112,
        "n": 5
    },
    {
        "id": 1702,
        "name": "长清",
        "parent_id": 255,
        "post": 370113,
        "n": 6
    },
    {
        "id": 1703,
        "name": "平阴",
        "parent_id": 255,
        "post": 370124,
        "n": 11
    },
    {
        "id": 1704,
        "name": "济阳",
        "parent_id": 255,
        "post": 370115,
        "n": 8
    },
    {
        "id": 1705,
        "name": "商河",
        "parent_id": 255,
        "post": 370126,
        "n": 12
    },
    {
        "id": 1706,
        "name": "章丘",
        "parent_id": 255,
        "post": 370114,
        "n": 7
    },
    {
        "id": 1707,
        "name": "市南",
        "parent_id": 256,
        "post": 370202,
        "n": 1
    },
    {
        "id": 1708,
        "name": "市北",
        "parent_id": 256,
        "post": 370203,
        "n": 2
    },
    {
        "id": 1709,
        "name": "黄岛",
        "parent_id": 256,
        "post": 370211,
        "n": 3
    },
    {
        "id": 1710,
        "name": "崂山",
        "parent_id": 256,
        "post": 370212,
        "n": 4
    },
    {
        "id": 1711,
        "name": "李沧",
        "parent_id": 256,
        "post": 370213,
        "n": 5
    },
    {
        "id": 1712,
        "name": "城阳",
        "parent_id": 256,
        "post": 370214,
        "n": 6
    },
    {
        "id": 1713,
        "name": "胶州",
        "parent_id": 256,
        "post": 370281,
        "n": 8
    },
    {
        "id": 1714,
        "name": "即墨",
        "parent_id": 256,
        "post": 370215,
        "n": 7
    },
    {
        "id": 1715,
        "name": "平度",
        "parent_id": 256,
        "post": 370283,
        "n": 9
    },
    {
        "id": 1716,
        "name": "莱西",
        "parent_id": 256,
        "post": 370285,
        "n": 10
    },
    {
        "id": 1717,
        "name": "淄川",
        "parent_id": 257,
        "post": 370302,
        "n": 1
    },
    {
        "id": 1718,
        "name": "张店",
        "parent_id": 257,
        "post": 370303,
        "n": 2
    },
    {
        "id": 1719,
        "name": "博山",
        "parent_id": 257,
        "post": 370304,
        "n": 3
    },
    {
        "id": 1720,
        "name": "临淄",
        "parent_id": 257,
        "post": 370305,
        "n": 4
    },
    {
        "id": 1721,
        "name": "周村",
        "parent_id": 257,
        "post": 370306,
        "n": 5
    },
    {
        "id": 1722,
        "name": "桓台",
        "parent_id": 257,
        "post": 370321,
        "n": 6
    },
    {
        "id": 1723,
        "name": "高青",
        "parent_id": 257,
        "post": 370322,
        "n": 7
    },
    {
        "id": 1724,
        "name": "沂源",
        "parent_id": 257,
        "post": 370323,
        "n": 8
    },
    {
        "id": 1725,
        "name": "市中",
        "parent_id": 258,
        "post": 370402,
        "n": 1
    },
    {
        "id": 1726,
        "name": "薛城",
        "parent_id": 258,
        "post": 370403,
        "n": 2
    },
    {
        "id": 1727,
        "name": "峄城",
        "parent_id": 258,
        "post": 370404,
        "n": 3
    },
    {
        "id": 1728,
        "name": "台儿庄",
        "parent_id": 258,
        "post": 370405,
        "n": 4
    },
    {
        "id": 1729,
        "name": "山亭",
        "parent_id": 258,
        "post": 370406,
        "n": 5
    },
    {
        "id": 1730,
        "name": "滕州",
        "parent_id": 258,
        "post": 370481,
        "n": 6
    },
    {
        "id": 1731,
        "name": "东营",
        "parent_id": 259,
        "post": 370502,
        "n": 1
    },
    {
        "id": 1732,
        "name": "河口",
        "parent_id": 259,
        "post": 370503,
        "n": 2
    },
    {
        "id": 1733,
        "name": "垦利",
        "parent_id": 259,
        "post": 370505,
        "n": 3
    },
    {
        "id": 1734,
        "name": "利津",
        "parent_id": 259,
        "post": 370522,
        "n": 4
    },
    {
        "id": 1735,
        "name": "广饶",
        "parent_id": 259,
        "post": 370523,
        "n": 5
    },
    {
        "id": 1736,
        "name": "芝罘",
        "parent_id": 260,
        "post": 370602,
        "n": 1
    },
    {
        "id": 1737,
        "name": "福山",
        "parent_id": 260,
        "post": 370611,
        "n": 2
    },
    {
        "id": 1738,
        "name": "牟平",
        "parent_id": 260,
        "post": 370612,
        "n": 3
    },
    {
        "id": 1739,
        "name": "莱山",
        "parent_id": 260,
        "post": 370613,
        "n": 4
    },
    {
        "id": 1740,
        "name": "长岛",
        "parent_id": 260,
        "post": 370634,
        "n": 5
    },
    {
        "id": 1741,
        "name": "龙口",
        "parent_id": 260,
        "post": 370681,
        "n": 6
    },
    {
        "id": 1742,
        "name": "莱阳",
        "parent_id": 260,
        "post": 370682,
        "n": 7
    },
    {
        "id": 1743,
        "name": "莱州",
        "parent_id": 260,
        "post": 370683,
        "n": 8
    },
    {
        "id": 1744,
        "name": "蓬莱",
        "parent_id": 260,
        "post": 370684,
        "n": 9
    },
    {
        "id": 1745,
        "name": "招远",
        "parent_id": 260,
        "post": 370685,
        "n": 10
    },
    {
        "id": 1746,
        "name": "栖霞",
        "parent_id": 260,
        "post": 370686,
        "n": 11
    },
    {
        "id": 1747,
        "name": "海阳",
        "parent_id": 260,
        "post": 370687,
        "n": 12
    },
    {
        "id": 1748,
        "name": "潍城",
        "parent_id": 261,
        "post": 370702,
        "n": 1
    },
    {
        "id": 1749,
        "name": "寒亭",
        "parent_id": 261,
        "post": 370703,
        "n": 2
    },
    {
        "id": 1750,
        "name": "坊子",
        "parent_id": 261,
        "post": 370704,
        "n": 3
    },
    {
        "id": 1751,
        "name": "奎文",
        "parent_id": 261,
        "post": 370705,
        "n": 4
    },
    {
        "id": 1752,
        "name": "临朐",
        "parent_id": 261,
        "post": 370724,
        "n": 5
    },
    {
        "id": 1753,
        "name": "昌乐",
        "parent_id": 261,
        "post": 370725,
        "n": 6
    },
    {
        "id": 1754,
        "name": "青州",
        "parent_id": 261,
        "post": 370781,
        "n": 7
    },
    {
        "id": 1755,
        "name": "诸城",
        "parent_id": 261,
        "post": 370782,
        "n": 8
    },
    {
        "id": 1756,
        "name": "寿光",
        "parent_id": 261,
        "post": 370783,
        "n": 9
    },
    {
        "id": 1757,
        "name": "安丘",
        "parent_id": 261,
        "post": 370784,
        "n": 10
    },
    {
        "id": 1758,
        "name": "高密",
        "parent_id": 261,
        "post": 370785,
        "n": 11
    },
    {
        "id": 1759,
        "name": "昌邑",
        "parent_id": 261,
        "post": 370786,
        "n": 12
    },
    {
        "id": 1761,
        "name": "任城",
        "parent_id": 262,
        "post": 370811,
        "n": 1
    },
    {
        "id": 1762,
        "name": "微山",
        "parent_id": 262,
        "post": 370826,
        "n": 3
    },
    {
        "id": 1763,
        "name": "鱼台",
        "parent_id": 262,
        "post": 370827,
        "n": 4
    },
    {
        "id": 1764,
        "name": "金乡",
        "parent_id": 262,
        "post": 370828,
        "n": 5
    },
    {
        "id": 1765,
        "name": "嘉祥",
        "parent_id": 262,
        "post": 370829,
        "n": 6
    },
    {
        "id": 1766,
        "name": "汶上",
        "parent_id": 262,
        "post": 370830,
        "n": 7
    },
    {
        "id": 1767,
        "name": "泗水",
        "parent_id": 262,
        "post": 370831,
        "n": 8
    },
    {
        "id": 1768,
        "name": "梁山",
        "parent_id": 262,
        "post": 370832,
        "n": 9
    },
    {
        "id": 1769,
        "name": "曲阜",
        "parent_id": 262,
        "post": 370881,
        "n": 10
    },
    {
        "id": 1770,
        "name": "兖州",
        "parent_id": 262,
        "post": 370812,
        "n": 2
    },
    {
        "id": 1771,
        "name": "邹城",
        "parent_id": 262,
        "post": 370883,
        "n": 11
    },
    {
        "id": 1772,
        "name": "泰山",
        "parent_id": 263,
        "post": 370902,
        "n": 1
    },
    {
        "id": 1773,
        "name": "岱岳",
        "parent_id": 263,
        "post": 370911,
        "n": 2
    },
    {
        "id": 1774,
        "name": "宁阳",
        "parent_id": 263,
        "post": 370921,
        "n": 3
    },
    {
        "id": 1775,
        "name": "东平",
        "parent_id": 263,
        "post": 370923,
        "n": 4
    },
    {
        "id": 1776,
        "name": "新泰",
        "parent_id": 263,
        "post": 370982,
        "n": 5
    },
    {
        "id": 1777,
        "name": "肥城",
        "parent_id": 263,
        "post": 370983,
        "n": 6
    },
    {
        "id": 1778,
        "name": "环翠",
        "parent_id": 264,
        "post": 371002,
        "n": 1
    },
    {
        "id": 1779,
        "name": "文登",
        "parent_id": 264,
        "post": 371003,
        "n": 2
    },
    {
        "id": 1780,
        "name": "荣成",
        "parent_id": 264,
        "post": 371082,
        "n": 3
    },
    {
        "id": 1781,
        "name": "乳山",
        "parent_id": 264,
        "post": 371083,
        "n": 4
    },
    {
        "id": 1782,
        "name": "东港",
        "parent_id": 265,
        "post": 371102,
        "n": 1
    },
    {
        "id": 1783,
        "name": "岚山",
        "parent_id": 265,
        "post": 371103,
        "n": 2
    },
    {
        "id": 1784,
        "name": "五莲",
        "parent_id": 265,
        "post": 371121,
        "n": 3
    },
    {
        "id": 1785,
        "name": "莒县",
        "parent_id": 265,
        "post": 371122,
        "n": 4
    },
    {
        "id": 1786,
        "name": "莱芜",
        "parent_id": 255,
        "post": 370116,
        "n": 9
    },
    {
        "id": 1787,
        "name": "钢城",
        "parent_id": 255,
        "post": 370117,
        "n": 10
    },
    {
        "id": 1788,
        "name": "兰山",
        "parent_id": 267,
        "post": 371302,
        "n": 1
    },
    {
        "id": 1789,
        "name": "罗庄",
        "parent_id": 267,
        "post": 371311,
        "n": 2
    },
    {
        "id": 1790,
        "name": "河东",
        "parent_id": 267,
        "post": 371312,
        "n": 3
    },
    {
        "id": 1791,
        "name": "沂南",
        "parent_id": 267,
        "post": 371321,
        "n": 4
    },
    {
        "id": 1792,
        "name": "郯城",
        "parent_id": 267,
        "post": 371322,
        "n": 5
    },
    {
        "id": 1793,
        "name": "沂水",
        "parent_id": 267,
        "post": 371323,
        "n": 6
    },
    {
        "id": 1794,
        "name": "兰陵",
        "parent_id": 267,
        "post": 371324,
        "n": 7
    },
    {
        "id": 1795,
        "name": "费县",
        "parent_id": 267,
        "post": 371325,
        "n": 8
    },
    {
        "id": 1796,
        "name": "平邑",
        "parent_id": 267,
        "post": 371326,
        "n": 9
    },
    {
        "id": 1797,
        "name": "莒南",
        "parent_id": 267,
        "post": 371327,
        "n": 10
    },
    {
        "id": 1798,
        "name": "蒙阴",
        "parent_id": 267,
        "post": 371328,
        "n": 11
    },
    {
        "id": 1799,
        "name": "临沭",
        "parent_id": 267,
        "post": 371329,
        "n": 12
    },
    {
        "id": 1800,
        "name": "德城",
        "parent_id": 268,
        "post": 371402,
        "n": 1
    },
    {
        "id": 1801,
        "name": "陵城",
        "parent_id": 268,
        "post": 371403,
        "n": 2
    },
    {
        "id": 1802,
        "name": "宁津",
        "parent_id": 268,
        "post": 371422,
        "n": 3
    },
    {
        "id": 1803,
        "name": "庆云",
        "parent_id": 268,
        "post": 371423,
        "n": 4
    },
    {
        "id": 1804,
        "name": "临邑",
        "parent_id": 268,
        "post": 371424,
        "n": 5
    },
    {
        "id": 1805,
        "name": "齐河",
        "parent_id": 268,
        "post": 371425,
        "n": 6
    },
    {
        "id": 1806,
        "name": "平原",
        "parent_id": 268,
        "post": 371426,
        "n": 7
    },
    {
        "id": 1807,
        "name": "夏津",
        "parent_id": 268,
        "post": 371427,
        "n": 8
    },
    {
        "id": 1808,
        "name": "武城",
        "parent_id": 268,
        "post": 371428,
        "n": 9
    },
    {
        "id": 1809,
        "name": "乐陵",
        "parent_id": 268,
        "post": 371481,
        "n": 10
    },
    {
        "id": 1810,
        "name": "禹城",
        "parent_id": 268,
        "post": 371482,
        "n": 11
    },
    {
        "id": 1811,
        "name": "东昌府",
        "parent_id": 269,
        "post": 371502,
        "n": 1
    },
    {
        "id": 1812,
        "name": "阳谷",
        "parent_id": 269,
        "post": 371521,
        "n": 3
    },
    {
        "id": 1813,
        "name": "莘县",
        "parent_id": 269,
        "post": 371522,
        "n": 4
    },
    {
        "id": 1814,
        "name": "茌平",
        "parent_id": 269,
        "post": 371503,
        "n": 2
    },
    {
        "id": 1815,
        "name": "东阿",
        "parent_id": 269,
        "post": 371524,
        "n": 5
    },
    {
        "id": 1816,
        "name": "冠县",
        "parent_id": 269,
        "post": 371525,
        "n": 6
    },
    {
        "id": 1817,
        "name": "高唐",
        "parent_id": 269,
        "post": 371526,
        "n": 7
    },
    {
        "id": 1818,
        "name": "临清",
        "parent_id": 269,
        "post": 371581,
        "n": 8
    },
    {
        "id": 1819,
        "name": "滨城",
        "parent_id": 270,
        "post": 371602,
        "n": 1
    },
    {
        "id": 1820,
        "name": "惠民",
        "parent_id": 270,
        "post": 371621,
        "n": 2
    },
    {
        "id": 1821,
        "name": "阳信",
        "parent_id": 270,
        "post": 371622,
        "n": 3
    },
    {
        "id": 1822,
        "name": "无棣",
        "parent_id": 270,
        "post": 371623,
        "n": 4
    },
    {
        "id": 1823,
        "name": "沾化",
        "parent_id": 270,
        "post": 371624,
        "n": 5
    },
    {
        "id": 1824,
        "name": "博兴",
        "parent_id": 270,
        "post": 371625,
        "n": 6
    },
    {
        "id": 1825,
        "name": "邹平",
        "parent_id": 270,
        "post": 371626,
        "n": 7
    },
    {
        "id": 1826,
        "name": "牡丹",
        "parent_id": 271,
        "post": 371702,
        "n": 1
    },
    {
        "id": 1827,
        "name": "曹县",
        "parent_id": 271,
        "post": 371721,
        "n": 3
    },
    {
        "id": 1828,
        "name": "单县",
        "parent_id": 271,
        "post": 371722,
        "n": 4
    },
    {
        "id": 1829,
        "name": "成武",
        "parent_id": 271,
        "post": 371723,
        "n": 5
    },
    {
        "id": 1830,
        "name": "巨野",
        "parent_id": 271,
        "post": 371724,
        "n": 6
    },
    {
        "id": 1831,
        "name": "郓城",
        "parent_id": 271,
        "post": 371725,
        "n": 7
    },
    {
        "id": 1832,
        "name": "鄄城",
        "parent_id": 271,
        "post": 371726,
        "n": 8
    },
    {
        "id": 1833,
        "name": "定陶",
        "parent_id": 271,
        "post": 371703,
        "n": 2
    },
    {
        "id": 1834,
        "name": "东明",
        "parent_id": 271,
        "post": 371728,
        "n": 9
    },
    {
        "id": 1835,
        "name": "中原",
        "parent_id": 272,
        "post": 410102,
        "n": 1
    },
    {
        "id": 1836,
        "name": "二七",
        "parent_id": 272,
        "post": 410103,
        "n": 2
    },
    {
        "id": 1837,
        "name": "管城",
        "parent_id": 272,
        "post": 410104,
        "n": 3
    },
    {
        "id": 1838,
        "name": "金水",
        "parent_id": 272,
        "post": 410105,
        "n": 4
    },
    {
        "id": 1839,
        "name": "上街",
        "parent_id": 272,
        "post": 410106,
        "n": 5
    },
    {
        "id": 1840,
        "name": "惠济",
        "parent_id": 272,
        "post": 410108,
        "n": 6
    },
    {
        "id": 1841,
        "name": "中牟",
        "parent_id": 272,
        "post": 410122,
        "n": 7
    },
    {
        "id": 1842,
        "name": "巩义",
        "parent_id": 272,
        "post": 410181,
        "n": 8
    },
    {
        "id": 1843,
        "name": "荥阳",
        "parent_id": 272,
        "post": 410182,
        "n": 9
    },
    {
        "id": 1844,
        "name": "新密",
        "parent_id": 272,
        "post": 410183,
        "n": 10
    },
    {
        "id": 1845,
        "name": "新郑",
        "parent_id": 272,
        "post": 410184,
        "n": 11
    },
    {
        "id": 1846,
        "name": "登封",
        "parent_id": 272,
        "post": 410185,
        "n": 12
    },
    {
        "id": 1847,
        "name": "龙亭",
        "parent_id": 273,
        "post": 410202,
        "n": 1
    },
    {
        "id": 1848,
        "name": "顺河",
        "parent_id": 273,
        "post": 410203,
        "n": 2
    },
    {
        "id": 1849,
        "name": "鼓楼",
        "parent_id": 273,
        "post": 410204,
        "n": 3
    },
    {
        "id": 1850,
        "name": "禹王台",
        "parent_id": 273,
        "post": 410205,
        "n": 4
    },
    {
        "id": 1852,
        "name": "杞县",
        "parent_id": 273,
        "post": 410221,
        "n": 6
    },
    {
        "id": 1853,
        "name": "通许",
        "parent_id": 273,
        "post": 410222,
        "n": 7
    },
    {
        "id": 1854,
        "name": "尉氏",
        "parent_id": 273,
        "post": 410223,
        "n": 8
    },
    {
        "id": 1855,
        "name": "祥符",
        "parent_id": 273,
        "post": 410212,
        "n": 5
    },
    {
        "id": 1856,
        "name": "兰考",
        "parent_id": 273,
        "post": 410225,
        "n": 9
    },
    {
        "id": 1857,
        "name": "老城",
        "parent_id": 274,
        "post": 410302,
        "n": 1
    },
    {
        "id": 1858,
        "name": "西工",
        "parent_id": 274,
        "post": 410303,
        "n": 2
    },
    {
        "id": 1859,
        "name": "瀍河",
        "parent_id": 274,
        "post": 410304,
        "n": 3
    },
    {
        "id": 1860,
        "name": "涧西",
        "parent_id": 274,
        "post": 410305,
        "n": 4
    },
    {
        "id": 1861,
        "name": "吉利",
        "parent_id": 274,
        "post": 410306,
        "n": 5
    },
    {
        "id": 1862,
        "name": "洛龙",
        "parent_id": 274,
        "post": 410311,
        "n": 6
    },
    {
        "id": 1863,
        "name": "孟津",
        "parent_id": 274,
        "post": 410322,
        "n": 7
    },
    {
        "id": 1864,
        "name": "新安",
        "parent_id": 274,
        "post": 410323,
        "n": 8
    },
    {
        "id": 1865,
        "name": "栾川",
        "parent_id": 274,
        "post": 410324,
        "n": 9
    },
    {
        "id": 1866,
        "name": "嵩县",
        "parent_id": 274,
        "post": 410325,
        "n": 10
    },
    {
        "id": 1867,
        "name": "汝阳",
        "parent_id": 274,
        "post": 410326,
        "n": 11
    },
    {
        "id": 1868,
        "name": "宜阳",
        "parent_id": 274,
        "post": 410327,
        "n": 12
    },
    {
        "id": 1869,
        "name": "洛宁",
        "parent_id": 274,
        "post": 410328,
        "n": 13
    },
    {
        "id": 1870,
        "name": "伊川",
        "parent_id": 274,
        "post": 410329,
        "n": 14
    },
    {
        "id": 1871,
        "name": "偃师",
        "parent_id": 274,
        "post": 410381,
        "n": 15
    },
    {
        "id": 1872,
        "name": "新华",
        "parent_id": 275,
        "post": 410402,
        "n": 1
    },
    {
        "id": 1873,
        "name": "卫东",
        "parent_id": 275,
        "post": 410403,
        "n": 2
    },
    {
        "id": 1874,
        "name": "石龙",
        "parent_id": 275,
        "post": 410404,
        "n": 3
    },
    {
        "id": 1875,
        "name": "湛河",
        "parent_id": 275,
        "post": 410411,
        "n": 4
    },
    {
        "id": 1876,
        "name": "宝丰",
        "parent_id": 275,
        "post": 410421,
        "n": 5
    },
    {
        "id": 1877,
        "name": "叶县",
        "parent_id": 275,
        "post": 410422,
        "n": 6
    },
    {
        "id": 1878,
        "name": "鲁山",
        "parent_id": 275,
        "post": 410423,
        "n": 7
    },
    {
        "id": 1879,
        "name": "郏县",
        "parent_id": 275,
        "post": 410425,
        "n": 8
    },
    {
        "id": 1880,
        "name": "舞钢",
        "parent_id": 275,
        "post": 410481,
        "n": 9
    },
    {
        "id": 1881,
        "name": "汝州",
        "parent_id": 275,
        "post": 410482,
        "n": 10
    },
    {
        "id": 1882,
        "name": "文峰",
        "parent_id": 276,
        "post": 410502,
        "n": 1
    },
    {
        "id": 1883,
        "name": "北关",
        "parent_id": 276,
        "post": 410503,
        "n": 2
    },
    {
        "id": 1884,
        "name": "殷都",
        "parent_id": 276,
        "post": 410505,
        "n": 3
    },
    {
        "id": 1885,
        "name": "龙安",
        "parent_id": 276,
        "post": 410506,
        "n": 4
    },
    {
        "id": 1886,
        "name": "安阳",
        "parent_id": 276,
        "post": 410522,
        "n": 5
    },
    {
        "id": 1887,
        "name": "汤阴",
        "parent_id": 276,
        "post": 410523,
        "n": 6
    },
    {
        "id": 1888,
        "name": "滑县",
        "parent_id": 276,
        "post": 410526,
        "n": 7
    },
    {
        "id": 1889,
        "name": "内黄",
        "parent_id": 276,
        "post": 410527,
        "n": 8
    },
    {
        "id": 1890,
        "name": "林州",
        "parent_id": 276,
        "post": 410581,
        "n": 9
    },
    {
        "id": 1891,
        "name": "鹤山",
        "parent_id": 277,
        "post": 410602,
        "n": 1
    },
    {
        "id": 1892,
        "name": "山城",
        "parent_id": 277,
        "post": 410603,
        "n": 2
    },
    {
        "id": 1893,
        "name": "淇滨",
        "parent_id": 277,
        "post": 410611,
        "n": 3
    },
    {
        "id": 1894,
        "name": "浚县",
        "parent_id": 277,
        "post": 410621,
        "n": 4
    },
    {
        "id": 1895,
        "name": "淇县",
        "parent_id": 277,
        "post": 410622,
        "n": 5
    },
    {
        "id": 1896,
        "name": "红旗",
        "parent_id": 278,
        "post": 410702,
        "n": 1
    },
    {
        "id": 1897,
        "name": "卫滨",
        "parent_id": 278,
        "post": 410703,
        "n": 2
    },
    {
        "id": 1898,
        "name": "凤泉",
        "parent_id": 278,
        "post": 410704,
        "n": 3
    },
    {
        "id": 1899,
        "name": "牧野",
        "parent_id": 278,
        "post": 410711,
        "n": 4
    },
    {
        "id": 1900,
        "name": "新乡",
        "parent_id": 278,
        "post": 410721,
        "n": 5
    },
    {
        "id": 1901,
        "name": "获嘉",
        "parent_id": 278,
        "post": 410724,
        "n": 6
    },
    {
        "id": 1902,
        "name": "原阳",
        "parent_id": 278,
        "post": 410725,
        "n": 7
    },
    {
        "id": 1903,
        "name": "延津",
        "parent_id": 278,
        "post": 410726,
        "n": 8
    },
    {
        "id": 1904,
        "name": "封丘",
        "parent_id": 278,
        "post": 410727,
        "n": 9
    },
    {
        "id": 1905,
        "name": "长垣",
        "parent_id": 278,
        "post": 410783,
        "n": 12
    },
    {
        "id": 1906,
        "name": "卫辉",
        "parent_id": 278,
        "post": 410781,
        "n": 10
    },
    {
        "id": 1907,
        "name": "辉县",
        "parent_id": 278,
        "post": 410782,
        "n": 11
    },
    {
        "id": 1908,
        "name": "解放",
        "parent_id": 279,
        "post": 410802,
        "n": 1
    },
    {
        "id": 1909,
        "name": "中站",
        "parent_id": 279,
        "post": 410803,
        "n": 2
    },
    {
        "id": 1910,
        "name": "马村",
        "parent_id": 279,
        "post": 410804,
        "n": 3
    },
    {
        "id": 1911,
        "name": "山阳",
        "parent_id": 279,
        "post": 410811,
        "n": 4
    },
    {
        "id": 1912,
        "name": "修武",
        "parent_id": 279,
        "post": 410821,
        "n": 5
    },
    {
        "id": 1913,
        "name": "博爱",
        "parent_id": 279,
        "post": 410822,
        "n": 6
    },
    {
        "id": 1914,
        "name": "武陟",
        "parent_id": 279,
        "post": 410823,
        "n": 7
    },
    {
        "id": 1915,
        "name": "温县",
        "parent_id": 279,
        "post": 410825,
        "n": 8
    },
    {
        "id": 1916,
        "name": "沁阳",
        "parent_id": 279,
        "post": 410882,
        "n": 9
    },
    {
        "id": 1917,
        "name": "孟州",
        "parent_id": 279,
        "post": 410883,
        "n": 10
    },
    {
        "id": 1918,
        "name": "华龙",
        "parent_id": 280,
        "post": 410902,
        "n": 1
    },
    {
        "id": 1919,
        "name": "清丰",
        "parent_id": 280,
        "post": 410922,
        "n": 2
    },
    {
        "id": 1920,
        "name": "南乐",
        "parent_id": 280,
        "post": 410923,
        "n": 3
    },
    {
        "id": 1921,
        "name": "范县",
        "parent_id": 280,
        "post": 410926,
        "n": 4
    },
    {
        "id": 1922,
        "name": "台前",
        "parent_id": 280,
        "post": 410927,
        "n": 5
    },
    {
        "id": 1923,
        "name": "濮阳",
        "parent_id": 280,
        "post": 410928,
        "n": 6
    },
    {
        "id": 1924,
        "name": "魏都",
        "parent_id": 281,
        "post": 411002,
        "n": 1
    },
    {
        "id": 1925,
        "name": "建安",
        "parent_id": 281,
        "post": 411003,
        "n": 2
    },
    {
        "id": 1926,
        "name": "鄢陵",
        "parent_id": 281,
        "post": 411024,
        "n": 3
    },
    {
        "id": 1927,
        "name": "襄城",
        "parent_id": 281,
        "post": 411025,
        "n": 4
    },
    {
        "id": 1928,
        "name": "禹州",
        "parent_id": 281,
        "post": 411081,
        "n": 5
    },
    {
        "id": 1929,
        "name": "长葛",
        "parent_id": 281,
        "post": 411082,
        "n": 6
    },
    {
        "id": 1930,
        "name": "源汇",
        "parent_id": 282,
        "post": 411102,
        "n": 1
    },
    {
        "id": 1931,
        "name": "郾城",
        "parent_id": 282,
        "post": 411103,
        "n": 2
    },
    {
        "id": 1932,
        "name": "召陵",
        "parent_id": 282,
        "post": 411104,
        "n": 3
    },
    {
        "id": 1933,
        "name": "舞阳",
        "parent_id": 282,
        "post": 411121,
        "n": 4
    },
    {
        "id": 1934,
        "name": "临颍",
        "parent_id": 282,
        "post": 411122,
        "n": 5
    },
    {
        "id": 1935,
        "name": "湖滨",
        "parent_id": 283,
        "post": 411202,
        "n": 1
    },
    {
        "id": 1936,
        "name": "渑池",
        "parent_id": 283,
        "post": 411221,
        "n": 3
    },
    {
        "id": 1937,
        "name": "陕州",
        "parent_id": 283,
        "post": 411222,
        "n": 2
    },
    {
        "id": 1938,
        "name": "卢氏",
        "parent_id": 283,
        "post": 411224,
        "n": 4
    },
    {
        "id": 1939,
        "name": "义马",
        "parent_id": 283,
        "post": 411281,
        "n": 5
    },
    {
        "id": 1940,
        "name": "灵宝",
        "parent_id": 283,
        "post": 411282,
        "n": 6
    },
    {
        "id": 1941,
        "name": "宛城",
        "parent_id": 284,
        "post": 411302,
        "n": 1
    },
    {
        "id": 1942,
        "name": "卧龙",
        "parent_id": 284,
        "post": 411303,
        "n": 2
    },
    {
        "id": 1943,
        "name": "南召",
        "parent_id": 284,
        "post": 411321,
        "n": 3
    },
    {
        "id": 1944,
        "name": "方城",
        "parent_id": 284,
        "post": 411322,
        "n": 4
    },
    {
        "id": 1945,
        "name": "西峡",
        "parent_id": 284,
        "post": 411323,
        "n": 5
    },
    {
        "id": 1946,
        "name": "镇平",
        "parent_id": 284,
        "post": 411324,
        "n": 6
    },
    {
        "id": 1947,
        "name": "内乡",
        "parent_id": 284,
        "post": 411325,
        "n": 7
    },
    {
        "id": 1948,
        "name": "淅川",
        "parent_id": 284,
        "post": 411326,
        "n": 8
    },
    {
        "id": 1949,
        "name": "社旗",
        "parent_id": 284,
        "post": 411327,
        "n": 9
    },
    {
        "id": 1950,
        "name": "唐河",
        "parent_id": 284,
        "post": 411328,
        "n": 10
    },
    {
        "id": 1951,
        "name": "新野",
        "parent_id": 284,
        "post": 411329,
        "n": 11
    },
    {
        "id": 1952,
        "name": "桐柏",
        "parent_id": 284,
        "post": 411330,
        "n": 12
    },
    {
        "id": 1953,
        "name": "邓州",
        "parent_id": 284,
        "post": 411381,
        "n": 13
    },
    {
        "id": 1954,
        "name": "粱园",
        "parent_id": 285,
        "post": 411402,
        "n": 1
    },
    {
        "id": 1955,
        "name": "睢阳",
        "parent_id": 285,
        "post": 411403,
        "n": 2
    },
    {
        "id": 1956,
        "name": "民权",
        "parent_id": 285,
        "post": 411421,
        "n": 3
    },
    {
        "id": 1957,
        "name": "睢县",
        "parent_id": 285,
        "post": 411422,
        "n": 4
    },
    {
        "id": 1958,
        "name": "宁陵",
        "parent_id": 285,
        "post": 411423,
        "n": 5
    },
    {
        "id": 1959,
        "name": "柘城",
        "parent_id": 285,
        "post": 411424,
        "n": 6
    },
    {
        "id": 1960,
        "name": "虞城",
        "parent_id": 285,
        "post": 411425,
        "n": 7
    },
    {
        "id": 1961,
        "name": "夏邑",
        "parent_id": 285,
        "post": 411426,
        "n": 8
    },
    {
        "id": 1962,
        "name": "永城",
        "parent_id": 285,
        "post": 411481,
        "n": 9
    },
    {
        "id": 1963,
        "name": "浉河",
        "parent_id": 286,
        "post": 411502,
        "n": 1
    },
    {
        "id": 1964,
        "name": "平桥",
        "parent_id": 286,
        "post": 411503,
        "n": 2
    },
    {
        "id": 1965,
        "name": "罗山",
        "parent_id": 286,
        "post": 411521,
        "n": 3
    },
    {
        "id": 1966,
        "name": "光山",
        "parent_id": 286,
        "post": 411522,
        "n": 4
    },
    {
        "id": 1967,
        "name": "新县",
        "parent_id": 286,
        "post": 411523,
        "n": 5
    },
    {
        "id": 1968,
        "name": "商城",
        "parent_id": 286,
        "post": 411524,
        "n": 6
    },
    {
        "id": 1969,
        "name": "固始",
        "parent_id": 286,
        "post": 411525,
        "n": 7
    },
    {
        "id": 1970,
        "name": "潢川",
        "parent_id": 286,
        "post": 411526,
        "n": 8
    },
    {
        "id": 1971,
        "name": "淮滨",
        "parent_id": 286,
        "post": 411527,
        "n": 9
    },
    {
        "id": 1972,
        "name": "息县",
        "parent_id": 286,
        "post": 411528,
        "n": 10
    },
    {
        "id": 1973,
        "name": "川汇",
        "parent_id": 287,
        "post": 411602,
        "n": 1
    },
    {
        "id": 1974,
        "name": "扶沟",
        "parent_id": 287,
        "post": 411621,
        "n": 3
    },
    {
        "id": 1975,
        "name": "西华",
        "parent_id": 287,
        "post": 411622,
        "n": 4
    },
    {
        "id": 1976,
        "name": "商水",
        "parent_id": 287,
        "post": 411623,
        "n": 5
    },
    {
        "id": 1977,
        "name": "沈丘",
        "parent_id": 287,
        "post": 411624,
        "n": 6
    },
    {
        "id": 1978,
        "name": "郸城",
        "parent_id": 287,
        "post": 411625,
        "n": 7
    },
    {
        "id": 1979,
        "name": "淮阳",
        "parent_id": 287,
        "post": 411603,
        "n": 2
    },
    {
        "id": 1980,
        "name": "太康",
        "parent_id": 287,
        "post": 411627,
        "n": 8
    },
    {
        "id": 1981,
        "name": "鹿邑",
        "parent_id": 287,
        "post": 411628,
        "n": 9
    },
    {
        "id": 1982,
        "name": "项城",
        "parent_id": 287,
        "post": 411681,
        "n": 10
    },
    {
        "id": 1983,
        "name": "驿城",
        "parent_id": 288,
        "post": 411702,
        "n": 1
    },
    {
        "id": 1984,
        "name": "西平",
        "parent_id": 288,
        "post": 411721,
        "n": 2
    },
    {
        "id": 1985,
        "name": "上蔡",
        "parent_id": 288,
        "post": 411722,
        "n": 3
    },
    {
        "id": 1986,
        "name": "平舆",
        "parent_id": 288,
        "post": 411723,
        "n": 4
    },
    {
        "id": 1987,
        "name": "正阳",
        "parent_id": 288,
        "post": 411724,
        "n": 5
    },
    {
        "id": 1988,
        "name": "确山",
        "parent_id": 288,
        "post": 411725,
        "n": 6
    },
    {
        "id": 1989,
        "name": "泌阳",
        "parent_id": 288,
        "post": 411726,
        "n": 7
    },
    {
        "id": 1990,
        "name": "汝南",
        "parent_id": 288,
        "post": 411727,
        "n": 8
    },
    {
        "id": 1991,
        "name": "遂平",
        "parent_id": 288,
        "post": 411728,
        "n": 9
    },
    {
        "id": 1992,
        "name": "新蔡",
        "parent_id": 288,
        "post": 411729,
        "n": 10
    },
    {
        "id": 1993,
        "name": "江岸",
        "parent_id": 290,
        "post": 420102,
        "n": 1
    },
    {
        "id": 1994,
        "name": "江汉",
        "parent_id": 290,
        "post": 420103,
        "n": 2
    },
    {
        "id": 1995,
        "name": "硚口",
        "parent_id": 290,
        "post": 420104,
        "n": 3
    },
    {
        "id": 1996,
        "name": "汉阳",
        "parent_id": 290,
        "post": 420105,
        "n": 4
    },
    {
        "id": 1997,
        "name": "武昌",
        "parent_id": 290,
        "post": 420106,
        "n": 5
    },
    {
        "id": 1998,
        "name": "青山",
        "parent_id": 290,
        "post": 420107,
        "n": 6
    },
    {
        "id": 1999,
        "name": "洪山",
        "parent_id": 290,
        "post": 420111,
        "n": 7
    },
    {
        "id": 2000,
        "name": "东西湖",
        "parent_id": 290,
        "post": 420112,
        "n": 8
    },
    {
        "id": 2001,
        "name": "汉南",
        "parent_id": 290,
        "post": 420113,
        "n": 9
    },
    {
        "id": 2002,
        "name": "蔡甸",
        "parent_id": 290,
        "post": 420114,
        "n": 10
    },
    {
        "id": 2003,
        "name": "江夏",
        "parent_id": 290,
        "post": 420115,
        "n": 11
    },
    {
        "id": 2004,
        "name": "黄陂",
        "parent_id": 290,
        "post": 420116,
        "n": 12
    },
    {
        "id": 2005,
        "name": "新洲",
        "parent_id": 290,
        "post": 420117,
        "n": 13
    },
    {
        "id": 2006,
        "name": "黄石港",
        "parent_id": 291,
        "post": 420202,
        "n": 1
    },
    {
        "id": 2007,
        "name": "西塞山",
        "parent_id": 291,
        "post": 420203,
        "n": 2
    },
    {
        "id": 2008,
        "name": "下陆",
        "parent_id": 291,
        "post": 420204,
        "n": 3
    },
    {
        "id": 2009,
        "name": "铁山",
        "parent_id": 291,
        "post": 420205,
        "n": 4
    },
    {
        "id": 2010,
        "name": "阳新",
        "parent_id": 291,
        "post": 420222,
        "n": 5
    },
    {
        "id": 2011,
        "name": "大冶",
        "parent_id": 291,
        "post": 420281,
        "n": 6
    },
    {
        "id": 2012,
        "name": "茅箭",
        "parent_id": 292,
        "post": 420302,
        "n": 1
    },
    {
        "id": 2013,
        "name": "张湾",
        "parent_id": 292,
        "post": 420303,
        "n": 2
    },
    {
        "id": 2014,
        "name": "郧阳",
        "parent_id": 292,
        "post": 420304,
        "n": 3
    },
    {
        "id": 2015,
        "name": "郧西",
        "parent_id": 292,
        "post": 420322,
        "n": 4
    },
    {
        "id": 2016,
        "name": "竹山",
        "parent_id": 292,
        "post": 420323,
        "n": 5
    },
    {
        "id": 2017,
        "name": "竹溪",
        "parent_id": 292,
        "post": 420324,
        "n": 6
    },
    {
        "id": 2018,
        "name": "房县",
        "parent_id": 292,
        "post": 420325,
        "n": 7
    },
    {
        "id": 2019,
        "name": "丹江口",
        "parent_id": 292,
        "post": 420381,
        "n": 8
    },
    {
        "id": 2020,
        "name": "西陵",
        "parent_id": 293,
        "post": 420502,
        "n": 1
    },
    {
        "id": 2021,
        "name": "伍家岗",
        "parent_id": 293,
        "post": 420503,
        "n": 2
    },
    {
        "id": 2022,
        "name": "点军",
        "parent_id": 293,
        "post": 420504,
        "n": 3
    },
    {
        "id": 2023,
        "name": "虢亭",
        "parent_id": 293,
        "post": 420505,
        "n": 4
    },
    {
        "id": 2024,
        "name": "夷陵",
        "parent_id": 293,
        "post": 420506,
        "n": 5
    },
    {
        "id": 2025,
        "name": "远安",
        "parent_id": 293,
        "post": 420525,
        "n": 6
    },
    {
        "id": 2026,
        "name": "兴山",
        "parent_id": 293,
        "post": 420526,
        "n": 7
    },
    {
        "id": 2027,
        "name": "秭归",
        "parent_id": 293,
        "post": 420527,
        "n": 8
    },
    {
        "id": 2028,
        "name": "长阳",
        "parent_id": 293,
        "post": 420528,
        "n": 9
    },
    {
        "id": 2029,
        "name": "五峰",
        "parent_id": 293,
        "post": 420529,
        "n": 10
    },
    {
        "id": 2030,
        "name": "宜都",
        "parent_id": 293,
        "post": 420581,
        "n": 11
    },
    {
        "id": 2031,
        "name": "当阳",
        "parent_id": 293,
        "post": 420582,
        "n": 12
    },
    {
        "id": 2032,
        "name": "枝江",
        "parent_id": 293,
        "post": 420583,
        "n": 13
    },
    {
        "id": 2033,
        "name": "襄城",
        "parent_id": 294,
        "post": 420602,
        "n": 1
    },
    {
        "id": 2034,
        "name": "樊城",
        "parent_id": 294,
        "post": 420606,
        "n": 2
    },
    {
        "id": 2035,
        "name": "襄州",
        "parent_id": 294,
        "post": 420607,
        "n": 3
    },
    {
        "id": 2036,
        "name": "南漳",
        "parent_id": 294,
        "post": 420624,
        "n": 4
    },
    {
        "id": 2037,
        "name": "谷城",
        "parent_id": 294,
        "post": 420625,
        "n": 5
    },
    {
        "id": 2038,
        "name": "保康",
        "parent_id": 294,
        "post": 420626,
        "n": 6
    },
    {
        "id": 2039,
        "name": "老河口",
        "parent_id": 294,
        "post": 420682,
        "n": 7
    },
    {
        "id": 2040,
        "name": "枣阳",
        "parent_id": 294,
        "post": 420683,
        "n": 8
    },
    {
        "id": 2041,
        "name": "宜城",
        "parent_id": 294,
        "post": 420684,
        "n": 9
    },
    {
        "id": 2042,
        "name": "粱子湖",
        "parent_id": 295,
        "post": 420702,
        "n": 1
    },
    {
        "id": 2043,
        "name": "华容",
        "parent_id": 295,
        "post": 420703,
        "n": 2
    },
    {
        "id": 2044,
        "name": "鄂城",
        "parent_id": 295,
        "post": 420704,
        "n": 3
    },
    {
        "id": 2045,
        "name": "东宝",
        "parent_id": 296,
        "post": 420802,
        "n": 1
    },
    {
        "id": 2046,
        "name": "掇刀",
        "parent_id": 296,
        "post": 420804,
        "n": 2
    },
    {
        "id": 2047,
        "name": "京山",
        "parent_id": 296,
        "post": 420882,
        "n": 3
    },
    {
        "id": 2048,
        "name": "沙洋",
        "parent_id": 296,
        "post": 420822,
        "n": 4
    },
    {
        "id": 2049,
        "name": "钟祥",
        "parent_id": 296,
        "post": 420881,
        "n": 5
    },
    {
        "id": 2050,
        "name": "孝南",
        "parent_id": 297,
        "post": 420902,
        "n": 1
    },
    {
        "id": 2051,
        "name": "大悟",
        "parent_id": 297,
        "post": 420922,
        "n": 2
    },
    {
        "id": 2052,
        "name": "云梦",
        "parent_id": 297,
        "post": 420923,
        "n": 3
    },
    {
        "id": 2053,
        "name": "应城",
        "parent_id": 297,
        "post": 420981,
        "n": 4
    },
    {
        "id": 2054,
        "name": "安陆",
        "parent_id": 297,
        "post": 420982,
        "n": 5
    },
    {
        "id": 2055,
        "name": "汉川",
        "parent_id": 297,
        "post": 420984,
        "n": 6
    },
    {
        "id": 2056,
        "name": "沙市",
        "parent_id": 298,
        "post": 421002,
        "n": 1
    },
    {
        "id": 2057,
        "name": "荆州",
        "parent_id": 298,
        "post": 421003,
        "n": 2
    },
    {
        "id": 2058,
        "name": "公安",
        "parent_id": 298,
        "post": 421022,
        "n": 3
    },
    {
        "id": 2059,
        "name": "监利",
        "parent_id": 298,
        "post": 421023,
        "n": 4
    },
    {
        "id": 2060,
        "name": "江陵",
        "parent_id": 298,
        "post": 421024,
        "n": 5
    },
    {
        "id": 2061,
        "name": "石首",
        "parent_id": 298,
        "post": 421081,
        "n": 6
    },
    {
        "id": 2062,
        "name": "洪湖",
        "parent_id": 298,
        "post": 421083,
        "n": 7
    },
    {
        "id": 2063,
        "name": "松滋",
        "parent_id": 298,
        "post": 421087,
        "n": 8
    },
    {
        "id": 2064,
        "name": "黄州",
        "parent_id": 299,
        "post": 421102,
        "n": 1
    },
    {
        "id": 2065,
        "name": "团风",
        "parent_id": 299,
        "post": 421121,
        "n": 2
    },
    {
        "id": 2066,
        "name": "红安",
        "parent_id": 299,
        "post": 421122,
        "n": 3
    },
    {
        "id": 2067,
        "name": "罗田",
        "parent_id": 299,
        "post": 421123,
        "n": 4
    },
    {
        "id": 2068,
        "name": "英山",
        "parent_id": 299,
        "post": 421124,
        "n": 5
    },
    {
        "id": 2069,
        "name": "浠水",
        "parent_id": 299,
        "post": 421125,
        "n": 6
    },
    {
        "id": 2070,
        "name": "蕲春",
        "parent_id": 299,
        "post": 421126,
        "n": 7
    },
    {
        "id": 2071,
        "name": "黄梅",
        "parent_id": 299,
        "post": 421127,
        "n": 8
    },
    {
        "id": 2072,
        "name": "麻城",
        "parent_id": 299,
        "post": 421181,
        "n": 9
    },
    {
        "id": 2073,
        "name": "武穴",
        "parent_id": 299,
        "post": 421182,
        "n": 10
    },
    {
        "id": 2074,
        "name": "咸安",
        "parent_id": 300,
        "post": 421202,
        "n": 1
    },
    {
        "id": 2075,
        "name": "嘉鱼",
        "parent_id": 300,
        "post": 421221,
        "n": 2
    },
    {
        "id": 2076,
        "name": "通城",
        "parent_id": 300,
        "post": 421222,
        "n": 3
    },
    {
        "id": 2077,
        "name": "崇阳",
        "parent_id": 300,
        "post": 421223,
        "n": 4
    },
    {
        "id": 2078,
        "name": "通山",
        "parent_id": 300,
        "post": 421224,
        "n": 5
    },
    {
        "id": 2079,
        "name": "赤壁",
        "parent_id": 300,
        "post": 421281,
        "n": 6
    },
    {
        "id": 2080,
        "name": "曾都",
        "parent_id": 301,
        "post": 421303,
        "n": 1
    },
    {
        "id": 2081,
        "name": "随县",
        "parent_id": 301,
        "post": 421321,
        "n": 2
    },
    {
        "id": 2082,
        "name": "广水",
        "parent_id": 301,
        "post": 421381,
        "n": 3
    },
    {
        "id": 2083,
        "name": "恩施",
        "parent_id": 302,
        "post": 422801,
        "n": 1
    },
    {
        "id": 2084,
        "name": "利川",
        "parent_id": 302,
        "post": 422802,
        "n": 2
    },
    {
        "id": 2085,
        "name": "建始",
        "parent_id": 302,
        "post": 422822,
        "n": 3
    },
    {
        "id": 2086,
        "name": "巴东",
        "parent_id": 302,
        "post": 422823,
        "n": 4
    },
    {
        "id": 2087,
        "name": "宣恩",
        "parent_id": 302,
        "post": 422825,
        "n": 5
    },
    {
        "id": 2088,
        "name": "咸丰",
        "parent_id": 302,
        "post": 422826,
        "n": 6
    },
    {
        "id": 2089,
        "name": "来凤",
        "parent_id": 302,
        "post": 422827,
        "n": 7
    },
    {
        "id": 2090,
        "name": "鹤峰",
        "parent_id": 302,
        "post": 422828,
        "n": 8
    },
    {
        "id": 2091,
        "name": "芙蓉",
        "parent_id": 307,
        "post": 430102,
        "n": 1
    },
    {
        "id": 2092,
        "name": "天心",
        "parent_id": 307,
        "post": 430103,
        "n": 2
    },
    {
        "id": 2093,
        "name": "岳麓",
        "parent_id": 307,
        "post": 430104,
        "n": 3
    },
    {
        "id": 2094,
        "name": "开福",
        "parent_id": 307,
        "post": 430105,
        "n": 4
    },
    {
        "id": 2095,
        "name": "雨花",
        "parent_id": 307,
        "post": 430111,
        "n": 5
    },
    {
        "id": 2096,
        "name": "望城",
        "parent_id": 307,
        "post": 430112,
        "n": 6
    },
    {
        "id": 2097,
        "name": "长沙",
        "parent_id": 307,
        "post": 430121,
        "n": 7
    },
    {
        "id": 2098,
        "name": "宁乡",
        "parent_id": 307,
        "post": 430182,
        "n": 8
    },
    {
        "id": 2099,
        "name": "浏阳",
        "parent_id": 307,
        "post": 430181,
        "n": 9
    },
    {
        "id": 2100,
        "name": "荷塘",
        "parent_id": 308,
        "post": 430202,
        "n": 1
    },
    {
        "id": 2101,
        "name": "芦淞",
        "parent_id": 308,
        "post": 430203,
        "n": 2
    },
    {
        "id": 2102,
        "name": "石峰",
        "parent_id": 308,
        "post": 430204,
        "n": 3
    },
    {
        "id": 2103,
        "name": "天元",
        "parent_id": 308,
        "post": 430211,
        "n": 4
    },
    {
        "id": 2104,
        "name": "渌口",
        "parent_id": 308,
        "post": 430212,
        "n": 5
    },
    {
        "id": 2105,
        "name": "攸县",
        "parent_id": 308,
        "post": 430223,
        "n": 6
    },
    {
        "id": 2106,
        "name": "茶陵",
        "parent_id": 308,
        "post": 430224,
        "n": 7
    },
    {
        "id": 2107,
        "name": "炎陵",
        "parent_id": 308,
        "post": 430225,
        "n": 8
    },
    {
        "id": 2108,
        "name": "醴陵",
        "parent_id": 308,
        "post": 430281,
        "n": 9
    },
    {
        "id": 2109,
        "name": "雨湖",
        "parent_id": 309,
        "post": 430302,
        "n": 1
    },
    {
        "id": 2110,
        "name": "岳塘",
        "parent_id": 309,
        "post": 430304,
        "n": 2
    },
    {
        "id": 2111,
        "name": "湘潭",
        "parent_id": 309,
        "post": 430321,
        "n": 3
    },
    {
        "id": 2112,
        "name": "湘乡",
        "parent_id": 309,
        "post": 430381,
        "n": 4
    },
    {
        "id": 2113,
        "name": "韶山",
        "parent_id": 309,
        "post": 430382,
        "n": 5
    },
    {
        "id": 2114,
        "name": "珠晖",
        "parent_id": 310,
        "post": 430405,
        "n": 1
    },
    {
        "id": 2115,
        "name": "雁峰",
        "parent_id": 310,
        "post": 430406,
        "n": 2
    },
    {
        "id": 2116,
        "name": "石鼓",
        "parent_id": 310,
        "post": 430407,
        "n": 3
    },
    {
        "id": 2117,
        "name": "蒸湘",
        "parent_id": 310,
        "post": 430408,
        "n": 4
    },
    {
        "id": 2118,
        "name": "南岳",
        "parent_id": 310,
        "post": 430412,
        "n": 5
    },
    {
        "id": 2119,
        "name": "衡阳",
        "parent_id": 310,
        "post": 430421,
        "n": 6
    },
    {
        "id": 2120,
        "name": "衡南",
        "parent_id": 310,
        "post": 430422,
        "n": 7
    },
    {
        "id": 2121,
        "name": "衡山",
        "parent_id": 310,
        "post": 430423,
        "n": 8
    },
    {
        "id": 2122,
        "name": "衡东",
        "parent_id": 310,
        "post": 430424,
        "n": 9
    },
    {
        "id": 2123,
        "name": "祁东",
        "parent_id": 310,
        "post": 430426,
        "n": 10
    },
    {
        "id": 2124,
        "name": "耒阳",
        "parent_id": 310,
        "post": 430481,
        "n": 11
    },
    {
        "id": 2125,
        "name": "常宁",
        "parent_id": 310,
        "post": 430482,
        "n": 12
    },
    {
        "id": 2126,
        "name": "双清",
        "parent_id": 311,
        "post": 430502,
        "n": 1
    },
    {
        "id": 2127,
        "name": "大祥",
        "parent_id": 311,
        "post": 430503,
        "n": 2
    },
    {
        "id": 2128,
        "name": "北塔",
        "parent_id": 311,
        "post": 430511,
        "n": 3
    },
    {
        "id": 2129,
        "name": "邵东",
        "parent_id": 311,
        "post": 430521,
        "n": 4
    },
    {
        "id": 2130,
        "name": "新邵",
        "parent_id": 311,
        "post": 430582,
        "n": 12
    },
    {
        "id": 2131,
        "name": "邵阳",
        "parent_id": 311,
        "post": 430523,
        "n": 5
    },
    {
        "id": 2132,
        "name": "隆回",
        "parent_id": 311,
        "post": 430524,
        "n": 6
    },
    {
        "id": 2133,
        "name": "洞口",
        "parent_id": 311,
        "post": 430525,
        "n": 7
    },
    {
        "id": 2134,
        "name": "绥宁",
        "parent_id": 311,
        "post": 430527,
        "n": 8
    },
    {
        "id": 2135,
        "name": "新宁",
        "parent_id": 311,
        "post": 430528,
        "n": 9
    },
    {
        "id": 2136,
        "name": "城步",
        "parent_id": 311,
        "post": 430529,
        "n": 10
    },
    {
        "id": 2137,
        "name": "武冈",
        "parent_id": 311,
        "post": 430581,
        "n": 11
    },
    {
        "id": 2138,
        "name": "岳阳楼",
        "parent_id": 312,
        "post": 430602,
        "n": 1
    },
    {
        "id": 2139,
        "name": "云溪",
        "parent_id": 312,
        "post": 430603,
        "n": 2
    },
    {
        "id": 2140,
        "name": "君山",
        "parent_id": 312,
        "post": 430611,
        "n": 3
    },
    {
        "id": 2141,
        "name": "岳阳",
        "parent_id": 312,
        "post": 430621,
        "n": 4
    },
    {
        "id": 2142,
        "name": "华容",
        "parent_id": 312,
        "post": 430623,
        "n": 5
    },
    {
        "id": 2143,
        "name": "湘阴",
        "parent_id": 312,
        "post": 430624,
        "n": 6
    },
    {
        "id": 2144,
        "name": "平江",
        "parent_id": 312,
        "post": 430626,
        "n": 7
    },
    {
        "id": 2145,
        "name": "汨罗",
        "parent_id": 312,
        "post": 430681,
        "n": 8
    },
    {
        "id": 2146,
        "name": "临湘",
        "parent_id": 312,
        "post": 430682,
        "n": 9
    },
    {
        "id": 2147,
        "name": "武陵",
        "parent_id": 313,
        "post": 430702,
        "n": 1
    },
    {
        "id": 2148,
        "name": "鼎城",
        "parent_id": 313,
        "post": 430703,
        "n": 2
    },
    {
        "id": 2149,
        "name": "安乡",
        "parent_id": 313,
        "post": 430721,
        "n": 3
    },
    {
        "id": 2150,
        "name": "汉寿",
        "parent_id": 313,
        "post": 430722,
        "n": 4
    },
    {
        "id": 2151,
        "name": "澧县",
        "parent_id": 313,
        "post": 430723,
        "n": 5
    },
    {
        "id": 2152,
        "name": "临澧",
        "parent_id": 313,
        "post": 430724,
        "n": 6
    },
    {
        "id": 2153,
        "name": "桃源",
        "parent_id": 313,
        "post": 430725,
        "n": 7
    },
    {
        "id": 2154,
        "name": "石门",
        "parent_id": 313,
        "post": 430726,
        "n": 8
    },
    {
        "id": 2155,
        "name": "津市",
        "parent_id": 313,
        "post": 430781,
        "n": 9
    },
    {
        "id": 2156,
        "name": "永定",
        "parent_id": 314,
        "post": 430802,
        "n": 1
    },
    {
        "id": 2157,
        "name": "武陵源",
        "parent_id": 314,
        "post": 430811,
        "n": 2
    },
    {
        "id": 2158,
        "name": "慈利",
        "parent_id": 314,
        "post": 430821,
        "n": 3
    },
    {
        "id": 2159,
        "name": "桑植",
        "parent_id": 314,
        "post": 430822,
        "n": 4
    },
    {
        "id": 2160,
        "name": "资阳",
        "parent_id": 315,
        "post": 430902,
        "n": 1
    },
    {
        "id": 2161,
        "name": "赫山",
        "parent_id": 315,
        "post": 430903,
        "n": 2
    },
    {
        "id": 2162,
        "name": "南县",
        "parent_id": 315,
        "post": 430921,
        "n": 3
    },
    {
        "id": 2163,
        "name": "桃江",
        "parent_id": 315,
        "post": 430922,
        "n": 4
    },
    {
        "id": 2164,
        "name": "安化",
        "parent_id": 315,
        "post": 430923,
        "n": 5
    },
    {
        "id": 2165,
        "name": "沅江",
        "parent_id": 315,
        "post": 430981,
        "n": 6
    },
    {
        "id": 2166,
        "name": "北湖",
        "parent_id": 316,
        "post": 431002,
        "n": 1
    },
    {
        "id": 2167,
        "name": "苏仙",
        "parent_id": 316,
        "post": 431003,
        "n": 2
    },
    {
        "id": 2168,
        "name": "桂阳",
        "parent_id": 316,
        "post": 431021,
        "n": 3
    },
    {
        "id": 2169,
        "name": "宜章",
        "parent_id": 316,
        "post": 431022,
        "n": 4
    },
    {
        "id": 2170,
        "name": "永兴",
        "parent_id": 316,
        "post": 431023,
        "n": 5
    },
    {
        "id": 2171,
        "name": "嘉禾",
        "parent_id": 316,
        "post": 431024,
        "n": 6
    },
    {
        "id": 2172,
        "name": "临武",
        "parent_id": 316,
        "post": 431025,
        "n": 7
    },
    {
        "id": 2173,
        "name": "汝城",
        "parent_id": 316,
        "post": 431026,
        "n": 8
    },
    {
        "id": 2174,
        "name": "桂东",
        "parent_id": 316,
        "post": 431027,
        "n": 9
    },
    {
        "id": 2175,
        "name": "安仁",
        "parent_id": 316,
        "post": 431028,
        "n": 10
    },
    {
        "id": 2176,
        "name": "资兴",
        "parent_id": 316,
        "post": 431081,
        "n": 11
    },
    {
        "id": 2177,
        "name": "零陵",
        "parent_id": 317,
        "post": 431102,
        "n": 1
    },
    {
        "id": 2178,
        "name": "冷水滩",
        "parent_id": 317,
        "post": 431103,
        "n": 2
    },
    {
        "id": 2179,
        "name": "祁阳",
        "parent_id": 317,
        "post": 431121,
        "n": 3
    },
    {
        "id": 2180,
        "name": "东安",
        "parent_id": 317,
        "post": 431122,
        "n": 4
    },
    {
        "id": 2181,
        "name": "双牌",
        "parent_id": 317,
        "post": 431123,
        "n": 5
    },
    {
        "id": 2182,
        "name": "道县",
        "parent_id": 317,
        "post": 431124,
        "n": 6
    },
    {
        "id": 2183,
        "name": "江永",
        "parent_id": 317,
        "post": 431125,
        "n": 7
    },
    {
        "id": 2184,
        "name": "宁远",
        "parent_id": 317,
        "post": 431126,
        "n": 8
    },
    {
        "id": 2185,
        "name": "蓝山",
        "parent_id": 317,
        "post": 431127,
        "n": 9
    },
    {
        "id": 2186,
        "name": "新田",
        "parent_id": 317,
        "post": 431128,
        "n": 10
    },
    {
        "id": 2187,
        "name": "江华",
        "parent_id": 317,
        "post": 431129,
        "n": 11
    },
    {
        "id": 2188,
        "name": "鹤城",
        "parent_id": 318,
        "post": 431202,
        "n": 1
    },
    {
        "id": 2189,
        "name": "中方",
        "parent_id": 318,
        "post": 431221,
        "n": 2
    },
    {
        "id": 2190,
        "name": "沅陵",
        "parent_id": 318,
        "post": 431222,
        "n": 3
    },
    {
        "id": 2191,
        "name": "辰溪",
        "parent_id": 318,
        "post": 431223,
        "n": 4
    },
    {
        "id": 2192,
        "name": "溆浦",
        "parent_id": 318,
        "post": 431224,
        "n": 5
    },
    {
        "id": 2193,
        "name": "会同",
        "parent_id": 318,
        "post": 431225,
        "n": 6
    },
    {
        "id": 2194,
        "name": "麻阳",
        "parent_id": 318,
        "post": 431226,
        "n": 7
    },
    {
        "id": 2195,
        "name": "新晃",
        "parent_id": 318,
        "post": 431227,
        "n": 8
    },
    {
        "id": 2196,
        "name": "芷江",
        "parent_id": 318,
        "post": 431228,
        "n": 9
    },
    {
        "id": 2197,
        "name": "靖州",
        "parent_id": 318,
        "post": 431229,
        "n": 10
    },
    {
        "id": 2198,
        "name": "通道",
        "parent_id": 318,
        "post": 431230,
        "n": 11
    },
    {
        "id": 2199,
        "name": "洪江",
        "parent_id": 318,
        "post": 431281,
        "n": 12
    },
    {
        "id": 2200,
        "name": "娄星",
        "parent_id": 319,
        "post": 431302,
        "n": 1
    },
    {
        "id": 2201,
        "name": "双峰",
        "parent_id": 319,
        "post": 431321,
        "n": 2
    },
    {
        "id": 2202,
        "name": "新化",
        "parent_id": 319,
        "post": 431322,
        "n": 3
    },
    {
        "id": 2203,
        "name": "冷水江",
        "parent_id": 319,
        "post": 431381,
        "n": 4
    },
    {
        "id": 2204,
        "name": "涟源",
        "parent_id": 319,
        "post": 431382,
        "n": 5
    },
    {
        "id": 2205,
        "name": "吉首",
        "parent_id": 320,
        "post": 433101,
        "n": 1
    },
    {
        "id": 2206,
        "name": "泸溪",
        "parent_id": 320,
        "post": 433122,
        "n": 2
    },
    {
        "id": 2207,
        "name": "凤凰",
        "parent_id": 320,
        "post": 433123,
        "n": 3
    },
    {
        "id": 2208,
        "name": "花垣",
        "parent_id": 320,
        "post": 433124,
        "n": 4
    },
    {
        "id": 2209,
        "name": "保靖",
        "parent_id": 320,
        "post": 433125,
        "n": 5
    },
    {
        "id": 2210,
        "name": "古丈",
        "parent_id": 320,
        "post": 433126,
        "n": 6
    },
    {
        "id": 2211,
        "name": "永顺",
        "parent_id": 320,
        "post": 433127,
        "n": 7
    },
    {
        "id": 2212,
        "name": "龙山",
        "parent_id": 320,
        "post": 433130,
        "n": 8
    },
    {
        "id": 2213,
        "name": "荔湾",
        "parent_id": 321,
        "post": 440103,
        "n": 1
    },
    {
        "id": 2214,
        "name": "越秀",
        "parent_id": 321,
        "post": 440104,
        "n": 2
    },
    {
        "id": 2215,
        "name": "海珠",
        "parent_id": 321,
        "post": 440105,
        "n": 3
    },
    {
        "id": 2216,
        "name": "天河",
        "parent_id": 321,
        "post": 440106,
        "n": 4
    },
    {
        "id": 2217,
        "name": "白云",
        "parent_id": 321,
        "post": 440111,
        "n": 5
    },
    {
        "id": 2218,
        "name": "黄埔",
        "parent_id": 321,
        "post": 440112,
        "n": 6
    },
    {
        "id": 2219,
        "name": "番禺",
        "parent_id": 321,
        "post": 440113,
        "n": 7
    },
    {
        "id": 2220,
        "name": "花都",
        "parent_id": 321,
        "post": 440114,
        "n": 8
    },
    {
        "id": 2221,
        "name": "南沙",
        "parent_id": 321,
        "post": 440115,
        "n": 9
    },
    {
        "id": 2223,
        "name": "增城",
        "parent_id": 321,
        "post": 440118,
        "n": 12
    },
    {
        "id": 2224,
        "name": "从化",
        "parent_id": 321,
        "post": 440117,
        "n": 11
    },
    {
        "id": 2225,
        "name": "武江",
        "parent_id": 322,
        "post": 440203,
        "n": 1
    },
    {
        "id": 2226,
        "name": "浈江",
        "parent_id": 322,
        "post": 440204,
        "n": 2
    },
    {
        "id": 2227,
        "name": "曲江",
        "parent_id": 322,
        "post": 440205,
        "n": 3
    },
    {
        "id": 2228,
        "name": "始兴",
        "parent_id": 322,
        "post": 440222,
        "n": 4
    },
    {
        "id": 2229,
        "name": "仁化",
        "parent_id": 322,
        "post": 440224,
        "n": 5
    },
    {
        "id": 2230,
        "name": "翁源",
        "parent_id": 322,
        "post": 440229,
        "n": 6
    },
    {
        "id": 2231,
        "name": "乳源",
        "parent_id": 322,
        "post": 440232,
        "n": 7
    },
    {
        "id": 2232,
        "name": "新丰",
        "parent_id": 322,
        "post": 440233,
        "n": 8
    },
    {
        "id": 2233,
        "name": "乐昌",
        "parent_id": 322,
        "post": 440281,
        "n": 9
    },
    {
        "id": 2234,
        "name": "南雄",
        "parent_id": 322,
        "post": 440282,
        "n": 10
    },
    {
        "id": 2235,
        "name": "罗湖",
        "parent_id": 323,
        "post": 440303,
        "n": 1
    },
    {
        "id": 2236,
        "name": "福田",
        "parent_id": 323,
        "post": 440304,
        "n": 2
    },
    {
        "id": 2237,
        "name": "南山",
        "parent_id": 323,
        "post": 440305,
        "n": 3
    },
    {
        "id": 2238,
        "name": "宝安",
        "parent_id": 323,
        "post": 440306,
        "n": 4
    },
    {
        "id": 2239,
        "name": "龙岗",
        "parent_id": 323,
        "post": 440307,
        "n": 5
    },
    {
        "id": 2240,
        "name": "盐田",
        "parent_id": 323,
        "post": 440308,
        "n": 6
    },
    {
        "id": 2241,
        "name": "香洲",
        "parent_id": 324,
        "post": 440402,
        "n": 1
    },
    {
        "id": 2242,
        "name": "斗门",
        "parent_id": 324,
        "post": 440403,
        "n": 2
    },
    {
        "id": 2243,
        "name": "金湾",
        "parent_id": 324,
        "post": 440404,
        "n": 3
    },
    {
        "id": 2244,
        "name": "龙湖",
        "parent_id": 325,
        "post": 440507,
        "n": 1
    },
    {
        "id": 2245,
        "name": "金平",
        "parent_id": 325,
        "post": 440511,
        "n": 2
    },
    {
        "id": 2246,
        "name": "濠江",
        "parent_id": 325,
        "post": 440512,
        "n": 3
    },
    {
        "id": 2247,
        "name": "潮阳",
        "parent_id": 325,
        "post": 440513,
        "n": 4
    },
    {
        "id": 2248,
        "name": "潮南",
        "parent_id": 325,
        "post": 440514,
        "n": 5
    },
    {
        "id": 2249,
        "name": "澄海",
        "parent_id": 325,
        "post": 440515,
        "n": 6
    },
    {
        "id": 2250,
        "name": "南澳",
        "parent_id": 325,
        "post": 440523,
        "n": 7
    },
    {
        "id": 2251,
        "name": "禅城",
        "parent_id": 326,
        "post": 440604,
        "n": 1
    },
    {
        "id": 2252,
        "name": "南海",
        "parent_id": 326,
        "post": 440605,
        "n": 2
    },
    {
        "id": 2253,
        "name": "顺德",
        "parent_id": 326,
        "post": 440606,
        "n": 3
    },
    {
        "id": 2254,
        "name": "三水",
        "parent_id": 326,
        "post": 440607,
        "n": 4
    },
    {
        "id": 2255,
        "name": "高明",
        "parent_id": 326,
        "post": 440608,
        "n": 5
    },
    {
        "id": 2256,
        "name": "蓬江",
        "parent_id": 327,
        "post": 440703,
        "n": 1
    },
    {
        "id": 2257,
        "name": "江海",
        "parent_id": 327,
        "post": 440704,
        "n": 2
    },
    {
        "id": 2258,
        "name": "新会",
        "parent_id": 327,
        "post": 440705,
        "n": 3
    },
    {
        "id": 2259,
        "name": "台山",
        "parent_id": 327,
        "post": 440781,
        "n": 4
    },
    {
        "id": 2260,
        "name": "开平",
        "parent_id": 327,
        "post": 440783,
        "n": 5
    },
    {
        "id": 2261,
        "name": "鹤山",
        "parent_id": 327,
        "post": 440784,
        "n": 6
    },
    {
        "id": 2262,
        "name": "恩平",
        "parent_id": 327,
        "post": 440785,
        "n": 7
    },
    {
        "id": 2263,
        "name": "赤坎",
        "parent_id": 328,
        "post": 440802,
        "n": 1
    },
    {
        "id": 2264,
        "name": "霞山",
        "parent_id": 328,
        "post": 440803,
        "n": 2
    },
    {
        "id": 2265,
        "name": "坡头",
        "parent_id": 328,
        "post": 440804,
        "n": 3
    },
    {
        "id": 2266,
        "name": "麻章",
        "parent_id": 328,
        "post": 440811,
        "n": 4
    },
    {
        "id": 2267,
        "name": "遂溪",
        "parent_id": 328,
        "post": 440823,
        "n": 5
    },
    {
        "id": 2268,
        "name": "徐闻",
        "parent_id": 328,
        "post": 440825,
        "n": 6
    },
    {
        "id": 2269,
        "name": "廉江",
        "parent_id": 328,
        "post": 440881,
        "n": 7
    },
    {
        "id": 2270,
        "name": "雷州",
        "parent_id": 328,
        "post": 440882,
        "n": 8
    },
    {
        "id": 2271,
        "name": "吴川",
        "parent_id": 328,
        "post": 440883,
        "n": 9
    },
    {
        "id": 2272,
        "name": "茂南",
        "parent_id": 329,
        "post": 440902,
        "n": 1
    },
    {
        "id": 2274,
        "name": "电白",
        "parent_id": 329,
        "post": 440904,
        "n": 2
    },
    {
        "id": 2275,
        "name": "高州",
        "parent_id": 329,
        "post": 440981,
        "n": 3
    },
    {
        "id": 2276,
        "name": "化州",
        "parent_id": 329,
        "post": 440982,
        "n": 4
    },
    {
        "id": 2277,
        "name": "信宜",
        "parent_id": 329,
        "post": 440983,
        "n": 5
    },
    {
        "id": 2278,
        "name": "端州",
        "parent_id": 330,
        "post": 441202,
        "n": 1
    },
    {
        "id": 2279,
        "name": "鼎湖",
        "parent_id": 330,
        "post": 441203,
        "n": 2
    },
    {
        "id": 2280,
        "name": "广宁",
        "parent_id": 330,
        "post": 441223,
        "n": 3
    },
    {
        "id": 2281,
        "name": "怀集",
        "parent_id": 330,
        "post": 441224,
        "n": 4
    },
    {
        "id": 2282,
        "name": "封开",
        "parent_id": 330,
        "post": 441225,
        "n": 5
    },
    {
        "id": 2283,
        "name": "德庆",
        "parent_id": 330,
        "post": 441226,
        "n": 6
    },
    {
        "id": 2284,
        "name": "高要",
        "parent_id": 330,
        "post": 441283,
        "n": 7
    },
    {
        "id": 2285,
        "name": "四会",
        "parent_id": 330,
        "post": 441284,
        "n": 8
    },
    {
        "id": 2286,
        "name": "惠城",
        "parent_id": 331,
        "post": 441302,
        "n": 1
    },
    {
        "id": 2287,
        "name": "惠阳",
        "parent_id": 331,
        "post": 441303,
        "n": 2
    },
    {
        "id": 2288,
        "name": "博罗",
        "parent_id": 331,
        "post": 441322,
        "n": 3
    },
    {
        "id": 2289,
        "name": "惠东",
        "parent_id": 331,
        "post": 441323,
        "n": 4
    },
    {
        "id": 2290,
        "name": "龙门",
        "parent_id": 331,
        "post": 441324,
        "n": 5
    },
    {
        "id": 2291,
        "name": "梅江",
        "parent_id": 332,
        "post": 441402,
        "n": 1
    },
    {
        "id": 2292,
        "name": "梅县",
        "parent_id": 332,
        "post": 441403,
        "n": 2
    },
    {
        "id": 2293,
        "name": "大埔",
        "parent_id": 332,
        "post": 441422,
        "n": 3
    },
    {
        "id": 2294,
        "name": "丰顺",
        "parent_id": 332,
        "post": 441423,
        "n": 4
    },
    {
        "id": 2295,
        "name": "五华",
        "parent_id": 332,
        "post": 441424,
        "n": 5
    },
    {
        "id": 2296,
        "name": "平远",
        "parent_id": 332,
        "post": 441426,
        "n": 6
    },
    {
        "id": 2297,
        "name": "蕉岭",
        "parent_id": 332,
        "post": 441427,
        "n": 7
    },
    {
        "id": 2298,
        "name": "兴宁",
        "parent_id": 332,
        "post": 441481,
        "n": 8
    },
    {
        "id": 2299,
        "name": "城区",
        "parent_id": 333,
        "post": 441502,
        "n": 1
    },
    {
        "id": 2300,
        "name": "海丰",
        "parent_id": 333,
        "post": 441521,
        "n": 2
    },
    {
        "id": 2301,
        "name": "陆河",
        "parent_id": 333,
        "post": 441523,
        "n": 3
    },
    {
        "id": 2302,
        "name": "陆丰",
        "parent_id": 333,
        "post": 441581,
        "n": 4
    },
    {
        "id": 2303,
        "name": "源城",
        "parent_id": 334,
        "post": 441602,
        "n": 1
    },
    {
        "id": 2304,
        "name": "紫金",
        "parent_id": 334,
        "post": 441621,
        "n": 2
    },
    {
        "id": 2305,
        "name": "龙川",
        "parent_id": 334,
        "post": 441622,
        "n": 3
    },
    {
        "id": 2306,
        "name": "连平",
        "parent_id": 334,
        "post": 441623,
        "n": 4
    },
    {
        "id": 2307,
        "name": "和平",
        "parent_id": 334,
        "post": 441624,
        "n": 5
    },
    {
        "id": 2308,
        "name": "东源",
        "parent_id": 334,
        "post": 441625,
        "n": 6
    },
    {
        "id": 2309,
        "name": "江城",
        "parent_id": 335,
        "post": 441702,
        "n": 1
    },
    {
        "id": 2310,
        "name": "阳西",
        "parent_id": 335,
        "post": 441721,
        "n": 2
    },
    {
        "id": 2311,
        "name": "阳东",
        "parent_id": 335,
        "post": 441723,
        "n": 3
    },
    {
        "id": 2312,
        "name": "阳春",
        "parent_id": 335,
        "post": 441781,
        "n": 4
    },
    {
        "id": 2313,
        "name": "清城",
        "parent_id": 336,
        "post": 441802,
        "n": 1
    },
    {
        "id": 2314,
        "name": "佛冈",
        "parent_id": 336,
        "post": 441821,
        "n": 2
    },
    {
        "id": 2315,
        "name": "阳山",
        "parent_id": 336,
        "post": 441823,
        "n": 3
    },
    {
        "id": 2316,
        "name": "连山",
        "parent_id": 336,
        "post": 441825,
        "n": 4
    },
    {
        "id": 2317,
        "name": "连南",
        "parent_id": 336,
        "post": 441826,
        "n": 5
    },
    {
        "id": 2318,
        "name": "清新",
        "parent_id": 336,
        "post": 441827,
        "n": 6
    },
    {
        "id": 2319,
        "name": "英德",
        "parent_id": 336,
        "post": 441881,
        "n": 7
    },
    {
        "id": 2320,
        "name": "连州",
        "parent_id": 336,
        "post": 441882,
        "n": 8
    },
    {
        "id": 2321,
        "name": "湘桥",
        "parent_id": 339,
        "post": 445102,
        "n": 1
    },
    {
        "id": 2322,
        "name": "潮安",
        "parent_id": 339,
        "post": 445121,
        "n": 2
    },
    {
        "id": 2323,
        "name": "饶平",
        "parent_id": 339,
        "post": 445122,
        "n": 3
    },
    {
        "id": 2324,
        "name": "榕城",
        "parent_id": 340,
        "post": 445202,
        "n": 1
    },
    {
        "id": 2325,
        "name": "揭东",
        "parent_id": 340,
        "post": 445221,
        "n": 2
    },
    {
        "id": 2326,
        "name": "揭西",
        "parent_id": 340,
        "post": 445222,
        "n": 3
    },
    {
        "id": 2327,
        "name": "惠来",
        "parent_id": 340,
        "post": 445224,
        "n": 4
    },
    {
        "id": 2328,
        "name": "普宁",
        "parent_id": 340,
        "post": 445281,
        "n": 5
    },
    {
        "id": 2329,
        "name": "云城",
        "parent_id": 341,
        "post": 445302,
        "n": 1
    },
    {
        "id": 2330,
        "name": "新兴",
        "parent_id": 341,
        "post": 445321,
        "n": 3
    },
    {
        "id": 2331,
        "name": "郁南",
        "parent_id": 341,
        "post": 445322,
        "n": 4
    },
    {
        "id": 2332,
        "name": "云安",
        "parent_id": 341,
        "post": 445302,
        "n": 2
    },
    {
        "id": 2333,
        "name": "罗定",
        "parent_id": 341,
        "post": 445381,
        "n": 5
    },
    {
        "id": 2334,
        "name": "兴宁",
        "parent_id": 342,
        "post": 450102,
        "n": 1
    },
    {
        "id": 2335,
        "name": "青秀",
        "parent_id": 342,
        "post": 450103,
        "n": 2
    },
    {
        "id": 2336,
        "name": "江南",
        "parent_id": 342,
        "post": 450105,
        "n": 3
    },
    {
        "id": 2337,
        "name": "西乡塘",
        "parent_id": 342,
        "post": 450107,
        "n": 4
    },
    {
        "id": 2338,
        "name": "良庆",
        "parent_id": 342,
        "post": 450108,
        "n": 5
    },
    {
        "id": 2339,
        "name": "邕宁",
        "parent_id": 342,
        "post": 450109,
        "n": 6
    },
    {
        "id": 2340,
        "name": "武鸣",
        "parent_id": 342,
        "post": 450122,
        "n": 7
    },
    {
        "id": 2341,
        "name": "隆安",
        "parent_id": 342,
        "post": 450123,
        "n": 8
    },
    {
        "id": 2342,
        "name": "马山",
        "parent_id": 342,
        "post": 450124,
        "n": 9
    },
    {
        "id": 2343,
        "name": "上林",
        "parent_id": 342,
        "post": 450125,
        "n": 10
    },
    {
        "id": 2344,
        "name": "宾阳",
        "parent_id": 342,
        "post": 450126,
        "n": 11
    },
    {
        "id": 2345,
        "name": "横县",
        "parent_id": 342,
        "post": 450127,
        "n": 12
    },
    {
        "id": 2346,
        "name": "城中",
        "parent_id": 343,
        "post": 450202,
        "n": 1
    },
    {
        "id": 2347,
        "name": "鱼峰",
        "parent_id": 343,
        "post": 450203,
        "n": 2
    },
    {
        "id": 2348,
        "name": "柳南",
        "parent_id": 343,
        "post": 450204,
        "n": 3
    },
    {
        "id": 2349,
        "name": "柳北",
        "parent_id": 343,
        "post": 450205,
        "n": 4
    },
    {
        "id": 2350,
        "name": "柳江",
        "parent_id": 343,
        "post": 450206,
        "n": 5
    },
    {
        "id": 2351,
        "name": "柳城",
        "parent_id": 343,
        "post": 450222,
        "n": 6
    },
    {
        "id": 2352,
        "name": "鹿寨",
        "parent_id": 343,
        "post": 450223,
        "n": 7
    },
    {
        "id": 2353,
        "name": "融安",
        "parent_id": 343,
        "post": 450224,
        "n": 8
    },
    {
        "id": 2354,
        "name": "融水",
        "parent_id": 343,
        "post": 450225,
        "n": 9
    },
    {
        "id": 2355,
        "name": "三江",
        "parent_id": 343,
        "post": 450226,
        "n": 10
    },
    {
        "id": 2356,
        "name": "秀峰",
        "parent_id": 344,
        "post": 450302,
        "n": 1
    },
    {
        "id": 2357,
        "name": "叠彩",
        "parent_id": 344,
        "post": 450303,
        "n": 2
    },
    {
        "id": 2358,
        "name": "象山",
        "parent_id": 344,
        "post": 450304,
        "n": 3
    },
    {
        "id": 2359,
        "name": "七星",
        "parent_id": 344,
        "post": 450305,
        "n": 4
    },
    {
        "id": 2360,
        "name": "雁山",
        "parent_id": 344,
        "post": 450311,
        "n": 5
    },
    {
        "id": 2361,
        "name": "阳朔",
        "parent_id": 344,
        "post": 450321,
        "n": 6
    },
    {
        "id": 2362,
        "name": "临桂",
        "parent_id": 344,
        "post": 450322,
        "n": 7
    },
    {
        "id": 2363,
        "name": "灵川",
        "parent_id": 344,
        "post": 450323,
        "n": 8
    },
    {
        "id": 2364,
        "name": "全州",
        "parent_id": 344,
        "post": 450324,
        "n": 9
    },
    {
        "id": 2365,
        "name": "兴安",
        "parent_id": 344,
        "post": 450325,
        "n": 10
    },
    {
        "id": 2366,
        "name": "永福",
        "parent_id": 344,
        "post": 450326,
        "n": 11
    },
    {
        "id": 2367,
        "name": "灌阳",
        "parent_id": 344,
        "post": 450327,
        "n": 12
    },
    {
        "id": 2368,
        "name": "龙胜",
        "parent_id": 344,
        "post": 450328,
        "n": 13
    },
    {
        "id": 2369,
        "name": "资源",
        "parent_id": 344,
        "post": 450329,
        "n": 14
    },
    {
        "id": 2370,
        "name": "平乐",
        "parent_id": 344,
        "post": 450330,
        "n": 15
    },
    {
        "id": 2371,
        "name": "荔浦",
        "parent_id": 344,
        "post": 450331,
        "n": 16
    },
    {
        "id": 2372,
        "name": "恭城",
        "parent_id": 344,
        "post": 450332,
        "n": 17
    },
    {
        "id": 2373,
        "name": "龙圩",
        "parent_id": 345,
        "post": "",
        "n": 1
    },
    {
        "id": 2374,
        "name": "万秀",
        "parent_id": 345,
        "post": 450403,
        "n": 2
    },
    {
        "id": 2375,
        "name": "长洲",
        "parent_id": 345,
        "post": 450405,
        "n": 3
    },
    {
        "id": 2376,
        "name": "苍梧",
        "parent_id": 345,
        "post": 450421,
        "n": 4
    },
    {
        "id": 2377,
        "name": "藤县",
        "parent_id": 345,
        "post": 450422,
        "n": 5
    },
    {
        "id": 2378,
        "name": "蒙山",
        "parent_id": 345,
        "post": 450423,
        "n": 6
    },
    {
        "id": 2379,
        "name": "岑溪",
        "parent_id": 345,
        "post": 450481,
        "n": 7
    },
    {
        "id": 2380,
        "name": "海城",
        "parent_id": 346,
        "post": 450502,
        "n": 1
    },
    {
        "id": 2381,
        "name": "银海",
        "parent_id": 346,
        "post": 450503,
        "n": 2
    },
    {
        "id": 2382,
        "name": "铁山港",
        "parent_id": 346,
        "post": 450512,
        "n": 3
    },
    {
        "id": 2383,
        "name": "合浦",
        "parent_id": 346,
        "post": 450521,
        "n": 4
    },
    {
        "id": 2384,
        "name": "港口",
        "parent_id": 347,
        "post": 450602,
        "n": 1
    },
    {
        "id": 2385,
        "name": "防城",
        "parent_id": 347,
        "post": 450603,
        "n": 2
    },
    {
        "id": 2386,
        "name": "上思",
        "parent_id": 347,
        "post": 450621,
        "n": 3
    },
    {
        "id": 2387,
        "name": "东兴",
        "parent_id": 347,
        "post": 450681,
        "n": 4
    },
    {
        "id": 2388,
        "name": "钦南",
        "parent_id": 348,
        "post": 450702,
        "n": 1
    },
    {
        "id": 2389,
        "name": "钦北",
        "parent_id": 348,
        "post": 450703,
        "n": 2
    },
    {
        "id": 2390,
        "name": "灵山",
        "parent_id": 348,
        "post": 450721,
        "n": 3
    },
    {
        "id": 2391,
        "name": "浦北",
        "parent_id": 348,
        "post": 450722,
        "n": 4
    },
    {
        "id": 2392,
        "name": "港北",
        "parent_id": 349,
        "post": 450802,
        "n": 1
    },
    {
        "id": 2393,
        "name": "港南",
        "parent_id": 349,
        "post": 450803,
        "n": 2
    },
    {
        "id": 2394,
        "name": "覃塘",
        "parent_id": 349,
        "post": 450804,
        "n": 3
    },
    {
        "id": 2395,
        "name": "桂平",
        "parent_id": 349,
        "post": 450821,
        "n": 4
    },
    {
        "id": 2396,
        "name": "平南",
        "parent_id": 349,
        "post": 450881,
        "n": 5
    },
    {
        "id": 2397,
        "name": "玉州",
        "parent_id": 350,
        "post": 450902,
        "n": 1
    },
    {
        "id": 2398,
        "name": "容县",
        "parent_id": 350,
        "post": 450921,
        "n": 3
    },
    {
        "id": 2399,
        "name": "陆川",
        "parent_id": 350,
        "post": 450922,
        "n": 4
    },
    {
        "id": 2400,
        "name": "博白",
        "parent_id": 350,
        "post": 450923,
        "n": 5
    },
    {
        "id": 2401,
        "name": "兴业",
        "parent_id": 350,
        "post": 450924,
        "n": 6
    },
    {
        "id": 2402,
        "name": "北流",
        "parent_id": 350,
        "post": 450981,
        "n": 7
    },
    {
        "id": 2403,
        "name": "右江",
        "parent_id": 351,
        "post": 451002,
        "n": 1
    },
    {
        "id": 2404,
        "name": "田阳",
        "parent_id": 351,
        "post": 451003,
        "n": 2
    },
    {
        "id": 2405,
        "name": "田东",
        "parent_id": 351,
        "post": 451022,
        "n": 3
    },
    {
        "id": 2406,
        "name": "平果",
        "parent_id": 351,
        "post": 451082,
        "n": 12
    },
    {
        "id": 2407,
        "name": "德保",
        "parent_id": 351,
        "post": 451024,
        "n": 4
    },
    {
        "id": 2408,
        "name": "靖西",
        "parent_id": 351,
        "post": 451081,
        "n": 11
    },
    {
        "id": 2409,
        "name": "那坡",
        "parent_id": 351,
        "post": 451026,
        "n": 5
    },
    {
        "id": 2410,
        "name": "凌云",
        "parent_id": 351,
        "post": 451027,
        "n": 6
    },
    {
        "id": 2411,
        "name": "乐业",
        "parent_id": 351,
        "post": 451028,
        "n": 7
    },
    {
        "id": 2412,
        "name": "田林",
        "parent_id": 351,
        "post": 451029,
        "n": 8
    },
    {
        "id": 2413,
        "name": "西林",
        "parent_id": 351,
        "post": 451030,
        "n": 9
    },
    {
        "id": 2414,
        "name": "隆林",
        "parent_id": 351,
        "post": 451031,
        "n": 10
    },
    {
        "id": 2415,
        "name": "八步",
        "parent_id": 352,
        "post": 451102,
        "n": 1
    },
    {
        "id": 2416,
        "name": "昭平",
        "parent_id": 352,
        "post": 451121,
        "n": 3
    },
    {
        "id": 2417,
        "name": "钟山",
        "parent_id": 352,
        "post": 451122,
        "n": 4
    },
    {
        "id": 2418,
        "name": "富川",
        "parent_id": 352,
        "post": 451123,
        "n": 5
    },
    {
        "id": 2419,
        "name": "金城江",
        "parent_id": 353,
        "post": 451202,
        "n": 1
    },
    {
        "id": 2420,
        "name": "南丹",
        "parent_id": 353,
        "post": 451221,
        "n": 3
    },
    {
        "id": 2421,
        "name": "天峨",
        "parent_id": 353,
        "post": 451222,
        "n": 4
    },
    {
        "id": 2422,
        "name": "凤山",
        "parent_id": 353,
        "post": 451223,
        "n": 5
    },
    {
        "id": 2423,
        "name": "东兰",
        "parent_id": 353,
        "post": 451224,
        "n": 6
    },
    {
        "id": 2424,
        "name": "罗城",
        "parent_id": 353,
        "post": 451225,
        "n": 7
    },
    {
        "id": 2425,
        "name": "环江",
        "parent_id": 353,
        "post": 451226,
        "n": 8
    },
    {
        "id": 2426,
        "name": "巴马",
        "parent_id": 353,
        "post": 451227,
        "n": 9
    },
    {
        "id": 2427,
        "name": "都安",
        "parent_id": 353,
        "post": 451228,
        "n": 10
    },
    {
        "id": 2428,
        "name": "大化",
        "parent_id": 353,
        "post": 451229,
        "n": 11
    },
    {
        "id": 2429,
        "name": "宜州",
        "parent_id": 353,
        "post": 451203,
        "n": 2
    },
    {
        "id": 2430,
        "name": "兴宾",
        "parent_id": 354,
        "post": 451302,
        "n": 1
    },
    {
        "id": 2431,
        "name": "忻城",
        "parent_id": 354,
        "post": 451321,
        "n": 2
    },
    {
        "id": 2432,
        "name": "象州",
        "parent_id": 354,
        "post": 451322,
        "n": 3
    },
    {
        "id": 2433,
        "name": "武宣",
        "parent_id": 354,
        "post": 451323,
        "n": 4
    },
    {
        "id": 2434,
        "name": "金秀",
        "parent_id": 354,
        "post": 451324,
        "n": 5
    },
    {
        "id": 2435,
        "name": "合山",
        "parent_id": 354,
        "post": 451381,
        "n": 6
    },
    {
        "id": 2436,
        "name": "江州",
        "parent_id": 355,
        "post": 451402,
        "n": 1
    },
    {
        "id": 2437,
        "name": "扶绥",
        "parent_id": 355,
        "post": 451421,
        "n": 2
    },
    {
        "id": 2438,
        "name": "宁明",
        "parent_id": 355,
        "post": 451422,
        "n": 3
    },
    {
        "id": 2439,
        "name": "龙州",
        "parent_id": 355,
        "post": 451423,
        "n": 4
    },
    {
        "id": 2440,
        "name": "大新",
        "parent_id": 355,
        "post": 451424,
        "n": 5
    },
    {
        "id": 2441,
        "name": "天等",
        "parent_id": 355,
        "post": 451425,
        "n": 6
    },
    {
        "id": 2442,
        "name": "凭祥",
        "parent_id": 355,
        "post": 451481,
        "n": 7
    },
    {
        "id": 2443,
        "name": "秀英",
        "parent_id": 356,
        "post": 460105,
        "n": 1
    },
    {
        "id": 2444,
        "name": "龙华",
        "parent_id": 356,
        "post": 460106,
        "n": 2
    },
    {
        "id": 2445,
        "name": "琼山",
        "parent_id": 356,
        "post": 460107,
        "n": 3
    },
    {
        "id": 2446,
        "name": "美兰",
        "parent_id": 356,
        "post": 460108,
        "n": 4
    },
    {
        "id": 2447,
        "name": "锦江",
        "parent_id": 375,
        "post": 510104,
        "n": 1
    },
    {
        "id": 2448,
        "name": "青羊",
        "parent_id": 375,
        "post": 510105,
        "n": 2
    },
    {
        "id": 2449,
        "name": "金牛",
        "parent_id": 375,
        "post": 510106,
        "n": 3
    },
    {
        "id": 2450,
        "name": "武侯",
        "parent_id": 375,
        "post": 510107,
        "n": 4
    },
    {
        "id": 2451,
        "name": "成华",
        "parent_id": 375,
        "post": 510108,
        "n": 5
    },
    {
        "id": 2452,
        "name": "龙泉驿",
        "parent_id": 375,
        "post": 510112,
        "n": 6
    },
    {
        "id": 2453,
        "name": "青白江",
        "parent_id": 375,
        "post": 510113,
        "n": 7
    },
    {
        "id": 2454,
        "name": "新都",
        "parent_id": 375,
        "post": 510114,
        "n": 8
    },
    {
        "id": 2455,
        "name": "温江",
        "parent_id": 375,
        "post": 510115,
        "n": 9
    },
    {
        "id": 2456,
        "name": "金堂",
        "parent_id": 375,
        "post": 510121,
        "n": 12
    },
    {
        "id": 2457,
        "name": "双流",
        "parent_id": 375,
        "post": 510116,
        "n": 10
    },
    {
        "id": 2458,
        "name": "郫都",
        "parent_id": 375,
        "post": 510117,
        "n": 11
    },
    {
        "id": 2459,
        "name": "大邑",
        "parent_id": 375,
        "post": 510129,
        "n": 13
    },
    {
        "id": 2460,
        "name": "蒲江",
        "parent_id": 375,
        "post": 510131,
        "n": 14
    },
    {
        "id": 2461,
        "name": "新津",
        "parent_id": 375,
        "post": 510132,
        "n": 15
    },
    {
        "id": 2462,
        "name": "都江堰",
        "parent_id": 375,
        "post": 510181,
        "n": 16
    },
    {
        "id": 2463,
        "name": "彭州",
        "parent_id": 375,
        "post": 510182,
        "n": 17
    },
    {
        "id": 2464,
        "name": "邛崃",
        "parent_id": 375,
        "post": 510183,
        "n": 18
    },
    {
        "id": 2465,
        "name": "崇州",
        "parent_id": 375,
        "post": 510184,
        "n": 19
    },
    {
        "id": 2466,
        "name": "自流井",
        "parent_id": 376,
        "post": 510302,
        "n": 1
    },
    {
        "id": 2467,
        "name": "贡井",
        "parent_id": 376,
        "post": 510303,
        "n": 2
    },
    {
        "id": 2468,
        "name": "大安",
        "parent_id": 376,
        "post": 510304,
        "n": 3
    },
    {
        "id": 2469,
        "name": "沿滩",
        "parent_id": 376,
        "post": 510311,
        "n": 4
    },
    {
        "id": 2470,
        "name": "荣县",
        "parent_id": 376,
        "post": 510321,
        "n": 5
    },
    {
        "id": 2471,
        "name": "富顺",
        "parent_id": 376,
        "post": 510322,
        "n": 6
    },
    {
        "id": 2472,
        "name": "东区",
        "parent_id": 377,
        "post": 510402,
        "n": 1
    },
    {
        "id": 2473,
        "name": "西区",
        "parent_id": 377,
        "post": 510403,
        "n": 2
    },
    {
        "id": 2474,
        "name": "仁和",
        "parent_id": 377,
        "post": 510411,
        "n": 3
    },
    {
        "id": 2475,
        "name": "米易",
        "parent_id": 377,
        "post": 510421,
        "n": 4
    },
    {
        "id": 2476,
        "name": "盐边",
        "parent_id": 377,
        "post": 510422,
        "n": 5
    },
    {
        "id": 2477,
        "name": "江阳",
        "parent_id": 378,
        "post": 510502,
        "n": 1
    },
    {
        "id": 2478,
        "name": "纳溪",
        "parent_id": 378,
        "post": 510503,
        "n": 2
    },
    {
        "id": 2479,
        "name": "龙马潭",
        "parent_id": 378,
        "post": 510504,
        "n": 3
    },
    {
        "id": 2480,
        "name": "泸县",
        "parent_id": 378,
        "post": 510521,
        "n": 4
    },
    {
        "id": 2481,
        "name": "合江",
        "parent_id": 378,
        "post": 510522,
        "n": 5
    },
    {
        "id": 2482,
        "name": "叙永",
        "parent_id": 378,
        "post": 510524,
        "n": 6
    },
    {
        "id": 2483,
        "name": "古蔺",
        "parent_id": 378,
        "post": 510525,
        "n": 7
    },
    {
        "id": 2484,
        "name": "旌阳",
        "parent_id": 379,
        "post": 510603,
        "n": 1
    },
    {
        "id": 2485,
        "name": "中江",
        "parent_id": 379,
        "post": 510623,
        "n": 3
    },
    {
        "id": 2486,
        "name": "罗江",
        "parent_id": 379,
        "post": 510604,
        "n": 2
    },
    {
        "id": 2487,
        "name": "广汉",
        "parent_id": 379,
        "post": 510681,
        "n": 4
    },
    {
        "id": 2488,
        "name": "什邡",
        "parent_id": 379,
        "post": 510682,
        "n": 5
    },
    {
        "id": 2489,
        "name": "绵竹",
        "parent_id": 379,
        "post": 510683,
        "n": 6
    },
    {
        "id": 2490,
        "name": "涪城",
        "parent_id": 380,
        "post": 510703,
        "n": 1
    },
    {
        "id": 2491,
        "name": "游仙",
        "parent_id": 380,
        "post": 510704,
        "n": 2
    },
    {
        "id": 2492,
        "name": "三台",
        "parent_id": 380,
        "post": 510722,
        "n": 4
    },
    {
        "id": 2493,
        "name": "盐亭",
        "parent_id": 380,
        "post": 510723,
        "n": 5
    },
    {
        "id": 2494,
        "name": "安州",
        "parent_id": 380,
        "post": 510705,
        "n": 3
    },
    {
        "id": 2495,
        "name": "梓潼",
        "parent_id": 380,
        "post": 510725,
        "n": 6
    },
    {
        "id": 2496,
        "name": "北川",
        "parent_id": 380,
        "post": 510726,
        "n": 7
    },
    {
        "id": 2497,
        "name": "平武",
        "parent_id": 380,
        "post": 510727,
        "n": 8
    },
    {
        "id": 2498,
        "name": "江油",
        "parent_id": 380,
        "post": 510781,
        "n": 9
    },
    {
        "id": 2499,
        "name": "利州",
        "parent_id": 381,
        "post": 510802,
        "n": 1
    },
    {
        "id": 2500,
        "name": "昭化",
        "parent_id": 381,
        "post": 510811,
        "n": 2
    },
    {
        "id": 2501,
        "name": "朝天",
        "parent_id": 381,
        "post": 510812,
        "n": 3
    },
    {
        "id": 2502,
        "name": "旺苍",
        "parent_id": 381,
        "post": 510821,
        "n": 4
    },
    {
        "id": 2503,
        "name": "青川",
        "parent_id": 381,
        "post": 510822,
        "n": 5
    },
    {
        "id": 2504,
        "name": "剑阁",
        "parent_id": 381,
        "post": 510823,
        "n": 6
    },
    {
        "id": 2505,
        "name": "苍溪",
        "parent_id": 381,
        "post": 510824,
        "n": 7
    },
    {
        "id": 2506,
        "name": "船山",
        "parent_id": 382,
        "post": 510903,
        "n": 1
    },
    {
        "id": 2507,
        "name": "安居",
        "parent_id": 382,
        "post": 510904,
        "n": 2
    },
    {
        "id": 2508,
        "name": "蓬溪",
        "parent_id": 382,
        "post": 510921,
        "n": 3
    },
    {
        "id": 2509,
        "name": "射洪",
        "parent_id": 382,
        "post": 510981,
        "n": 5
    },
    {
        "id": 2510,
        "name": "大英",
        "parent_id": 382,
        "post": 510923,
        "n": 4
    },
    {
        "id": 2511,
        "name": "市中",
        "parent_id": 383,
        "post": 511002,
        "n": 1
    },
    {
        "id": 2512,
        "name": "东兴",
        "parent_id": 383,
        "post": 511011,
        "n": 2
    },
    {
        "id": 2513,
        "name": "威远",
        "parent_id": 383,
        "post": 511024,
        "n": 3
    },
    {
        "id": 2514,
        "name": "资中",
        "parent_id": 383,
        "post": 511025,
        "n": 4
    },
    {
        "id": 2515,
        "name": "隆昌",
        "parent_id": 383,
        "post": 511083,
        "n": 5
    },
    {
        "id": 2516,
        "name": "市中",
        "parent_id": 384,
        "post": 511102,
        "n": 1
    },
    {
        "id": 2517,
        "name": "沙湾",
        "parent_id": 384,
        "post": 511111,
        "n": 2
    },
    {
        "id": 2518,
        "name": "五通桥",
        "parent_id": 384,
        "post": 511112,
        "n": 3
    },
    {
        "id": 2519,
        "name": "金口河",
        "parent_id": 384,
        "post": 511113,
        "n": 4
    },
    {
        "id": 2520,
        "name": "犍为",
        "parent_id": 384,
        "post": 511123,
        "n": 5
    },
    {
        "id": 2521,
        "name": "井研",
        "parent_id": 384,
        "post": 511124,
        "n": 6
    },
    {
        "id": 2522,
        "name": "夹江",
        "parent_id": 384,
        "post": 511126,
        "n": 7
    },
    {
        "id": 2523,
        "name": "沐川",
        "parent_id": 384,
        "post": 511129,
        "n": 8
    },
    {
        "id": 2524,
        "name": "峨边",
        "parent_id": 384,
        "post": 511132,
        "n": 9
    },
    {
        "id": 2525,
        "name": "马边",
        "parent_id": 384,
        "post": 511133,
        "n": 10
    },
    {
        "id": 2526,
        "name": "峨眉山",
        "parent_id": 384,
        "post": 511181,
        "n": 11
    },
    {
        "id": 2527,
        "name": "顺庆",
        "parent_id": 385,
        "post": 511302,
        "n": 1
    },
    {
        "id": 2528,
        "name": "高坪",
        "parent_id": 385,
        "post": 511303,
        "n": 2
    },
    {
        "id": 2529,
        "name": "嘉陵",
        "parent_id": 385,
        "post": 511304,
        "n": 3
    },
    {
        "id": 2530,
        "name": "南部",
        "parent_id": 385,
        "post": 511321,
        "n": 4
    },
    {
        "id": 2531,
        "name": "营山",
        "parent_id": 385,
        "post": 511322,
        "n": 5
    },
    {
        "id": 2532,
        "name": "蓬安",
        "parent_id": 385,
        "post": 511323,
        "n": 6
    },
    {
        "id": 2533,
        "name": "仪陇",
        "parent_id": 385,
        "post": 511324,
        "n": 7
    },
    {
        "id": 2534,
        "name": "西充",
        "parent_id": 385,
        "post": 511325,
        "n": 8
    },
    {
        "id": 2535,
        "name": "阆中",
        "parent_id": 385,
        "post": 511381,
        "n": 9
    },
    {
        "id": 2536,
        "name": "东坡",
        "parent_id": 386,
        "post": 511402,
        "n": 1
    },
    {
        "id": 2537,
        "name": "仁寿",
        "parent_id": 386,
        "post": 511421,
        "n": 2
    },
    {
        "id": 2538,
        "name": "彭山",
        "parent_id": 386,
        "post": 511422,
        "n": 3
    },
    {
        "id": 2539,
        "name": "洪雅",
        "parent_id": 386,
        "post": 511423,
        "n": 4
    },
    {
        "id": 2540,
        "name": "丹棱",
        "parent_id": 386,
        "post": 511424,
        "n": 5
    },
    {
        "id": 2541,
        "name": "青神",
        "parent_id": 386,
        "post": 511425,
        "n": 6
    },
    {
        "id": 2542,
        "name": "翠屏",
        "parent_id": 387,
        "post": 511502,
        "n": 1
    },
    {
        "id": 2543,
        "name": "南溪",
        "parent_id": 387,
        "post": 511503,
        "n": 2
    },
    {
        "id": 2544,
        "name": "叙州",
        "parent_id": 387,
        "post": 511504,
        "n": 3
    },
    {
        "id": 2545,
        "name": "江安",
        "parent_id": 387,
        "post": 511523,
        "n": 4
    },
    {
        "id": 2546,
        "name": "长宁",
        "parent_id": 387,
        "post": 511524,
        "n": 5
    },
    {
        "id": 2547,
        "name": "高县",
        "parent_id": 387,
        "post": 511525,
        "n": 6
    },
    {
        "id": 2548,
        "name": "珙县",
        "parent_id": 387,
        "post": 511526,
        "n": 7
    },
    {
        "id": 2549,
        "name": "筠连",
        "parent_id": 387,
        "post": 511527,
        "n": 8
    },
    {
        "id": 2550,
        "name": "兴文",
        "parent_id": 387,
        "post": 511528,
        "n": 9
    },
    {
        "id": 2551,
        "name": "屏山",
        "parent_id": 387,
        "post": 511529,
        "n": 10
    },
    {
        "id": 2552,
        "name": "广安",
        "parent_id": 388,
        "post": 511602,
        "n": 1
    },
    {
        "id": 2553,
        "name": "岳池",
        "parent_id": 388,
        "post": 511621,
        "n": 3
    },
    {
        "id": 2554,
        "name": "武胜",
        "parent_id": 388,
        "post": 511622,
        "n": 4
    },
    {
        "id": 2555,
        "name": "邻水",
        "parent_id": 388,
        "post": 511623,
        "n": 5
    },
    {
        "id": 2556,
        "name": "华蓥",
        "parent_id": 388,
        "post": 511681,
        "n": 6
    },
    {
        "id": 2557,
        "name": "通川",
        "parent_id": 389,
        "post": 511702,
        "n": 1
    },
    {
        "id": 2558,
        "name": "达川",
        "parent_id": 389,
        "post": 511721,
        "n": 2
    },
    {
        "id": 2559,
        "name": "宣汉",
        "parent_id": 389,
        "post": 511722,
        "n": 3
    },
    {
        "id": 2560,
        "name": "开江",
        "parent_id": 389,
        "post": 511723,
        "n": 4
    },
    {
        "id": 2561,
        "name": "大竹",
        "parent_id": 389,
        "post": 511724,
        "n": 5
    },
    {
        "id": 2562,
        "name": "渠县",
        "parent_id": 389,
        "post": 511725,
        "n": 6
    },
    {
        "id": 2563,
        "name": "万源",
        "parent_id": 389,
        "post": 511781,
        "n": 7
    },
    {
        "id": 2564,
        "name": "雨城",
        "parent_id": 390,
        "post": 511802,
        "n": 1
    },
    {
        "id": 2565,
        "name": "名山",
        "parent_id": 390,
        "post": 511803,
        "n": 2
    },
    {
        "id": 2566,
        "name": "荥经",
        "parent_id": 390,
        "post": 511822,
        "n": 3
    },
    {
        "id": 2567,
        "name": "汉源",
        "parent_id": 390,
        "post": 511823,
        "n": 4
    },
    {
        "id": 2568,
        "name": "石棉",
        "parent_id": 390,
        "post": 511824,
        "n": 5
    },
    {
        "id": 2569,
        "name": "天全",
        "parent_id": 390,
        "post": 511825,
        "n": 6
    },
    {
        "id": 2570,
        "name": "芦山",
        "parent_id": 390,
        "post": 511826,
        "n": 7
    },
    {
        "id": 2571,
        "name": "宝兴",
        "parent_id": 390,
        "post": 511827,
        "n": 8
    },
    {
        "id": 2572,
        "name": "巴州",
        "parent_id": 391,
        "post": 511902,
        "n": 1
    },
    {
        "id": 2573,
        "name": "通江",
        "parent_id": 391,
        "post": 511921,
        "n": 2
    },
    {
        "id": 2574,
        "name": "南江",
        "parent_id": 391,
        "post": 511922,
        "n": 3
    },
    {
        "id": 2575,
        "name": "平昌",
        "parent_id": 391,
        "post": 511923,
        "n": 4
    },
    {
        "id": 2576,
        "name": "雁江",
        "parent_id": 392,
        "post": 512002,
        "n": 1
    },
    {
        "id": 2577,
        "name": "安岳",
        "parent_id": 392,
        "post": 512021,
        "n": 2
    },
    {
        "id": 2578,
        "name": "乐至",
        "parent_id": 392,
        "post": 512022,
        "n": 3
    },
    {
        "id": 2579,
        "name": "简阳",
        "parent_id": 375,
        "post": 510185,
        "n": 4
    },
    {
        "id": 2580,
        "name": "马尔康",
        "parent_id": 393,
        "post": 513229,
        "n": 1
    },
    {
        "id": 2581,
        "name": "汶川",
        "parent_id": 393,
        "post": 513221,
        "n": 2
    },
    {
        "id": 2582,
        "name": "理县",
        "parent_id": 393,
        "post": 513222,
        "n": 3
    },
    {
        "id": 2583,
        "name": "茂县",
        "parent_id": 393,
        "post": 513223,
        "n": 4
    },
    {
        "id": 2584,
        "name": "松潘",
        "parent_id": 393,
        "post": 513224,
        "n": 5
    },
    {
        "id": 2585,
        "name": "九寨沟",
        "parent_id": 393,
        "post": 513225,
        "n": 6
    },
    {
        "id": 2586,
        "name": "金川",
        "parent_id": 393,
        "post": 513226,
        "n": 7
    },
    {
        "id": 2587,
        "name": "小金",
        "parent_id": 393,
        "post": 513227,
        "n": 8
    },
    {
        "id": 2588,
        "name": "黑水",
        "parent_id": 393,
        "post": 513228,
        "n": 9
    },
    {
        "id": 2589,
        "name": "壤塘",
        "parent_id": 393,
        "post": 513230,
        "n": 10
    },
    {
        "id": 2590,
        "name": "阿坝",
        "parent_id": 393,
        "post": 513231,
        "n": 11
    },
    {
        "id": 2591,
        "name": "若尔盖",
        "parent_id": 393,
        "post": 513232,
        "n": 12
    },
    {
        "id": 2592,
        "name": "红原",
        "parent_id": 393,
        "post": 513233,
        "n": 13
    },
    {
        "id": 2593,
        "name": "康定",
        "parent_id": 394,
        "post": 513301,
        "n": 1
    },
    {
        "id": 2594,
        "name": "泸定",
        "parent_id": 394,
        "post": 513322,
        "n": 2
    },
    {
        "id": 2595,
        "name": "丹巴",
        "parent_id": 394,
        "post": 513323,
        "n": 3
    },
    {
        "id": 2596,
        "name": "九龙",
        "parent_id": 394,
        "post": 513324,
        "n": 4
    },
    {
        "id": 2597,
        "name": "雅江",
        "parent_id": 394,
        "post": 513325,
        "n": 5
    },
    {
        "id": 2598,
        "name": "道孚",
        "parent_id": 394,
        "post": 513326,
        "n": 6
    },
    {
        "id": 2599,
        "name": "炉霍",
        "parent_id": 394,
        "post": 513327,
        "n": 7
    },
    {
        "id": 2600,
        "name": "甘孜",
        "parent_id": 394,
        "post": 513328,
        "n": 8
    },
    {
        "id": 2601,
        "name": "新龙",
        "parent_id": 394,
        "post": 513329,
        "n": 9
    },
    {
        "id": 2602,
        "name": "德格",
        "parent_id": 394,
        "post": 513330,
        "n": 10
    },
    {
        "id": 2603,
        "name": "白玉",
        "parent_id": 394,
        "post": 513331,
        "n": 11
    },
    {
        "id": 2604,
        "name": "石渠",
        "parent_id": 394,
        "post": 513332,
        "n": 12
    },
    {
        "id": 2605,
        "name": "色达",
        "parent_id": 394,
        "post": 513333,
        "n": 13
    },
    {
        "id": 2606,
        "name": "理塘",
        "parent_id": 394,
        "post": 513334,
        "n": 14
    },
    {
        "id": 2607,
        "name": "巴塘",
        "parent_id": 394,
        "post": 513335,
        "n": 15
    },
    {
        "id": 2608,
        "name": "乡城",
        "parent_id": 394,
        "post": 513336,
        "n": 16
    },
    {
        "id": 2609,
        "name": "稻城",
        "parent_id": 394,
        "post": 513337,
        "n": 17
    },
    {
        "id": 2610,
        "name": "得荣",
        "parent_id": 394,
        "post": 513338,
        "n": 18
    },
    {
        "id": 2611,
        "name": "西昌",
        "parent_id": 395,
        "post": 513401,
        "n": 1
    },
    {
        "id": 2612,
        "name": "木里",
        "parent_id": 395,
        "post": 513422,
        "n": 2
    },
    {
        "id": 2613,
        "name": "盐源",
        "parent_id": 395,
        "post": 513423,
        "n": 3
    },
    {
        "id": 2614,
        "name": "德昌",
        "parent_id": 395,
        "post": 513424,
        "n": 4
    },
    {
        "id": 2615,
        "name": "会理",
        "parent_id": 395,
        "post": 513425,
        "n": 5
    },
    {
        "id": 2616,
        "name": "会东",
        "parent_id": 395,
        "post": 513426,
        "n": 6
    },
    {
        "id": 2617,
        "name": "宁南",
        "parent_id": 395,
        "post": 513427,
        "n": 7
    },
    {
        "id": 2618,
        "name": "普格",
        "parent_id": 395,
        "post": 513428,
        "n": 8
    },
    {
        "id": 2619,
        "name": "布拖",
        "parent_id": 395,
        "post": 513429,
        "n": 9
    },
    {
        "id": 2620,
        "name": "金阳",
        "parent_id": 395,
        "post": 513430,
        "n": 10
    },
    {
        "id": 2621,
        "name": "昭觉",
        "parent_id": 395,
        "post": 513431,
        "n": 11
    },
    {
        "id": 2622,
        "name": "喜德",
        "parent_id": 395,
        "post": 513432,
        "n": 12
    },
    {
        "id": 2623,
        "name": "冕宁",
        "parent_id": 395,
        "post": 513433,
        "n": 13
    },
    {
        "id": 2624,
        "name": "越西",
        "parent_id": 395,
        "post": 513434,
        "n": 14
    },
    {
        "id": 2625,
        "name": "甘洛",
        "parent_id": 395,
        "post": 513435,
        "n": 15
    },
    {
        "id": 2626,
        "name": "美姑",
        "parent_id": 395,
        "post": 513436,
        "n": 16
    },
    {
        "id": 2627,
        "name": "雷波",
        "parent_id": 395,
        "post": 513437,
        "n": 17
    },
    {
        "id": 2628,
        "name": "观山湖",
        "parent_id": 396,
        "post": "",
        "n": 1
    },
    {
        "id": 2629,
        "name": "南明",
        "parent_id": 396,
        "post": 520102,
        "n": 2
    },
    {
        "id": 2630,
        "name": "云岩",
        "parent_id": 396,
        "post": 520103,
        "n": 3
    },
    {
        "id": 2631,
        "name": "花溪",
        "parent_id": 396,
        "post": 520111,
        "n": 4
    },
    {
        "id": 2632,
        "name": "乌当",
        "parent_id": 396,
        "post": 520112,
        "n": 5
    },
    {
        "id": 2633,
        "name": "白云",
        "parent_id": 396,
        "post": 520113,
        "n": 6
    },
    {
        "id": 2634,
        "name": "开阳",
        "parent_id": 396,
        "post": 520121,
        "n": 7
    },
    {
        "id": 2635,
        "name": "息烽",
        "parent_id": 396,
        "post": 520122,
        "n": 8
    },
    {
        "id": 2636,
        "name": "修文",
        "parent_id": 396,
        "post": 520123,
        "n": 9
    },
    {
        "id": 2637,
        "name": "清镇",
        "parent_id": 396,
        "post": 520181,
        "n": 10
    },
    {
        "id": 2638,
        "name": "钟山",
        "parent_id": 397,
        "post": 520201,
        "n": 1
    },
    {
        "id": 2639,
        "name": "六枝特",
        "parent_id": 397,
        "post": 520203,
        "n": 2
    },
    {
        "id": 2640,
        "name": "水城",
        "parent_id": 397,
        "post": 520221,
        "n": 3
    },
    {
        "id": 2641,
        "name": "盘州",
        "parent_id": 397,
        "post": 520281,
        "n": 4
    },
    {
        "id": 2642,
        "name": "红花岗",
        "parent_id": 398,
        "post": 520302,
        "n": 1
    },
    {
        "id": 2643,
        "name": "汇川",
        "parent_id": 398,
        "post": 520303,
        "n": 2
    },
    {
        "id": 2644,
        "name": "播州",
        "parent_id": 398,
        "post": 520304,
        "n": 3
    },
    {
        "id": 2645,
        "name": "桐梓",
        "parent_id": 398,
        "post": 520322,
        "n": 4
    },
    {
        "id": 2646,
        "name": "绥阳",
        "parent_id": 398,
        "post": 520323,
        "n": 5
    },
    {
        "id": 2647,
        "name": "正安",
        "parent_id": 398,
        "post": 520324,
        "n": 6
    },
    {
        "id": 2648,
        "name": "道真",
        "parent_id": 398,
        "post": 520325,
        "n": 7
    },
    {
        "id": 2649,
        "name": "务川",
        "parent_id": 398,
        "post": 520326,
        "n": 8
    },
    {
        "id": 2650,
        "name": "凤冈",
        "parent_id": 398,
        "post": 520327,
        "n": 9
    },
    {
        "id": 2651,
        "name": "湄潭",
        "parent_id": 398,
        "post": 520328,
        "n": 10
    },
    {
        "id": 2652,
        "name": "余庆",
        "parent_id": 398,
        "post": 520329,
        "n": 11
    },
    {
        "id": 2653,
        "name": "习水",
        "parent_id": 398,
        "post": 520330,
        "n": 12
    },
    {
        "id": 2654,
        "name": "赤水",
        "parent_id": 398,
        "post": 520381,
        "n": 13
    },
    {
        "id": 2655,
        "name": "仁怀",
        "parent_id": 398,
        "post": 520382,
        "n": 14
    },
    {
        "id": 2656,
        "name": "西秀",
        "parent_id": 399,
        "post": 520402,
        "n": 1
    },
    {
        "id": 2657,
        "name": "平坝",
        "parent_id": 399,
        "post": 520403,
        "n": 2
    },
    {
        "id": 2658,
        "name": "普定",
        "parent_id": 399,
        "post": 520422,
        "n": 3
    },
    {
        "id": 2659,
        "name": "镇宁",
        "parent_id": 399,
        "post": 520423,
        "n": 4
    },
    {
        "id": 2660,
        "name": "关岭",
        "parent_id": 399,
        "post": 520424,
        "n": 5
    },
    {
        "id": 2661,
        "name": "紫云",
        "parent_id": 399,
        "post": 520425,
        "n": 6
    },
    {
        "id": 2662,
        "name": "七星关",
        "parent_id": 400,
        "post": 520502,
        "n": 1
    },
    {
        "id": 2663,
        "name": "大方",
        "parent_id": 400,
        "post": 520521,
        "n": 2
    },
    {
        "id": 2664,
        "name": "黔西",
        "parent_id": 400,
        "post": 520522,
        "n": 3
    },
    {
        "id": 2665,
        "name": "金沙",
        "parent_id": 400,
        "post": 520523,
        "n": 4
    },
    {
        "id": 2666,
        "name": "织金",
        "parent_id": 400,
        "post": 520524,
        "n": 5
    },
    {
        "id": 2667,
        "name": "纳雍",
        "parent_id": 400,
        "post": 520525,
        "n": 6
    },
    {
        "id": 2668,
        "name": "威宁",
        "parent_id": 400,
        "post": 520526,
        "n": 7
    },
    {
        "id": 2669,
        "name": "赫章",
        "parent_id": 400,
        "post": 520527,
        "n": 8
    },
    {
        "id": 2670,
        "name": "碧江",
        "parent_id": 401,
        "post": 520602,
        "n": 1
    },
    {
        "id": 2671,
        "name": "万山",
        "parent_id": 401,
        "post": 520603,
        "n": 2
    },
    {
        "id": 2672,
        "name": "江口",
        "parent_id": 401,
        "post": 520621,
        "n": 3
    },
    {
        "id": 2673,
        "name": "玉屏",
        "parent_id": 401,
        "post": 520622,
        "n": 4
    },
    {
        "id": 2674,
        "name": "石阡",
        "parent_id": 401,
        "post": 520623,
        "n": 5
    },
    {
        "id": 2675,
        "name": "思南",
        "parent_id": 401,
        "post": 520624,
        "n": 6
    },
    {
        "id": 2676,
        "name": "印江",
        "parent_id": 401,
        "post": 520625,
        "n": 7
    },
    {
        "id": 2677,
        "name": "德江",
        "parent_id": 401,
        "post": 520626,
        "n": 8
    },
    {
        "id": 2678,
        "name": "沿河",
        "parent_id": 401,
        "post": 520627,
        "n": 9
    },
    {
        "id": 2679,
        "name": "松桃",
        "parent_id": 401,
        "post": 520628,
        "n": 10
    },
    {
        "id": 2680,
        "name": "兴义",
        "parent_id": 402,
        "post": 522301,
        "n": 1
    },
    {
        "id": 2681,
        "name": "兴仁",
        "parent_id": 402,
        "post": 522322,
        "n": 2
    },
    {
        "id": 2682,
        "name": "普安",
        "parent_id": 402,
        "post": 522323,
        "n": 3
    },
    {
        "id": 2683,
        "name": "晴隆",
        "parent_id": 402,
        "post": 522324,
        "n": 4
    },
    {
        "id": 2684,
        "name": "贞丰",
        "parent_id": 402,
        "post": 522325,
        "n": 5
    },
    {
        "id": 2685,
        "name": "望谟",
        "parent_id": 402,
        "post": 522326,
        "n": 6
    },
    {
        "id": 2686,
        "name": "册亨",
        "parent_id": 402,
        "post": 522327,
        "n": 7
    },
    {
        "id": 2687,
        "name": "安龙",
        "parent_id": 402,
        "post": 522328,
        "n": 8
    },
    {
        "id": 2688,
        "name": "凯里",
        "parent_id": 403,
        "post": 522601,
        "n": 1
    },
    {
        "id": 2689,
        "name": "黄平",
        "parent_id": 403,
        "post": 522622,
        "n": 2
    },
    {
        "id": 2690,
        "name": "施秉",
        "parent_id": 403,
        "post": 522623,
        "n": 3
    },
    {
        "id": 2691,
        "name": "三穗",
        "parent_id": 403,
        "post": 522624,
        "n": 4
    },
    {
        "id": 2692,
        "name": "镇远",
        "parent_id": 403,
        "post": 522625,
        "n": 5
    },
    {
        "id": 2693,
        "name": "岑巩",
        "parent_id": 403,
        "post": 522626,
        "n": 6
    },
    {
        "id": 2694,
        "name": "天柱",
        "parent_id": 403,
        "post": 522627,
        "n": 7
    },
    {
        "id": 2695,
        "name": "锦屏",
        "parent_id": 403,
        "post": 522628,
        "n": 8
    },
    {
        "id": 2696,
        "name": "剑河",
        "parent_id": 403,
        "post": 522629,
        "n": 9
    },
    {
        "id": 2697,
        "name": "台江",
        "parent_id": 403,
        "post": 522630,
        "n": 10
    },
    {
        "id": 2698,
        "name": "黎平",
        "parent_id": 403,
        "post": 522631,
        "n": 11
    },
    {
        "id": 2699,
        "name": "榕江",
        "parent_id": 403,
        "post": 522632,
        "n": 12
    },
    {
        "id": 2700,
        "name": "从江",
        "parent_id": 403,
        "post": 522633,
        "n": 13
    },
    {
        "id": 2701,
        "name": "雷山",
        "parent_id": 403,
        "post": 522634,
        "n": 14
    },
    {
        "id": 2702,
        "name": "麻江",
        "parent_id": 403,
        "post": 522635,
        "n": 15
    },
    {
        "id": 2703,
        "name": "丹寨",
        "parent_id": 403,
        "post": 522636,
        "n": 16
    },
    {
        "id": 2704,
        "name": "都匀",
        "parent_id": 404,
        "post": 522701,
        "n": 1
    },
    {
        "id": 2705,
        "name": "福泉",
        "parent_id": 404,
        "post": 522702,
        "n": 2
    },
    {
        "id": 2706,
        "name": "荔波",
        "parent_id": 404,
        "post": 522722,
        "n": 3
    },
    {
        "id": 2707,
        "name": "贵定",
        "parent_id": 404,
        "post": 522723,
        "n": 4
    },
    {
        "id": 2708,
        "name": "瓮安",
        "parent_id": 404,
        "post": 522725,
        "n": 5
    },
    {
        "id": 2709,
        "name": "独山",
        "parent_id": 404,
        "post": 522726,
        "n": 6
    },
    {
        "id": 2710,
        "name": "平塘",
        "parent_id": 404,
        "post": 522727,
        "n": 7
    },
    {
        "id": 2711,
        "name": "罗甸",
        "parent_id": 404,
        "post": 522728,
        "n": 8
    },
    {
        "id": 2712,
        "name": "长顺",
        "parent_id": 404,
        "post": 522729,
        "n": 9
    },
    {
        "id": 2713,
        "name": "龙里",
        "parent_id": 404,
        "post": 522730,
        "n": 10
    },
    {
        "id": 2714,
        "name": "惠水",
        "parent_id": 404,
        "post": 522731,
        "n": 11
    },
    {
        "id": 2715,
        "name": "三都",
        "parent_id": 404,
        "post": 522732,
        "n": 12
    },
    {
        "id": 2716,
        "name": "五华",
        "parent_id": 405,
        "post": 530102,
        "n": 1
    },
    {
        "id": 2717,
        "name": "盘龙",
        "parent_id": 405,
        "post": 530103,
        "n": 2
    },
    {
        "id": 2718,
        "name": "官渡",
        "parent_id": 405,
        "post": 530111,
        "n": 3
    },
    {
        "id": 2719,
        "name": "西山",
        "parent_id": 405,
        "post": 530112,
        "n": 4
    },
    {
        "id": 2720,
        "name": "东川",
        "parent_id": 405,
        "post": 530113,
        "n": 5
    },
    {
        "id": 2721,
        "name": "呈贡",
        "parent_id": 405,
        "post": 530114,
        "n": 6
    },
    {
        "id": 2722,
        "name": "晋宁",
        "parent_id": 405,
        "post": 530115,
        "n": 7
    },
    {
        "id": 2723,
        "name": "富民",
        "parent_id": 405,
        "post": 530124,
        "n": 8
    },
    {
        "id": 2724,
        "name": "宜良",
        "parent_id": 405,
        "post": 530125,
        "n": 9
    },
    {
        "id": 2725,
        "name": "石林",
        "parent_id": 405,
        "post": 530126,
        "n": 10
    },
    {
        "id": 2726,
        "name": "嵩明",
        "parent_id": 405,
        "post": 530127,
        "n": 11
    },
    {
        "id": 2727,
        "name": "禄劝",
        "parent_id": 405,
        "post": 530128,
        "n": 12
    },
    {
        "id": 2728,
        "name": "寻甸",
        "parent_id": 405,
        "post": 530129,
        "n": 13
    },
    {
        "id": 2729,
        "name": "安宁",
        "parent_id": 405,
        "post": 530181,
        "n": 14
    },
    {
        "id": 2730,
        "name": "麒麟",
        "parent_id": 406,
        "post": 530302,
        "n": 1
    },
    {
        "id": 2731,
        "name": "马龙",
        "parent_id": 406,
        "post": 530304,
        "n": 3
    },
    {
        "id": 2732,
        "name": "陆良",
        "parent_id": 406,
        "post": 530322,
        "n": 4
    },
    {
        "id": 2733,
        "name": "师宗",
        "parent_id": 406,
        "post": 530323,
        "n": 5
    },
    {
        "id": 2734,
        "name": "罗平",
        "parent_id": 406,
        "post": 530324,
        "n": 6
    },
    {
        "id": 2735,
        "name": "富源",
        "parent_id": 406,
        "post": 530325,
        "n": 7
    },
    {
        "id": 2736,
        "name": "会泽",
        "parent_id": 406,
        "post": 530326,
        "n": 8
    },
    {
        "id": 2737,
        "name": "沾益",
        "parent_id": 406,
        "post": 530303,
        "n": 2
    },
    {
        "id": 2738,
        "name": "宣威",
        "parent_id": 406,
        "post": 530381,
        "n": 9
    },
    {
        "id": 2739,
        "name": "红塔",
        "parent_id": 407,
        "post": 530402,
        "n": 1
    },
    {
        "id": 2740,
        "name": "江川",
        "parent_id": 407,
        "post": 530421,
        "n": 2
    },
    {
        "id": 2741,
        "name": "澄江",
        "parent_id": 407,
        "post": 530481,
        "n": 9
    },
    {
        "id": 2742,
        "name": "通海",
        "parent_id": 407,
        "post": 530423,
        "n": 3
    },
    {
        "id": 2743,
        "name": "华宁",
        "parent_id": 407,
        "post": 530424,
        "n": 4
    },
    {
        "id": 2744,
        "name": "易门",
        "parent_id": 407,
        "post": 530425,
        "n": 5
    },
    {
        "id": 2745,
        "name": "峨山",
        "parent_id": 407,
        "post": 530426,
        "n": 6
    },
    {
        "id": 2746,
        "name": "新平",
        "parent_id": 407,
        "post": 530427,
        "n": 7
    },
    {
        "id": 2747,
        "name": "元江",
        "parent_id": 407,
        "post": 530428,
        "n": 8
    },
    {
        "id": 2748,
        "name": "昭阳",
        "parent_id": 408,
        "post": 530602,
        "n": 1
    },
    {
        "id": 2749,
        "name": "鲁甸",
        "parent_id": 408,
        "post": 530621,
        "n": 2
    },
    {
        "id": 2750,
        "name": "巧家",
        "parent_id": 408,
        "post": 530622,
        "n": 3
    },
    {
        "id": 2751,
        "name": "盐津",
        "parent_id": 408,
        "post": 530623,
        "n": 4
    },
    {
        "id": 2752,
        "name": "大关",
        "parent_id": 408,
        "post": 530624,
        "n": 5
    },
    {
        "id": 2753,
        "name": "永善",
        "parent_id": 408,
        "post": 530625,
        "n": 6
    },
    {
        "id": 2754,
        "name": "绥江",
        "parent_id": 408,
        "post": 530626,
        "n": 7
    },
    {
        "id": 2755,
        "name": "镇雄",
        "parent_id": 408,
        "post": 530627,
        "n": 8
    },
    {
        "id": 2756,
        "name": "彝良",
        "parent_id": 408,
        "post": 530628,
        "n": 9
    },
    {
        "id": 2757,
        "name": "威信",
        "parent_id": 408,
        "post": 530629,
        "n": 10
    },
    {
        "id": 2758,
        "name": "水富",
        "parent_id": 408,
        "post": 530630,
        "n": 11
    },
    {
        "id": 2759,
        "name": "古城",
        "parent_id": 409,
        "post": 530702,
        "n": 1
    },
    {
        "id": 2760,
        "name": "玉龙",
        "parent_id": 409,
        "post": 530721,
        "n": 2
    },
    {
        "id": 2761,
        "name": "永胜",
        "parent_id": 409,
        "post": 530722,
        "n": 3
    },
    {
        "id": 2762,
        "name": "华坪",
        "parent_id": 409,
        "post": 530723,
        "n": 4
    },
    {
        "id": 2763,
        "name": "宁蒗",
        "parent_id": 409,
        "post": 530724,
        "n": 5
    },
    {
        "id": 2764,
        "name": "思茅",
        "parent_id": 410,
        "post": 530802,
        "n": 1
    },
    {
        "id": 2765,
        "name": "宁洱",
        "parent_id": 410,
        "post": 530821,
        "n": 2
    },
    {
        "id": 2766,
        "name": "墨江",
        "parent_id": 410,
        "post": 530822,
        "n": 3
    },
    {
        "id": 2767,
        "name": "景东",
        "parent_id": 410,
        "post": 530823,
        "n": 4
    },
    {
        "id": 2768,
        "name": "景谷",
        "parent_id": 410,
        "post": 530824,
        "n": 5
    },
    {
        "id": 2769,
        "name": "镇沅",
        "parent_id": 410,
        "post": 530825,
        "n": 6
    },
    {
        "id": 2770,
        "name": "江城",
        "parent_id": 410,
        "post": 530826,
        "n": 7
    },
    {
        "id": 2771,
        "name": "孟连",
        "parent_id": 410,
        "post": 530827,
        "n": 8
    },
    {
        "id": 2772,
        "name": "澜沧",
        "parent_id": 410,
        "post": 530828,
        "n": 9
    },
    {
        "id": 2773,
        "name": "西盟",
        "parent_id": 410,
        "post": 530829,
        "n": 10
    },
    {
        "id": 2774,
        "name": "临翔",
        "parent_id": 411,
        "post": 530902,
        "n": 1
    },
    {
        "id": 2775,
        "name": "凤庆",
        "parent_id": 411,
        "post": 530921,
        "n": 2
    },
    {
        "id": 2776,
        "name": "云县",
        "parent_id": 411,
        "post": 530922,
        "n": 3
    },
    {
        "id": 2777,
        "name": "永德",
        "parent_id": 411,
        "post": 530923,
        "n": 4
    },
    {
        "id": 2778,
        "name": "镇康",
        "parent_id": 411,
        "post": 530924,
        "n": 5
    },
    {
        "id": 2779,
        "name": "双江",
        "parent_id": 411,
        "post": 530925,
        "n": 6
    },
    {
        "id": 2780,
        "name": "耿马",
        "parent_id": 411,
        "post": 530926,
        "n": 7
    },
    {
        "id": 2781,
        "name": "沧源",
        "parent_id": 411,
        "post": 530927,
        "n": 8
    },
    {
        "id": 2782,
        "name": "楚雄",
        "parent_id": 412,
        "post": 532301,
        "n": 1
    },
    {
        "id": 2783,
        "name": "双柏",
        "parent_id": 412,
        "post": 532322,
        "n": 2
    },
    {
        "id": 2784,
        "name": "牟定",
        "parent_id": 412,
        "post": 532323,
        "n": 3
    },
    {
        "id": 2785,
        "name": "南华",
        "parent_id": 412,
        "post": 532324,
        "n": 4
    },
    {
        "id": 2786,
        "name": "姚安",
        "parent_id": 412,
        "post": 532325,
        "n": 5
    },
    {
        "id": 2787,
        "name": "大姚",
        "parent_id": 412,
        "post": 532326,
        "n": 6
    },
    {
        "id": 2788,
        "name": "永仁",
        "parent_id": 412,
        "post": 532327,
        "n": 7
    },
    {
        "id": 2789,
        "name": "元谋",
        "parent_id": 412,
        "post": 532328,
        "n": 8
    },
    {
        "id": 2790,
        "name": "武定",
        "parent_id": 412,
        "post": 532329,
        "n": 9
    },
    {
        "id": 2791,
        "name": "禄丰",
        "parent_id": 412,
        "post": 532331,
        "n": 10
    },
    {
        "id": 2792,
        "name": "个旧",
        "parent_id": 413,
        "post": 532501,
        "n": 1
    },
    {
        "id": 2793,
        "name": "开远",
        "parent_id": 413,
        "post": 532502,
        "n": 2
    },
    {
        "id": 2794,
        "name": "蒙自",
        "parent_id": 413,
        "post": 532503,
        "n": 3
    },
    {
        "id": 2795,
        "name": "屏边",
        "parent_id": 413,
        "post": 532523,
        "n": 4
    },
    {
        "id": 2796,
        "name": "建水",
        "parent_id": 413,
        "post": 532524,
        "n": 5
    },
    {
        "id": 2797,
        "name": "石屏",
        "parent_id": 413,
        "post": 532525,
        "n": 6
    },
    {
        "id": 2798,
        "name": "弥勒",
        "parent_id": 413,
        "post": 532526,
        "n": 7
    },
    {
        "id": 2799,
        "name": "泸西",
        "parent_id": 413,
        "post": 532527,
        "n": 8
    },
    {
        "id": 2800,
        "name": "元阳",
        "parent_id": 413,
        "post": 532528,
        "n": 9
    },
    {
        "id": 2801,
        "name": "红河",
        "parent_id": 413,
        "post": 532529,
        "n": 10
    },
    {
        "id": 2802,
        "name": "金平",
        "parent_id": 413,
        "post": 532530,
        "n": 11
    },
    {
        "id": 2803,
        "name": "绿春",
        "parent_id": 413,
        "post": 532531,
        "n": 12
    },
    {
        "id": 2804,
        "name": "河口",
        "parent_id": 413,
        "post": 532532,
        "n": 13
    },
    {
        "id": 2805,
        "name": "文山",
        "parent_id": 414,
        "post": 532601,
        "n": 1
    },
    {
        "id": 2806,
        "name": "砚山",
        "parent_id": 414,
        "post": 532622,
        "n": 2
    },
    {
        "id": 2807,
        "name": "西畴",
        "parent_id": 414,
        "post": 532623,
        "n": 3
    },
    {
        "id": 2808,
        "name": "麻栗坡",
        "parent_id": 414,
        "post": 532624,
        "n": 4
    },
    {
        "id": 2809,
        "name": "马关",
        "parent_id": 414,
        "post": 532625,
        "n": 5
    },
    {
        "id": 2810,
        "name": "丘北",
        "parent_id": 414,
        "post": 532626,
        "n": 6
    },
    {
        "id": 2811,
        "name": "广南",
        "parent_id": 414,
        "post": 532627,
        "n": 7
    },
    {
        "id": 2812,
        "name": "富宁",
        "parent_id": 414,
        "post": 532628,
        "n": 8
    },
    {
        "id": 2813,
        "name": "景洪",
        "parent_id": 415,
        "post": 532801,
        "n": 1
    },
    {
        "id": 2814,
        "name": "勐海",
        "parent_id": 415,
        "post": 532822,
        "n": 2
    },
    {
        "id": 2815,
        "name": "勐腊",
        "parent_id": 415,
        "post": 532823,
        "n": 3
    },
    {
        "id": 2816,
        "name": "大理",
        "parent_id": 416,
        "post": 532901,
        "n": 1
    },
    {
        "id": 2817,
        "name": "漾濞",
        "parent_id": 416,
        "post": 532922,
        "n": 2
    },
    {
        "id": 2818,
        "name": "祥云",
        "parent_id": 416,
        "post": 532923,
        "n": 3
    },
    {
        "id": 2819,
        "name": "宾川",
        "parent_id": 416,
        "post": 532924,
        "n": 4
    },
    {
        "id": 2820,
        "name": "弥渡",
        "parent_id": 416,
        "post": 532925,
        "n": 5
    },
    {
        "id": 2821,
        "name": "南涧",
        "parent_id": 416,
        "post": 532926,
        "n": 6
    },
    {
        "id": 2822,
        "name": "巍山",
        "parent_id": 416,
        "post": 532927,
        "n": 7
    },
    {
        "id": 2823,
        "name": "永平",
        "parent_id": 416,
        "post": 532928,
        "n": 8
    },
    {
        "id": 2824,
        "name": "云龙",
        "parent_id": 416,
        "post": 532929,
        "n": 9
    },
    {
        "id": 2825,
        "name": "洱源",
        "parent_id": 416,
        "post": 532930,
        "n": 10
    },
    {
        "id": 2826,
        "name": "剑川",
        "parent_id": 416,
        "post": 532931,
        "n": 11
    },
    {
        "id": 2827,
        "name": "鹤庆",
        "parent_id": 416,
        "post": 532932,
        "n": 12
    },
    {
        "id": 2828,
        "name": "瑞丽",
        "parent_id": 417,
        "post": 533102,
        "n": 1
    },
    {
        "id": 2829,
        "name": "芒市",
        "parent_id": 417,
        "post": 533103,
        "n": 2
    },
    {
        "id": 2830,
        "name": "梁河",
        "parent_id": 417,
        "post": 533122,
        "n": 3
    },
    {
        "id": 2831,
        "name": "盈江",
        "parent_id": 417,
        "post": 533123,
        "n": 4
    },
    {
        "id": 2832,
        "name": "陇川",
        "parent_id": 417,
        "post": 533124,
        "n": 5
    },
    {
        "id": 2833,
        "name": "泸水",
        "parent_id": 418,
        "post": 533301,
        "n": 1
    },
    {
        "id": 2834,
        "name": "福贡",
        "parent_id": 418,
        "post": 533323,
        "n": 2
    },
    {
        "id": 2835,
        "name": "贡山",
        "parent_id": 418,
        "post": 533324,
        "n": 3
    },
    {
        "id": 2836,
        "name": "兰坪",
        "parent_id": 418,
        "post": 533325,
        "n": 4
    },
    {
        "id": 2837,
        "name": "香格里拉",
        "parent_id": 419,
        "post": 533421,
        "n": 1
    },
    {
        "id": 2838,
        "name": "德钦",
        "parent_id": 419,
        "post": 533422,
        "n": 2
    },
    {
        "id": 2839,
        "name": "维西",
        "parent_id": 419,
        "post": 533423,
        "n": 3
    },
    {
        "id": 2840,
        "name": "隆阳",
        "parent_id": 420,
        "post": 530502,
        "n": 1
    },
    {
        "id": 2841,
        "name": "施甸",
        "parent_id": 420,
        "post": 530521,
        "n": 2
    },
    {
        "id": 2842,
        "name": "腾冲",
        "parent_id": 420,
        "post": 530522,
        "n": 3
    },
    {
        "id": 2843,
        "name": "龙陵",
        "parent_id": 420,
        "post": 530523,
        "n": 4
    },
    {
        "id": 2844,
        "name": "昌宁",
        "parent_id": 420,
        "post": 530524,
        "n": 5
    },
    {
        "id": 2845,
        "name": "城关",
        "parent_id": 421,
        "post": 540102,
        "n": 1
    },
    {
        "id": 2846,
        "name": "林周",
        "parent_id": 421,
        "post": 540121,
        "n": 3
    },
    {
        "id": 2847,
        "name": "当雄",
        "parent_id": 421,
        "post": 540122,
        "n": 4
    },
    {
        "id": 2848,
        "name": "尼木",
        "parent_id": 421,
        "post": 540123,
        "n": 5
    },
    {
        "id": 2849,
        "name": "曲水",
        "parent_id": 421,
        "post": 540124,
        "n": 6
    },
    {
        "id": 2850,
        "name": "堆龙德庆",
        "parent_id": 421,
        "post": 540125,
        "n": 7
    },
    {
        "id": 2851,
        "name": "达孜",
        "parent_id": 421,
        "post": 540104,
        "n": 2
    },
    {
        "id": 2852,
        "name": "墨竹工卡",
        "parent_id": 421,
        "post": 540127,
        "n": 8
    },
    {
        "id": 2853,
        "name": "卡若",
        "parent_id": 422,
        "post": 542121,
        "n": 1
    },
    {
        "id": 2854,
        "name": "江达",
        "parent_id": 422,
        "post": 542122,
        "n": 2
    },
    {
        "id": 2855,
        "name": "贡觉",
        "parent_id": 422,
        "post": 542123,
        "n": 3
    },
    {
        "id": 2856,
        "name": "类乌齐",
        "parent_id": 422,
        "post": 542124,
        "n": 4
    },
    {
        "id": 2857,
        "name": "丁青",
        "parent_id": 422,
        "post": 542125,
        "n": 5
    },
    {
        "id": 2858,
        "name": "察雅",
        "parent_id": 422,
        "post": 542126,
        "n": 6
    },
    {
        "id": 2859,
        "name": "八宿",
        "parent_id": 422,
        "post": 542127,
        "n": 7
    },
    {
        "id": 2860,
        "name": "左贡",
        "parent_id": 422,
        "post": 542128,
        "n": 8
    },
    {
        "id": 2861,
        "name": "芒康",
        "parent_id": 422,
        "post": 542129,
        "n": 9
    },
    {
        "id": 2862,
        "name": "洛隆",
        "parent_id": 422,
        "post": 542132,
        "n": 10
    },
    {
        "id": 2863,
        "name": "边坝",
        "parent_id": 422,
        "post": 542133,
        "n": 11
    },
    {
        "id": 2864,
        "name": "乃东",
        "parent_id": 423,
        "post": 540502,
        "n": 1
    },
    {
        "id": 2865,
        "name": "扎囊",
        "parent_id": 423,
        "post": 540521,
        "n": 2
    },
    {
        "id": 2866,
        "name": "贡嘎",
        "parent_id": 423,
        "post": 540522,
        "n": 3
    },
    {
        "id": 2867,
        "name": "桑日",
        "parent_id": 423,
        "post": 540523,
        "n": 4
    },
    {
        "id": 2868,
        "name": "琼结",
        "parent_id": 423,
        "post": 540524,
        "n": 5
    },
    {
        "id": 2869,
        "name": "曲松",
        "parent_id": 423,
        "post": 540525,
        "n": 6
    },
    {
        "id": 2870,
        "name": "措美",
        "parent_id": 423,
        "post": 540526,
        "n": 7
    },
    {
        "id": 2871,
        "name": "洛扎",
        "parent_id": 423,
        "post": 540527,
        "n": 8
    },
    {
        "id": 2872,
        "name": "加查",
        "parent_id": 423,
        "post": 540528,
        "n": 9
    },
    {
        "id": 2873,
        "name": "隆子",
        "parent_id": 423,
        "post": 540529,
        "n": 10
    },
    {
        "id": 2874,
        "name": "错那",
        "parent_id": 423,
        "post": 540530,
        "n": 11
    },
    {
        "id": 2875,
        "name": "浪卡子",
        "parent_id": 423,
        "post": 540531,
        "n": 12
    },
    {
        "id": 2876,
        "name": "桑珠孜",
        "parent_id": 424,
        "post": 542301,
        "n": 1
    },
    {
        "id": 2877,
        "name": "南木林",
        "parent_id": 424,
        "post": 542322,
        "n": 2
    },
    {
        "id": 2878,
        "name": "江孜",
        "parent_id": 424,
        "post": 542323,
        "n": 3
    },
    {
        "id": 2879,
        "name": "定日",
        "parent_id": 424,
        "post": 542324,
        "n": 4
    },
    {
        "id": 2880,
        "name": "萨迦",
        "parent_id": 424,
        "post": 542325,
        "n": 5
    },
    {
        "id": 2881,
        "name": "拉孜",
        "parent_id": 424,
        "post": 542326,
        "n": 6
    },
    {
        "id": 2882,
        "name": "昂仁",
        "parent_id": 424,
        "post": 542327,
        "n": 7
    },
    {
        "id": 2883,
        "name": "谢通门",
        "parent_id": 424,
        "post": 542328,
        "n": 8
    },
    {
        "id": 2884,
        "name": "白朗",
        "parent_id": 424,
        "post": 542329,
        "n": 9
    },
    {
        "id": 2885,
        "name": "仁布",
        "parent_id": 424,
        "post": 542330,
        "n": 10
    },
    {
        "id": 2886,
        "name": "康马",
        "parent_id": 424,
        "post": 542331,
        "n": 11
    },
    {
        "id": 2887,
        "name": "定结",
        "parent_id": 424,
        "post": 542332,
        "n": 12
    },
    {
        "id": 2888,
        "name": "仲巴",
        "parent_id": 424,
        "post": 542333,
        "n": 13
    },
    {
        "id": 2889,
        "name": "亚东",
        "parent_id": 424,
        "post": 542334,
        "n": 14
    },
    {
        "id": 2890,
        "name": "吉隆",
        "parent_id": 424,
        "post": 542335,
        "n": 15
    },
    {
        "id": 2891,
        "name": "聂拉木",
        "parent_id": 424,
        "post": 542336,
        "n": 16
    },
    {
        "id": 2892,
        "name": "萨嘎",
        "parent_id": 424,
        "post": 542337,
        "n": 17
    },
    {
        "id": 2893,
        "name": "岗巴",
        "parent_id": 424,
        "post": 542338,
        "n": 18
    },
    {
        "id": 2894,
        "name": "双湖",
        "parent_id": 425,
        "post": 540630,
        "n": 11
    },
    {
        "id": 2895,
        "name": "色尼",
        "parent_id": 425,
        "post": 540602,
        "n": 1
    },
    {
        "id": 2896,
        "name": "嘉黎",
        "parent_id": 425,
        "post": 540621,
        "n": 2
    },
    {
        "id": 2897,
        "name": "比如",
        "parent_id": 425,
        "post": 540622,
        "n": 3
    },
    {
        "id": 2898,
        "name": "聂荣",
        "parent_id": 425,
        "post": 540623,
        "n": 4
    },
    {
        "id": 2899,
        "name": "安多",
        "parent_id": 425,
        "post": 540624,
        "n": 5
    },
    {
        "id": 2900,
        "name": "申扎",
        "parent_id": 425,
        "post": 540625,
        "n": 6
    },
    {
        "id": 2901,
        "name": "索县",
        "parent_id": 425,
        "post": 540626,
        "n": 7
    },
    {
        "id": 2902,
        "name": "班戈",
        "parent_id": 425,
        "post": 540627,
        "n": 8
    },
    {
        "id": 2903,
        "name": "巴青",
        "parent_id": 425,
        "post": 540628,
        "n": 9
    },
    {
        "id": 2904,
        "name": "尼玛",
        "parent_id": 425,
        "post": 540629,
        "n": 10
    },
    {
        "id": 2905,
        "name": "普兰",
        "parent_id": 426,
        "post": 542521,
        "n": 1
    },
    {
        "id": 2906,
        "name": "札达",
        "parent_id": 426,
        "post": 542522,
        "n": 2
    },
    {
        "id": 2907,
        "name": "噶尔",
        "parent_id": 426,
        "post": 542523,
        "n": 3
    },
    {
        "id": 2908,
        "name": "日土",
        "parent_id": 426,
        "post": 542524,
        "n": 4
    },
    {
        "id": 2909,
        "name": "革吉",
        "parent_id": 426,
        "post": 542525,
        "n": 5
    },
    {
        "id": 2910,
        "name": "改则",
        "parent_id": 426,
        "post": 542526,
        "n": 6
    },
    {
        "id": 2911,
        "name": "措勤",
        "parent_id": 426,
        "post": 542527,
        "n": 7
    },
    {
        "id": 2912,
        "name": "巴宜",
        "parent_id": 427,
        "post": 540402,
        "n": 1
    },
    {
        "id": 2913,
        "name": "工布江达",
        "parent_id": 427,
        "post": 542621,
        "n": 2
    },
    {
        "id": 2914,
        "name": "米林",
        "parent_id": 427,
        "post": 542621,
        "n": 3
    },
    {
        "id": 2915,
        "name": "墨脱",
        "parent_id": 427,
        "post": 542621,
        "n": 4
    },
    {
        "id": 2916,
        "name": "波密",
        "parent_id": 427,
        "post": 542621,
        "n": 5
    },
    {
        "id": 2917,
        "name": "察隅",
        "parent_id": 427,
        "post": 542621,
        "n": 6
    },
    {
        "id": 2918,
        "name": "朗县",
        "parent_id": 427,
        "post": 542621,
        "n": 7
    },
    {
        "id": 2919,
        "name": "新城",
        "parent_id": 428,
        "post": 610102,
        "n": 1
    },
    {
        "id": 2920,
        "name": "碑林",
        "parent_id": 428,
        "post": 610103,
        "n": 2
    },
    {
        "id": 2921,
        "name": "莲湖",
        "parent_id": 428,
        "post": 610104,
        "n": 3
    },
    {
        "id": 2922,
        "name": "灞桥",
        "parent_id": 428,
        "post": 610111,
        "n": 4
    },
    {
        "id": 2923,
        "name": "未央",
        "parent_id": 428,
        "post": 610112,
        "n": 5
    },
    {
        "id": 2924,
        "name": "雁塔",
        "parent_id": 428,
        "post": 610113,
        "n": 6
    },
    {
        "id": 2925,
        "name": "阎良",
        "parent_id": 428,
        "post": 610114,
        "n": 7
    },
    {
        "id": 2926,
        "name": "临潼",
        "parent_id": 428,
        "post": 610115,
        "n": 8
    },
    {
        "id": 2927,
        "name": "长安",
        "parent_id": 428,
        "post": 610116,
        "n": 9
    },
    {
        "id": 2928,
        "name": "蓝田",
        "parent_id": 428,
        "post": 610122,
        "n": 12
    },
    {
        "id": 2929,
        "name": "周至",
        "parent_id": 428,
        "post": 610124,
        "n": 13
    },
    {
        "id": 2930,
        "name": "鄠邑",
        "parent_id": 428,
        "post": 610118,
        "n": 11
    },
    {
        "id": 2931,
        "name": "高陵",
        "parent_id": 428,
        "post": 610117,
        "n": 10
    },
    {
        "id": 2932,
        "name": "王益",
        "parent_id": 429,
        "post": 610202,
        "n": 1
    },
    {
        "id": 2933,
        "name": "印台",
        "parent_id": 429,
        "post": 610203,
        "n": 2
    },
    {
        "id": 2934,
        "name": "耀州",
        "parent_id": 429,
        "post": 610204,
        "n": 3
    },
    {
        "id": 2935,
        "name": "宜君",
        "parent_id": 429,
        "post": 610222,
        "n": 4
    },
    {
        "id": 2936,
        "name": "渭滨",
        "parent_id": 430,
        "post": 610302,
        "n": 1
    },
    {
        "id": 2937,
        "name": "金台",
        "parent_id": 430,
        "post": 610303,
        "n": 2
    },
    {
        "id": 2938,
        "name": "陈仓",
        "parent_id": 430,
        "post": 610304,
        "n": 3
    },
    {
        "id": 2939,
        "name": "凤翔",
        "parent_id": 430,
        "post": 610322,
        "n": 4
    },
    {
        "id": 2940,
        "name": "岐山",
        "parent_id": 430,
        "post": 610323,
        "n": 5
    },
    {
        "id": 2941,
        "name": "扶风",
        "parent_id": 430,
        "post": 610324,
        "n": 6
    },
    {
        "id": 2942,
        "name": "眉县",
        "parent_id": 430,
        "post": 610326,
        "n": 7
    },
    {
        "id": 2943,
        "name": "陇县",
        "parent_id": 430,
        "post": 610327,
        "n": 8
    },
    {
        "id": 2944,
        "name": "千阳",
        "parent_id": 430,
        "post": 610328,
        "n": 9
    },
    {
        "id": 2945,
        "name": "麟游",
        "parent_id": 430,
        "post": 610329,
        "n": 10
    },
    {
        "id": 2946,
        "name": "凤县",
        "parent_id": 430,
        "post": 610330,
        "n": 11
    },
    {
        "id": 2947,
        "name": "太白",
        "parent_id": 430,
        "post": 610331,
        "n": 12
    },
    {
        "id": 2948,
        "name": "秦都",
        "parent_id": 431,
        "post": 610402,
        "n": 1
    },
    {
        "id": 2949,
        "name": "杨陵",
        "parent_id": 431,
        "post": 610403,
        "n": 2
    },
    {
        "id": 2950,
        "name": "渭城",
        "parent_id": 431,
        "post": 610404,
        "n": 3
    },
    {
        "id": 2951,
        "name": "三原",
        "parent_id": 431,
        "post": 610422,
        "n": 4
    },
    {
        "id": 2952,
        "name": "泾阳",
        "parent_id": 431,
        "post": 610423,
        "n": 5
    },
    {
        "id": 2953,
        "name": "乾县",
        "parent_id": 431,
        "post": 610424,
        "n": 6
    },
    {
        "id": 2954,
        "name": "礼泉",
        "parent_id": 431,
        "post": 610425,
        "n": 7
    },
    {
        "id": 2955,
        "name": "永寿",
        "parent_id": 431,
        "post": 610426,
        "n": 8
    },
    {
        "id": 2956,
        "name": "彬州",
        "parent_id": 431,
        "post": 610482,
        "n": 14
    },
    {
        "id": 2957,
        "name": "长武",
        "parent_id": 431,
        "post": 610428,
        "n": 9
    },
    {
        "id": 2958,
        "name": "旬邑",
        "parent_id": 431,
        "post": 610429,
        "n": 10
    },
    {
        "id": 2959,
        "name": "淳化",
        "parent_id": 431,
        "post": 610430,
        "n": 11
    },
    {
        "id": 2960,
        "name": "武功",
        "parent_id": 431,
        "post": 610431,
        "n": 12
    },
    {
        "id": 2961,
        "name": "兴平",
        "parent_id": 431,
        "post": 610481,
        "n": 13
    },
    {
        "id": 2962,
        "name": "临渭",
        "parent_id": 432,
        "post": 610502,
        "n": 1
    },
    {
        "id": 2963,
        "name": "华州",
        "parent_id": 432,
        "post": 610521,
        "n": 2
    },
    {
        "id": 2964,
        "name": "潼关",
        "parent_id": 432,
        "post": 610522,
        "n": 3
    },
    {
        "id": 2965,
        "name": "大荔",
        "parent_id": 432,
        "post": 610523,
        "n": 4
    },
    {
        "id": 2966,
        "name": "合阳",
        "parent_id": 432,
        "post": 610524,
        "n": 5
    },
    {
        "id": 2967,
        "name": "澄城",
        "parent_id": 432,
        "post": 610525,
        "n": 6
    },
    {
        "id": 2968,
        "name": "蒲城",
        "parent_id": 432,
        "post": 610526,
        "n": 7
    },
    {
        "id": 2969,
        "name": "白水",
        "parent_id": 432,
        "post": 610527,
        "n": 8
    },
    {
        "id": 2970,
        "name": "富平",
        "parent_id": 432,
        "post": 610528,
        "n": 9
    },
    {
        "id": 2971,
        "name": "韩城",
        "parent_id": 432,
        "post": 610581,
        "n": 10
    },
    {
        "id": 2972,
        "name": "华阴",
        "parent_id": 432,
        "post": 610582,
        "n": 11
    },
    {
        "id": 2973,
        "name": "宝塔",
        "parent_id": 433,
        "post": 610602,
        "n": 1
    },
    {
        "id": 2974,
        "name": "延长",
        "parent_id": 433,
        "post": 610621,
        "n": 3
    },
    {
        "id": 2975,
        "name": "延川",
        "parent_id": 433,
        "post": 610622,
        "n": 4
    },
    {
        "id": 2976,
        "name": "子长",
        "parent_id": 433,
        "post": 610681,
        "n": 13
    },
    {
        "id": 2977,
        "name": "安塞",
        "parent_id": 433,
        "post": 610603,
        "n": 2
    },
    {
        "id": 2978,
        "name": "志丹",
        "parent_id": 433,
        "post": 610625,
        "n": 5
    },
    {
        "id": 2979,
        "name": "吴起",
        "parent_id": 433,
        "post": 610626,
        "n": 6
    },
    {
        "id": 2980,
        "name": "甘泉",
        "parent_id": 433,
        "post": 610627,
        "n": 7
    },
    {
        "id": 2981,
        "name": "富县",
        "parent_id": 433,
        "post": 610628,
        "n": 8
    },
    {
        "id": 2982,
        "name": "洛川",
        "parent_id": 433,
        "post": 610629,
        "n": 9
    },
    {
        "id": 2983,
        "name": "宜川",
        "parent_id": 433,
        "post": 610630,
        "n": 10
    },
    {
        "id": 2984,
        "name": "黄龙",
        "parent_id": 433,
        "post": 610631,
        "n": 11
    },
    {
        "id": 2985,
        "name": "黄陵",
        "parent_id": 433,
        "post": 610632,
        "n": 12
    },
    {
        "id": 2986,
        "name": "汉台",
        "parent_id": 434,
        "post": 610702,
        "n": 1
    },
    {
        "id": 2987,
        "name": "南郑",
        "parent_id": 434,
        "post": 610703,
        "n": 2
    },
    {
        "id": 2988,
        "name": "城固",
        "parent_id": 434,
        "post": 610722,
        "n": 3
    },
    {
        "id": 2989,
        "name": "洋县",
        "parent_id": 434,
        "post": 610723,
        "n": 4
    },
    {
        "id": 2990,
        "name": "西乡",
        "parent_id": 434,
        "post": 610724,
        "n": 5
    },
    {
        "id": 2991,
        "name": "勉县",
        "parent_id": 434,
        "post": 610725,
        "n": 6
    },
    {
        "id": 2992,
        "name": "宁强",
        "parent_id": 434,
        "post": 610726,
        "n": 7
    },
    {
        "id": 2993,
        "name": "略阳",
        "parent_id": 434,
        "post": 610727,
        "n": 8
    },
    {
        "id": 2994,
        "name": "镇巴",
        "parent_id": 434,
        "post": 610728,
        "n": 9
    },
    {
        "id": 2995,
        "name": "留坝",
        "parent_id": 434,
        "post": 610729,
        "n": 10
    },
    {
        "id": 2996,
        "name": "佛坪",
        "parent_id": 434,
        "post": 610730,
        "n": 11
    },
    {
        "id": 2997,
        "name": "榆阳",
        "parent_id": 435,
        "post": 610802,
        "n": 1
    },
    {
        "id": 2998,
        "name": "神木",
        "parent_id": 435,
        "post": 610881,
        "n": 12
    },
    {
        "id": 2999,
        "name": "府谷",
        "parent_id": 435,
        "post": 610822,
        "n": 2
    },
    {
        "id": 3000,
        "name": "横山",
        "parent_id": 435,
        "post": 610823,
        "n": 3
    },
    {
        "id": 3001,
        "name": "靖边",
        "parent_id": 435,
        "post": 610824,
        "n": 4
    },
    {
        "id": 3002,
        "name": "定边",
        "parent_id": 435,
        "post": 610825,
        "n": 5
    },
    {
        "id": 3003,
        "name": "绥德",
        "parent_id": 435,
        "post": 610826,
        "n": 6
    },
    {
        "id": 3004,
        "name": "米脂",
        "parent_id": 435,
        "post": 610827,
        "n": 7
    },
    {
        "id": 3005,
        "name": "佳县",
        "parent_id": 435,
        "post": 610828,
        "n": 8
    },
    {
        "id": 3006,
        "name": "吴堡",
        "parent_id": 435,
        "post": 610829,
        "n": 9
    },
    {
        "id": 3007,
        "name": "清涧",
        "parent_id": 435,
        "post": 610830,
        "n": 10
    },
    {
        "id": 3008,
        "name": "子洲",
        "parent_id": 435,
        "post": 610831,
        "n": 11
    },
    {
        "id": 3009,
        "name": "汉滨",
        "parent_id": 436,
        "post": 610902,
        "n": 1
    },
    {
        "id": 3010,
        "name": "汉阴",
        "parent_id": 436,
        "post": 610921,
        "n": 2
    },
    {
        "id": 3011,
        "name": "石泉",
        "parent_id": 436,
        "post": 610922,
        "n": 3
    },
    {
        "id": 3012,
        "name": "宁陕",
        "parent_id": 436,
        "post": 610923,
        "n": 4
    },
    {
        "id": 3013,
        "name": "紫阳",
        "parent_id": 436,
        "post": 610924,
        "n": 5
    },
    {
        "id": 3014,
        "name": "岚皋",
        "parent_id": 436,
        "post": 610925,
        "n": 6
    },
    {
        "id": 3015,
        "name": "平利",
        "parent_id": 436,
        "post": 610926,
        "n": 7
    },
    {
        "id": 3016,
        "name": "镇坪",
        "parent_id": 436,
        "post": 610927,
        "n": 8
    },
    {
        "id": 3017,
        "name": "旬阳",
        "parent_id": 436,
        "post": 610928,
        "n": 9
    },
    {
        "id": 3018,
        "name": "白河",
        "parent_id": 436,
        "post": 610929,
        "n": 10
    },
    {
        "id": 3019,
        "name": "商州",
        "parent_id": 437,
        "post": 611002,
        "n": 1
    },
    {
        "id": 3020,
        "name": "洛南",
        "parent_id": 437,
        "post": 611021,
        "n": 2
    },
    {
        "id": 3021,
        "name": "丹凤",
        "parent_id": 437,
        "post": 611022,
        "n": 3
    },
    {
        "id": 3022,
        "name": "商南",
        "parent_id": 437,
        "post": 611023,
        "n": 4
    },
    {
        "id": 3023,
        "name": "山阳",
        "parent_id": 437,
        "post": 611024,
        "n": 5
    },
    {
        "id": 3024,
        "name": "镇安",
        "parent_id": 437,
        "post": 611025,
        "n": 6
    },
    {
        "id": 3025,
        "name": "柞水",
        "parent_id": 437,
        "post": 611026,
        "n": 7
    },
    {
        "id": 3026,
        "name": "城关",
        "parent_id": 438,
        "post": 620102,
        "n": 1
    },
    {
        "id": 3027,
        "name": "七里河",
        "parent_id": 438,
        "post": 620103,
        "n": 2
    },
    {
        "id": 3028,
        "name": "西固",
        "parent_id": 438,
        "post": 620104,
        "n": 3
    },
    {
        "id": 3029,
        "name": "安宁",
        "parent_id": 438,
        "post": 620105,
        "n": 4
    },
    {
        "id": 3030,
        "name": "红古",
        "parent_id": 438,
        "post": 620111,
        "n": 5
    },
    {
        "id": 3031,
        "name": "永登",
        "parent_id": 438,
        "post": 620121,
        "n": 6
    },
    {
        "id": 3032,
        "name": "皋兰",
        "parent_id": 438,
        "post": 620122,
        "n": 7
    },
    {
        "id": 3033,
        "name": "榆中",
        "parent_id": 438,
        "post": 620123,
        "n": 8
    },
    {
        "id": 3034,
        "name": "镜铁",
        "parent_id": 439,
        "post": 620201,
        "n": 1
    },
    {
        "id": 3035,
        "name": "长城",
        "parent_id": 439,
        "post": 620201,
        "n": 2
    },
    {
        "id": 3036,
        "name": "雄关",
        "parent_id": 439,
        "post": 620201,
        "n": 3
    },
    {
        "id": 3037,
        "name": "金川",
        "parent_id": 440,
        "post": 620302,
        "n": 1
    },
    {
        "id": 3038,
        "name": "永昌",
        "parent_id": 440,
        "post": 620321,
        "n": 2
    },
    {
        "id": 3039,
        "name": "白银",
        "parent_id": 441,
        "post": 620402,
        "n": 1
    },
    {
        "id": 3040,
        "name": "平川",
        "parent_id": 441,
        "post": 620403,
        "n": 2
    },
    {
        "id": 3041,
        "name": "靖远",
        "parent_id": 441,
        "post": 620421,
        "n": 3
    },
    {
        "id": 3042,
        "name": "会宁",
        "parent_id": 441,
        "post": 620422,
        "n": 4
    },
    {
        "id": 3043,
        "name": "景泰",
        "parent_id": 441,
        "post": 620423,
        "n": 5
    },
    {
        "id": 3044,
        "name": "秦州",
        "parent_id": 442,
        "post": 620502,
        "n": 1
    },
    {
        "id": 3045,
        "name": "麦积",
        "parent_id": 442,
        "post": 620503,
        "n": 2
    },
    {
        "id": 3046,
        "name": "清水",
        "parent_id": 442,
        "post": 620521,
        "n": 3
    },
    {
        "id": 3047,
        "name": "秦安",
        "parent_id": 442,
        "post": 620522,
        "n": 4
    },
    {
        "id": 3048,
        "name": "甘谷",
        "parent_id": 442,
        "post": 620523,
        "n": 5
    },
    {
        "id": 3049,
        "name": "武山",
        "parent_id": 442,
        "post": 620524,
        "n": 6
    },
    {
        "id": 3050,
        "name": "张家川",
        "parent_id": 442,
        "post": 620525,
        "n": 7
    },
    {
        "id": 3051,
        "name": "凉州",
        "parent_id": 443,
        "post": 620602,
        "n": 1
    },
    {
        "id": 3052,
        "name": "民勤",
        "parent_id": 443,
        "post": 620621,
        "n": 2
    },
    {
        "id": 3053,
        "name": "古浪",
        "parent_id": 443,
        "post": 620622,
        "n": 3
    },
    {
        "id": 3054,
        "name": "天祝",
        "parent_id": 443,
        "post": 620623,
        "n": 4
    },
    {
        "id": 3055,
        "name": "甘州",
        "parent_id": 444,
        "post": 620702,
        "n": 1
    },
    {
        "id": 3056,
        "name": "肃南",
        "parent_id": 444,
        "post": 620721,
        "n": 2
    },
    {
        "id": 3057,
        "name": "民乐",
        "parent_id": 444,
        "post": 620722,
        "n": 3
    },
    {
        "id": 3058,
        "name": "临泽",
        "parent_id": 444,
        "post": 620723,
        "n": 4
    },
    {
        "id": 3059,
        "name": "高台",
        "parent_id": 444,
        "post": 620724,
        "n": 5
    },
    {
        "id": 3060,
        "name": "山丹",
        "parent_id": 444,
        "post": 620725,
        "n": 6
    },
    {
        "id": 3061,
        "name": "崆峒",
        "parent_id": 445,
        "post": 620802,
        "n": 1
    },
    {
        "id": 3062,
        "name": "泾川",
        "parent_id": 445,
        "post": 620821,
        "n": 2
    },
    {
        "id": 3063,
        "name": "灵台",
        "parent_id": 445,
        "post": 620822,
        "n": 3
    },
    {
        "id": 3064,
        "name": "崇信",
        "parent_id": 445,
        "post": 620823,
        "n": 4
    },
    {
        "id": 3065,
        "name": "华亭",
        "parent_id": 445,
        "post": 620881,
        "n": 7
    },
    {
        "id": 3066,
        "name": "庄浪",
        "parent_id": 445,
        "post": 620825,
        "n": 5
    },
    {
        "id": 3067,
        "name": "静宁",
        "parent_id": 445,
        "post": 620826,
        "n": 6
    },
    {
        "id": 3068,
        "name": "肃州",
        "parent_id": 446,
        "post": 620902,
        "n": 1
    },
    {
        "id": 3069,
        "name": "金塔",
        "parent_id": 446,
        "post": 620921,
        "n": 2
    },
    {
        "id": 3070,
        "name": "瓜州",
        "parent_id": 446,
        "post": 620922,
        "n": 3
    },
    {
        "id": 3071,
        "name": "肃北",
        "parent_id": 446,
        "post": 620923,
        "n": 4
    },
    {
        "id": 3072,
        "name": "阿克塞",
        "parent_id": 446,
        "post": 620924,
        "n": 5
    },
    {
        "id": 3073,
        "name": "玉门",
        "parent_id": 446,
        "post": 620981,
        "n": 6
    },
    {
        "id": 3074,
        "name": "敦煌",
        "parent_id": 446,
        "post": 620982,
        "n": 7
    },
    {
        "id": 3075,
        "name": "西峰",
        "parent_id": 447,
        "post": 621002,
        "n": 1
    },
    {
        "id": 3076,
        "name": "庆城",
        "parent_id": 447,
        "post": 621021,
        "n": 2
    },
    {
        "id": 3077,
        "name": "环县",
        "parent_id": 447,
        "post": 621022,
        "n": 3
    },
    {
        "id": 3078,
        "name": "华池",
        "parent_id": 447,
        "post": 621023,
        "n": 4
    },
    {
        "id": 3079,
        "name": "合水",
        "parent_id": 447,
        "post": 621024,
        "n": 5
    },
    {
        "id": 3080,
        "name": "正宁",
        "parent_id": 447,
        "post": 621025,
        "n": 6
    },
    {
        "id": 3081,
        "name": "宁县",
        "parent_id": 447,
        "post": 621026,
        "n": 7
    },
    {
        "id": 3082,
        "name": "镇原",
        "parent_id": 447,
        "post": 621027,
        "n": 8
    },
    {
        "id": 3083,
        "name": "安定",
        "parent_id": 448,
        "post": 621102,
        "n": 1
    },
    {
        "id": 3084,
        "name": "通渭",
        "parent_id": 448,
        "post": 621121,
        "n": 2
    },
    {
        "id": 3085,
        "name": "陇西",
        "parent_id": 448,
        "post": 621122,
        "n": 3
    },
    {
        "id": 3086,
        "name": "渭源",
        "parent_id": 448,
        "post": 621123,
        "n": 4
    },
    {
        "id": 3087,
        "name": "临洮",
        "parent_id": 448,
        "post": 621124,
        "n": 5
    },
    {
        "id": 3088,
        "name": "漳县",
        "parent_id": 448,
        "post": 621125,
        "n": 6
    },
    {
        "id": 3089,
        "name": "岷县",
        "parent_id": 448,
        "post": 621126,
        "n": 7
    },
    {
        "id": 3090,
        "name": "武都",
        "parent_id": 449,
        "post": 621202,
        "n": 1
    },
    {
        "id": 3091,
        "name": "成县",
        "parent_id": 449,
        "post": 621221,
        "n": 2
    },
    {
        "id": 3092,
        "name": "文县",
        "parent_id": 449,
        "post": 621222,
        "n": 3
    },
    {
        "id": 3093,
        "name": "宕昌",
        "parent_id": 449,
        "post": 621223,
        "n": 4
    },
    {
        "id": 3094,
        "name": "康县",
        "parent_id": 449,
        "post": 621224,
        "n": 5
    },
    {
        "id": 3095,
        "name": "西和",
        "parent_id": 449,
        "post": 621225,
        "n": 6
    },
    {
        "id": 3096,
        "name": "礼县",
        "parent_id": 449,
        "post": 621226,
        "n": 7
    },
    {
        "id": 3097,
        "name": "徽县",
        "parent_id": 449,
        "post": 621227,
        "n": 8
    },
    {
        "id": 3098,
        "name": "两当",
        "parent_id": 449,
        "post": 621228,
        "n": 9
    },
    {
        "id": 3099,
        "name": "临夏",
        "parent_id": 450,
        "post": 622901,
        "n": 1
    },
    {
        "id": 3100,
        "name": "临夏",
        "parent_id": 450,
        "post": 622921,
        "n": 2
    },
    {
        "id": 3101,
        "name": "康乐",
        "parent_id": 450,
        "post": 622922,
        "n": 3
    },
    {
        "id": 3102,
        "name": "永靖",
        "parent_id": 450,
        "post": 622923,
        "n": 4
    },
    {
        "id": 3103,
        "name": "广河",
        "parent_id": 450,
        "post": 622924,
        "n": 5
    },
    {
        "id": 3104,
        "name": "和政",
        "parent_id": 450,
        "post": 622925,
        "n": 6
    },
    {
        "id": 3105,
        "name": "东乡族",
        "parent_id": 450,
        "post": 622926,
        "n": 7
    },
    {
        "id": 3106,
        "name": "积石山",
        "parent_id": 450,
        "post": 622927,
        "n": 8
    },
    {
        "id": 3107,
        "name": "合作",
        "parent_id": 451,
        "post": 623001,
        "n": 1
    },
    {
        "id": 3108,
        "name": "临潭",
        "parent_id": 451,
        "post": 623021,
        "n": 2
    },
    {
        "id": 3109,
        "name": "卓尼",
        "parent_id": 451,
        "post": 623022,
        "n": 3
    },
    {
        "id": 3110,
        "name": "舟曲",
        "parent_id": 451,
        "post": 623023,
        "n": 4
    },
    {
        "id": 3111,
        "name": "迭部",
        "parent_id": 451,
        "post": 623024,
        "n": 5
    },
    {
        "id": 3112,
        "name": "玛曲",
        "parent_id": 451,
        "post": 623025,
        "n": 6
    },
    {
        "id": 3113,
        "name": "碌曲",
        "parent_id": 451,
        "post": 623026,
        "n": 7
    },
    {
        "id": 3114,
        "name": "夏河",
        "parent_id": 451,
        "post": 623027,
        "n": 8
    },
    {
        "id": 3115,
        "name": "城东",
        "parent_id": 452,
        "post": 630102,
        "n": 1
    },
    {
        "id": 3116,
        "name": "城中",
        "parent_id": 452,
        "post": 630103,
        "n": 2
    },
    {
        "id": 3117,
        "name": "城西",
        "parent_id": 452,
        "post": 630104,
        "n": 3
    },
    {
        "id": 3118,
        "name": "城北",
        "parent_id": 452,
        "post": 630105,
        "n": 4
    },
    {
        "id": 3119,
        "name": "大通",
        "parent_id": 452,
        "post": 630121,
        "n": 6
    },
    {
        "id": 3120,
        "name": "湟中",
        "parent_id": 452,
        "post": 630106,
        "n": 5
    },
    {
        "id": 3121,
        "name": "湟源",
        "parent_id": 452,
        "post": 630123,
        "n": 7
    },
    {
        "id": 3122,
        "name": "乐都",
        "parent_id": 453,
        "post": 630202,
        "n": 1
    },
    {
        "id": 3123,
        "name": "平安",
        "parent_id": 453,
        "post": 632121,
        "n": 2
    },
    {
        "id": 3124,
        "name": "民和",
        "parent_id": 453,
        "post": 632122,
        "n": 3
    },
    {
        "id": 3125,
        "name": "互助",
        "parent_id": 453,
        "post": 632126,
        "n": 4
    },
    {
        "id": 3126,
        "name": "化隆",
        "parent_id": 453,
        "post": 632127,
        "n": 5
    },
    {
        "id": 3127,
        "name": "循化",
        "parent_id": 453,
        "post": 632128,
        "n": 6
    },
    {
        "id": 3128,
        "name": "门源",
        "parent_id": 454,
        "post": 632221,
        "n": 1
    },
    {
        "id": 3129,
        "name": "祁连",
        "parent_id": 454,
        "post": 632222,
        "n": 2
    },
    {
        "id": 3130,
        "name": "海晏",
        "parent_id": 454,
        "post": 632223,
        "n": 3
    },
    {
        "id": 3131,
        "name": "刚察",
        "parent_id": 454,
        "post": 632224,
        "n": 4
    },
    {
        "id": 3132,
        "name": "同仁",
        "parent_id": 455,
        "post": 632321,
        "n": 1
    },
    {
        "id": 3133,
        "name": "尖扎",
        "parent_id": 455,
        "post": 632322,
        "n": 2
    },
    {
        "id": 3134,
        "name": "泽库",
        "parent_id": 455,
        "post": 632323,
        "n": 3
    },
    {
        "id": 3135,
        "name": "河南",
        "parent_id": 455,
        "post": 632324,
        "n": 4
    },
    {
        "id": 3136,
        "name": "共和",
        "parent_id": 456,
        "post": 632521,
        "n": 1
    },
    {
        "id": 3137,
        "name": "同德",
        "parent_id": 456,
        "post": 632522,
        "n": 2
    },
    {
        "id": 3138,
        "name": "贵德",
        "parent_id": 456,
        "post": 632523,
        "n": 3
    },
    {
        "id": 3139,
        "name": "兴海",
        "parent_id": 456,
        "post": 632524,
        "n": 4
    },
    {
        "id": 3140,
        "name": "贵南",
        "parent_id": 456,
        "post": 632525,
        "n": 5
    },
    {
        "id": 3141,
        "name": "玛沁",
        "parent_id": 457,
        "post": 632621,
        "n": 1
    },
    {
        "id": 3142,
        "name": "班玛",
        "parent_id": 457,
        "post": 632622,
        "n": 2
    },
    {
        "id": 3143,
        "name": "甘德",
        "parent_id": 457,
        "post": 632623,
        "n": 3
    },
    {
        "id": 3144,
        "name": "达日",
        "parent_id": 457,
        "post": 632624,
        "n": 4
    },
    {
        "id": 3145,
        "name": "久治",
        "parent_id": 457,
        "post": 632625,
        "n": 5
    },
    {
        "id": 3146,
        "name": "玛多",
        "parent_id": 457,
        "post": 632626,
        "n": 6
    },
    {
        "id": 3147,
        "name": "玉树",
        "parent_id": 458,
        "post": 632721,
        "n": 1
    },
    {
        "id": 3148,
        "name": "杂多",
        "parent_id": 458,
        "post": 632722,
        "n": 2
    },
    {
        "id": 3149,
        "name": "治多",
        "parent_id": 458,
        "post": 632724,
        "n": 3
    },
    {
        "id": 3150,
        "name": "囊谦",
        "parent_id": 458,
        "post": 632725,
        "n": 4
    },
    {
        "id": 3151,
        "name": "曲麻莱",
        "parent_id": 458,
        "post": 632726,
        "n": 5
    },
    {
        "id": 3154,
        "name": "茫崖",
        "parent_id": 459,
        "post": 632803,
        "n": 3
    },
    {
        "id": 3155,
        "name": "格尔木",
        "parent_id": 459,
        "post": 632801,
        "n": 1
    },
    {
        "id": 3156,
        "name": "德令哈",
        "parent_id": 459,
        "post": 632802,
        "n": 2
    },
    {
        "id": 3157,
        "name": "乌兰",
        "parent_id": 459,
        "post": 632821,
        "n": 4
    },
    {
        "id": 3158,
        "name": "都兰",
        "parent_id": 459,
        "post": 632822,
        "n": 5
    },
    {
        "id": 3159,
        "name": "天峻",
        "parent_id": 459,
        "post": 632823,
        "n": 6
    },
    {
        "id": 3160,
        "name": "兴庆",
        "parent_id": 460,
        "post": 640104,
        "n": 1
    },
    {
        "id": 3161,
        "name": "西夏",
        "parent_id": 460,
        "post": 640105,
        "n": 2
    },
    {
        "id": 3162,
        "name": "金凤",
        "parent_id": 460,
        "post": 640106,
        "n": 3
    },
    {
        "id": 3163,
        "name": "永宁",
        "parent_id": 460,
        "post": 640121,
        "n": 4
    },
    {
        "id": 3164,
        "name": "贺兰",
        "parent_id": 460,
        "post": 640122,
        "n": 5
    },
    {
        "id": 3165,
        "name": "灵武",
        "parent_id": 460,
        "post": 640181,
        "n": 6
    },
    {
        "id": 3166,
        "name": "大武口",
        "parent_id": 461,
        "post": 640202,
        "n": 1
    },
    {
        "id": 3167,
        "name": "惠农",
        "parent_id": 461,
        "post": 640205,
        "n": 2
    },
    {
        "id": 3168,
        "name": "平罗",
        "parent_id": 461,
        "post": 640221,
        "n": 3
    },
    {
        "id": 3169,
        "name": "红寺堡",
        "parent_id": 462,
        "post": "",
        "n": 1
    },
    {
        "id": 3170,
        "name": "利通",
        "parent_id": 462,
        "post": 640302,
        "n": 2
    },
    {
        "id": 3171,
        "name": "盐池",
        "parent_id": 462,
        "post": 640323,
        "n": 3
    },
    {
        "id": 3172,
        "name": "同心",
        "parent_id": 462,
        "post": 640324,
        "n": 4
    },
    {
        "id": 3173,
        "name": "青铜峡",
        "parent_id": 462,
        "post": 640381,
        "n": 5
    },
    {
        "id": 3174,
        "name": "原州",
        "parent_id": 463,
        "post": 640402,
        "n": 1
    },
    {
        "id": 3175,
        "name": "西吉",
        "parent_id": 463,
        "post": 640422,
        "n": 2
    },
    {
        "id": 3176,
        "name": "隆德",
        "parent_id": 463,
        "post": 640423,
        "n": 3
    },
    {
        "id": 3177,
        "name": "泾源",
        "parent_id": 463,
        "post": 640424,
        "n": 4
    },
    {
        "id": 3178,
        "name": "彭阳",
        "parent_id": 463,
        "post": 640425,
        "n": 5
    },
    {
        "id": 3179,
        "name": "沙坡头",
        "parent_id": 464,
        "post": 640502,
        "n": 1
    },
    {
        "id": 3180,
        "name": "中宁",
        "parent_id": 464,
        "post": 640521,
        "n": 2
    },
    {
        "id": 3181,
        "name": "海原",
        "parent_id": 464,
        "post": 640522,
        "n": 3
    },
    {
        "id": 3182,
        "name": "天山",
        "parent_id": 465,
        "post": 650102,
        "n": 1
    },
    {
        "id": 3183,
        "name": "沙依巴克",
        "parent_id": 465,
        "post": 650103,
        "n": 2
    },
    {
        "id": 3184,
        "name": "新市",
        "parent_id": 465,
        "post": 650104,
        "n": 3
    },
    {
        "id": 3185,
        "name": "水磨沟",
        "parent_id": 465,
        "post": 650105,
        "n": 4
    },
    {
        "id": 3186,
        "name": "头屯河",
        "parent_id": 465,
        "post": 650106,
        "n": 5
    },
    {
        "id": 3187,
        "name": "达坂城",
        "parent_id": 465,
        "post": 650107,
        "n": 6
    },
    {
        "id": 3188,
        "name": "米东",
        "parent_id": 465,
        "post": 650109,
        "n": 7
    },
    {
        "id": 3189,
        "name": "乌鲁木齐",
        "parent_id": 465,
        "post": 650121,
        "n": 8
    },
    {
        "id": 3190,
        "name": "独山子",
        "parent_id": 466,
        "post": 650202,
        "n": 1
    },
    {
        "id": 3191,
        "name": "克拉玛依",
        "parent_id": 466,
        "post": 650203,
        "n": 2
    },
    {
        "id": 3192,
        "name": "白碱滩",
        "parent_id": 466,
        "post": 650204,
        "n": 3
    },
    {
        "id": 3193,
        "name": "乌尔禾",
        "parent_id": 466,
        "post": 650205,
        "n": 4
    },
    {
        "id": 3194,
        "name": "高昌",
        "parent_id": 467,
        "post": 652101,
        "n": 1
    },
    {
        "id": 3195,
        "name": "鄯善",
        "parent_id": 467,
        "post": 652122,
        "n": 2
    },
    {
        "id": 3196,
        "name": "托克逊",
        "parent_id": 467,
        "post": 652123,
        "n": 3
    },
    {
        "id": 3197,
        "name": "伊州",
        "parent_id": 468,
        "post": 650502,
        "n": 1
    },
    {
        "id": 3198,
        "name": "巴里坤",
        "parent_id": 468,
        "post": 650521,
        "n": 2
    },
    {
        "id": 3199,
        "name": "伊吾",
        "parent_id": 468,
        "post": 650522,
        "n": 3
    },
    {
        "id": 3200,
        "name": "昌吉",
        "parent_id": 469,
        "post": 652301,
        "n": 1
    },
    {
        "id": 3201,
        "name": "阜康",
        "parent_id": 469,
        "post": 652302,
        "n": 2
    },
    {
        "id": 3202,
        "name": "呼图壁",
        "parent_id": 469,
        "post": 652323,
        "n": 3
    },
    {
        "id": 3203,
        "name": "玛纳斯",
        "parent_id": 469,
        "post": 652324,
        "n": 4
    },
    {
        "id": 3204,
        "name": "奇台",
        "parent_id": 469,
        "post": 652325,
        "n": 5
    },
    {
        "id": 3205,
        "name": "吉木萨尔",
        "parent_id": 469,
        "post": 652327,
        "n": 6
    },
    {
        "id": 3206,
        "name": "木垒",
        "parent_id": 469,
        "post": 652328,
        "n": 7
    },
    {
        "id": 3207,
        "name": "阿拉山口",
        "parent_id": 470,
        "post": "",
        "n": 1
    },
    {
        "id": 3208,
        "name": "博乐",
        "parent_id": 470,
        "post": 652701,
        "n": 2
    },
    {
        "id": 3209,
        "name": "精河",
        "parent_id": 470,
        "post": 652722,
        "n": 3
    },
    {
        "id": 3210,
        "name": "温泉",
        "parent_id": 470,
        "post": 652723,
        "n": 4
    },
    {
        "id": 3211,
        "name": "库尔勒",
        "parent_id": 471,
        "post": 652801,
        "n": 1
    },
    {
        "id": 3212,
        "name": "轮台",
        "parent_id": 471,
        "post": 652822,
        "n": 2
    },
    {
        "id": 3213,
        "name": "尉犁",
        "parent_id": 471,
        "post": 652823,
        "n": 3
    },
    {
        "id": 3214,
        "name": "若羌",
        "parent_id": 471,
        "post": 652824,
        "n": 4
    },
    {
        "id": 3215,
        "name": "且末",
        "parent_id": 471,
        "post": 652825,
        "n": 5
    },
    {
        "id": 3216,
        "name": "焉耆",
        "parent_id": 471,
        "post": 652826,
        "n": 6
    },
    {
        "id": 3217,
        "name": "和静",
        "parent_id": 471,
        "post": 652827,
        "n": 7
    },
    {
        "id": 3218,
        "name": "和硕",
        "parent_id": 471,
        "post": 652828,
        "n": 8
    },
    {
        "id": 3219,
        "name": "博湖",
        "parent_id": 471,
        "post": 652829,
        "n": 9
    },
    {
        "id": 3220,
        "name": "阿克苏",
        "parent_id": 472,
        "post": 652901,
        "n": 1
    },
    {
        "id": 3221,
        "name": "温宿",
        "parent_id": 472,
        "post": 652922,
        "n": 3
    },
    {
        "id": 3222,
        "name": "库车",
        "parent_id": 472,
        "post": 652902,
        "n": 2
    },
    {
        "id": 3223,
        "name": "沙雅",
        "parent_id": 472,
        "post": 652924,
        "n": 4
    },
    {
        "id": 3224,
        "name": "新和",
        "parent_id": 472,
        "post": 652925,
        "n": 5
    },
    {
        "id": 3225,
        "name": "拜城",
        "parent_id": 472,
        "post": 652926,
        "n": 6
    },
    {
        "id": 3226,
        "name": "乌什",
        "parent_id": 472,
        "post": 652927,
        "n": 7
    },
    {
        "id": 3227,
        "name": "阿瓦提",
        "parent_id": 472,
        "post": 652928,
        "n": 8
    },
    {
        "id": 3228,
        "name": "柯坪",
        "parent_id": 472,
        "post": 652929,
        "n": 9
    },
    {
        "id": 3229,
        "name": "阿图什",
        "parent_id": 473,
        "post": 653001,
        "n": 1
    },
    {
        "id": 3230,
        "name": "阿克陶",
        "parent_id": 473,
        "post": 653022,
        "n": 2
    },
    {
        "id": 3231,
        "name": "阿合奇",
        "parent_id": 473,
        "post": 653023,
        "n": 3
    },
    {
        "id": 3232,
        "name": "乌恰",
        "parent_id": 473,
        "post": 653024,
        "n": 4
    },
    {
        "id": 3233,
        "name": "喀什",
        "parent_id": 474,
        "post": 653101,
        "n": 1
    },
    {
        "id": 3234,
        "name": "疏附",
        "parent_id": 474,
        "post": 653121,
        "n": 2
    },
    {
        "id": 3235,
        "name": "疏勒",
        "parent_id": 474,
        "post": 653122,
        "n": 3
    },
    {
        "id": 3236,
        "name": "英吉沙",
        "parent_id": 474,
        "post": 653123,
        "n": 4
    },
    {
        "id": 3237,
        "name": "泽普",
        "parent_id": 474,
        "post": 653124,
        "n": 5
    },
    {
        "id": 3238,
        "name": "莎车",
        "parent_id": 474,
        "post": 653125,
        "n": 6
    },
    {
        "id": 3239,
        "name": "叶城",
        "parent_id": 474,
        "post": 653126,
        "n": 7
    },
    {
        "id": 3240,
        "name": "麦盖提",
        "parent_id": 474,
        "post": 653127,
        "n": 8
    },
    {
        "id": 3241,
        "name": "岳普湖",
        "parent_id": 474,
        "post": 653128,
        "n": 9
    },
    {
        "id": 3242,
        "name": "伽师",
        "parent_id": 474,
        "post": 653129,
        "n": 10
    },
    {
        "id": 3243,
        "name": "巴楚",
        "parent_id": 474,
        "post": 653130,
        "n": 11
    },
    {
        "id": 3244,
        "name": "塔什库尔干",
        "parent_id": 474,
        "post": 653131,
        "n": 12
    },
    {
        "id": 3245,
        "name": "和田",
        "parent_id": 475,
        "post": 653201,
        "n": 1
    },
    {
        "id": 3246,
        "name": "和田",
        "parent_id": 475,
        "post": 653221,
        "n": 2
    },
    {
        "id": 3247,
        "name": "墨玉",
        "parent_id": 475,
        "post": 653222,
        "n": 3
    },
    {
        "id": 3248,
        "name": "皮山",
        "parent_id": 475,
        "post": 653223,
        "n": 4
    },
    {
        "id": 3249,
        "name": "洛浦",
        "parent_id": 475,
        "post": 653224,
        "n": 5
    },
    {
        "id": 3250,
        "name": "策勒",
        "parent_id": 475,
        "post": 653225,
        "n": 6
    },
    {
        "id": 3251,
        "name": "于田",
        "parent_id": 475,
        "post": 653226,
        "n": 7
    },
    {
        "id": 3252,
        "name": "民丰",
        "parent_id": 475,
        "post": 653227,
        "n": 8
    },
    {
        "id": 3253,
        "name": "伊宁",
        "parent_id": 476,
        "post": 654002,
        "n": 1
    },
    {
        "id": 3254,
        "name": "奎屯",
        "parent_id": 476,
        "post": 654003,
        "n": 2
    },
    {
        "id": 3255,
        "name": "伊宁",
        "parent_id": 476,
        "post": 654021,
        "n": 4
    },
    {
        "id": 3256,
        "name": "察布查尔锡伯",
        "parent_id": 476,
        "post": 654022,
        "n": 5
    },
    {
        "id": 3257,
        "name": "霍城",
        "parent_id": 476,
        "post": 654023,
        "n": 6
    },
    {
        "id": 3258,
        "name": "巩留",
        "parent_id": 476,
        "post": 654024,
        "n": 7
    },
    {
        "id": 3259,
        "name": "新源",
        "parent_id": 476,
        "post": 654025,
        "n": 8
    },
    {
        "id": 3260,
        "name": "昭苏",
        "parent_id": 476,
        "post": 654026,
        "n": 9
    },
    {
        "id": 3261,
        "name": "特克斯",
        "parent_id": 476,
        "post": 654027,
        "n": 10
    },
    {
        "id": 3262,
        "name": "尼勒克",
        "parent_id": 476,
        "post": 654028,
        "n": 11
    },
    {
        "id": 3263,
        "name": "塔城",
        "parent_id": 477,
        "post": 654201,
        "n": 1
    },
    {
        "id": 3264,
        "name": "乌苏",
        "parent_id": 477,
        "post": 654202,
        "n": 2
    },
    {
        "id": 3265,
        "name": "额敏",
        "parent_id": 477,
        "post": 654221,
        "n": 3
    },
    {
        "id": 3266,
        "name": "沙湾",
        "parent_id": 477,
        "post": 654223,
        "n": 4
    },
    {
        "id": 3267,
        "name": "托里",
        "parent_id": 477,
        "post": 654224,
        "n": 5
    },
    {
        "id": 3268,
        "name": "裕民",
        "parent_id": 477,
        "post": 654225,
        "n": 6
    },
    {
        "id": 3269,
        "name": "和布克赛尔",
        "parent_id": 477,
        "post": 654226,
        "n": 7
    },
    {
        "id": 3270,
        "name": "阿勒泰",
        "parent_id": 478,
        "post": 654301,
        "n": 1
    },
    {
        "id": 3271,
        "name": "布尔津",
        "parent_id": 478,
        "post": 654321,
        "n": 2
    },
    {
        "id": 3272,
        "name": "富蕴",
        "parent_id": 478,
        "post": 654322,
        "n": 3
    },
    {
        "id": 3273,
        "name": "福海",
        "parent_id": 478,
        "post": 654323,
        "n": 4
    },
    {
        "id": 3274,
        "name": "哈巴河",
        "parent_id": 478,
        "post": 654324,
        "n": 5
    },
    {
        "id": 3275,
        "name": "青河",
        "parent_id": 478,
        "post": 654325,
        "n": 6
    },
    {
        "id": 3276,
        "name": "吉木乃",
        "parent_id": 478,
        "post": 654326,
        "n": 7
    },
    {
        "id": 3277,
        "name": "松山",
        "parent_id": 485,
        "post": 6300100,
        "n": 1
    },
    {
        "id": 3278,
        "name": "信义",
        "parent_id": 485,
        "post": 6300200,
        "n": 2
    },
    {
        "id": 3279,
        "name": "大安",
        "parent_id": 485,
        "post": 6300300,
        "n": 3
    },
    {
        "id": 3280,
        "name": "中山",
        "parent_id": 485,
        "post": 6300400,
        "n": 4
    },
    {
        "id": 3281,
        "name": "中正",
        "parent_id": 485,
        "post": 6300500,
        "n": 5
    },
    {
        "id": 3282,
        "name": "大同",
        "parent_id": 485,
        "post": 6300600,
        "n": 6
    },
    {
        "id": 3283,
        "name": "万华",
        "parent_id": 485,
        "post": 6300700,
        "n": 7
    },
    {
        "id": 3284,
        "name": "文山",
        "parent_id": 485,
        "post": 6300800,
        "n": 8
    },
    {
        "id": 3285,
        "name": "南港",
        "parent_id": 485,
        "post": 6300900,
        "n": 9
    },
    {
        "id": 3286,
        "name": "内湖",
        "parent_id": 485,
        "post": 6301000,
        "n": 10
    },
    {
        "id": 3287,
        "name": "士林",
        "parent_id": 485,
        "post": 6301100,
        "n": 11
    },
    {
        "id": 3288,
        "name": "北投",
        "parent_id": 485,
        "post": 6301200,
        "n": 12
    },
    {
        "id": 3289,
        "name": "盐埕",
        "parent_id": 486,
        "post": 6400100,
        "n": 1
    },
    {
        "id": 3290,
        "name": "鼓山",
        "parent_id": 486,
        "post": 6400200,
        "n": 2
    },
    {
        "id": 3291,
        "name": "左营",
        "parent_id": 486,
        "post": 6400300,
        "n": 3
    },
    {
        "id": 3292,
        "name": "楠梓",
        "parent_id": 486,
        "post": 6400400,
        "n": 4
    },
    {
        "id": 3293,
        "name": "三民",
        "parent_id": 486,
        "post": 6400500,
        "n": 5
    },
    {
        "id": 3294,
        "name": "新兴",
        "parent_id": 486,
        "post": 6400600,
        "n": 6
    },
    {
        "id": 3295,
        "name": "前金",
        "parent_id": 486,
        "post": 6400700,
        "n": 7
    },
    {
        "id": 3296,
        "name": "苓雅",
        "parent_id": 486,
        "post": 6400800,
        "n": 8
    },
    {
        "id": 3297,
        "name": "前镇",
        "parent_id": 486,
        "post": 6400900,
        "n": 9
    },
    {
        "id": 3298,
        "name": "旗津",
        "parent_id": 486,
        "post": 6401000,
        "n": 10
    },
    {
        "id": 3299,
        "name": "小港",
        "parent_id": 486,
        "post": 6401100,
        "n": 11
    },
    {
        "id": 3300,
        "name": "中正",
        "parent_id": 487,
        "post": 1001701,
        "n": 1
    },
    {
        "id": 3301,
        "name": "七堵",
        "parent_id": 487,
        "post": 1001702,
        "n": 2
    },
    {
        "id": 3302,
        "name": "暖暖",
        "parent_id": 487,
        "post": 1001703,
        "n": 3
    },
    {
        "id": 3303,
        "name": "仁爱",
        "parent_id": 487,
        "post": 1001704,
        "n": 4
    },
    {
        "id": 3304,
        "name": "中山",
        "parent_id": 487,
        "post": 1001705,
        "n": 5
    },
    {
        "id": 3305,
        "name": "安乐",
        "parent_id": 487,
        "post": 1001706,
        "n": 6
    },
    {
        "id": 3306,
        "name": "信义",
        "parent_id": 487,
        "post": 1001707,
        "n": 7
    },
    {
        "id": 3307,
        "name": "大安",
        "parent_id": 488,
        "post": "",
        "n": 1
    },
    {
        "id": 3308,
        "name": "神冈",
        "parent_id": 488,
        "post": "",
        "n": 2
    },
    {
        "id": 3309,
        "name": "石冈",
        "parent_id": 488,
        "post": "",
        "n": 3
    },
    {
        "id": 3310,
        "name": "东势",
        "parent_id": 488,
        "post": "",
        "n": 4
    },
    {
        "id": 3311,
        "name": "新社",
        "parent_id": 488,
        "post": "",
        "n": 5
    },
    {
        "id": 3312,
        "name": "和平",
        "parent_id": 488,
        "post": "",
        "n": 6
    },
    {
        "id": 3313,
        "name": "大肚",
        "parent_id": 488,
        "post": "",
        "n": 7
    },
    {
        "id": 3314,
        "name": "沙鹿",
        "parent_id": 488,
        "post": "",
        "n": 8
    },
    {
        "id": 3315,
        "name": "龙井",
        "parent_id": 488,
        "post": "",
        "n": 9
    },
    {
        "id": 3316,
        "name": "梧栖",
        "parent_id": 488,
        "post": "",
        "n": 10
    },
    {
        "id": 3317,
        "name": "清水",
        "parent_id": 488,
        "post": "",
        "n": 11
    },
    {
        "id": 3318,
        "name": "大甲",
        "parent_id": 488,
        "post": "",
        "n": 12
    },
    {
        "id": 3319,
        "name": "外埔",
        "parent_id": 488,
        "post": "",
        "n": 13
    },
    {
        "id": 3320,
        "name": "大雅",
        "parent_id": 488,
        "post": "",
        "n": 14
    },
    {
        "id": 3321,
        "name": "潭子",
        "parent_id": 488,
        "post": "",
        "n": 15
    },
    {
        "id": 3322,
        "name": "后里",
        "parent_id": 488,
        "post": "",
        "n": 16
    },
    {
        "id": 3323,
        "name": "丰原",
        "parent_id": 488,
        "post": "",
        "n": 17
    },
    {
        "id": 3324,
        "name": "乌日",
        "parent_id": 488,
        "post": "",
        "n": 18
    },
    {
        "id": 3325,
        "name": "雾峰",
        "parent_id": 488,
        "post": "",
        "n": 19
    },
    {
        "id": 3326,
        "name": "大里",
        "parent_id": 488,
        "post": "",
        "n": 20
    },
    {
        "id": 3327,
        "name": "太平",
        "parent_id": 488,
        "post": "",
        "n": 21
    },
    {
        "id": 3328,
        "name": "中区",
        "parent_id": 488,
        "post": 1001901,
        "n": 22
    },
    {
        "id": 3329,
        "name": "东区",
        "parent_id": 488,
        "post": 1001902,
        "n": 23
    },
    {
        "id": 3330,
        "name": "南区",
        "parent_id": 488,
        "post": 1001903,
        "n": 24
    },
    {
        "id": 3331,
        "name": "西区",
        "parent_id": 488,
        "post": 1001904,
        "n": 25
    },
    {
        "id": 3332,
        "name": "北区",
        "parent_id": 488,
        "post": 1001905,
        "n": 26
    },
    {
        "id": 3333,
        "name": "西屯",
        "parent_id": 488,
        "post": 1001906,
        "n": 27
    },
    {
        "id": 3334,
        "name": "南屯",
        "parent_id": 488,
        "post": 1001907,
        "n": 28
    },
    {
        "id": 3335,
        "name": "北屯",
        "parent_id": 488,
        "post": 1001908,
        "n": 29
    },
    {
        "id": 3336,
        "name": "东区",
        "parent_id": 489,
        "post": 1002101,
        "n": 1
    },
    {
        "id": 3337,
        "name": "南区",
        "parent_id": 489,
        "post": 1002102,
        "n": 2
    },
    {
        "id": 3338,
        "name": "北区",
        "parent_id": 489,
        "post": 1002104,
        "n": 3
    },
    {
        "id": 3339,
        "name": "安南",
        "parent_id": 489,
        "post": 1002106,
        "n": 4
    },
    {
        "id": 3340,
        "name": "安平",
        "parent_id": 489,
        "post": 1002107,
        "n": 5
    },
    {
        "id": 3341,
        "name": "中西",
        "parent_id": 489,
        "post": 1002108,
        "n": 6
    },
    {
        "id": 3342,
        "name": "东区",
        "parent_id": 490,
        "post": 1001801,
        "n": 1
    },
    {
        "id": 3343,
        "name": "北区",
        "parent_id": 490,
        "post": 1001802,
        "n": 2
    },
    {
        "id": 3344,
        "name": "香山",
        "parent_id": 490,
        "post": 1001803,
        "n": 3
    },
    {
        "id": 3345,
        "name": "东区",
        "parent_id": 491,
        "post": 1002001,
        "n": 1
    },
    {
        "id": 3346,
        "name": "西区",
        "parent_id": 491,
        "post": 1002002,
        "n": 2
    },
    {
        "id": 3347,
        "name": "板桥",
        "parent_id": 492,
        "post": "",
        "n": 1
    },
    {
        "id": 3348,
        "name": "瑞芳",
        "parent_id": 492,
        "post": "",
        "n": 2
    },
    {
        "id": 3349,
        "name": "八里",
        "parent_id": 492,
        "post": "",
        "n": 3
    },
    {
        "id": 3350,
        "name": "深坑",
        "parent_id": 492,
        "post": "",
        "n": 4
    },
    {
        "id": 3351,
        "name": "三芝",
        "parent_id": 492,
        "post": "",
        "n": 5
    },
    {
        "id": 3352,
        "name": "金山",
        "parent_id": 492,
        "post": "",
        "n": 6
    },
    {
        "id": 3353,
        "name": "万里",
        "parent_id": 492,
        "post": "",
        "n": 7
    },
    {
        "id": 3354,
        "name": "贡寮",
        "parent_id": 492,
        "post": "",
        "n": 8
    },
    {
        "id": 3355,
        "name": "石门",
        "parent_id": 492,
        "post": "",
        "n": 9
    },
    {
        "id": 3356,
        "name": "双溪",
        "parent_id": 492,
        "post": "",
        "n": 10
    },
    {
        "id": 3357,
        "name": "石碇",
        "parent_id": 492,
        "post": "",
        "n": 11
    },
    {
        "id": 3358,
        "name": "坪林",
        "parent_id": 492,
        "post": "",
        "n": 12
    },
    {
        "id": 3359,
        "name": "乌来",
        "parent_id": 492,
        "post": "",
        "n": 13
    },
    {
        "id": 3360,
        "name": "泰山",
        "parent_id": 492,
        "post": "",
        "n": 14
    },
    {
        "id": 3361,
        "name": "五股",
        "parent_id": 492,
        "post": "",
        "n": 15
    },
    {
        "id": 3362,
        "name": "莺歌",
        "parent_id": 492,
        "post": "",
        "n": 16
    },
    {
        "id": 3363,
        "name": "中和",
        "parent_id": 492,
        "post": "",
        "n": 17
    },
    {
        "id": 3364,
        "name": "新庄",
        "parent_id": 492,
        "post": "",
        "n": 18
    },
    {
        "id": 3365,
        "name": "三重",
        "parent_id": 492,
        "post": "",
        "n": 19
    },
    {
        "id": 3366,
        "name": "新店",
        "parent_id": 492,
        "post": "",
        "n": 20
    },
    {
        "id": 3367,
        "name": "土城",
        "parent_id": 492,
        "post": "",
        "n": 21
    },
    {
        "id": 3368,
        "name": "永和",
        "parent_id": 492,
        "post": "",
        "n": 22
    },
    {
        "id": 3369,
        "name": "芦洲",
        "parent_id": 492,
        "post": "",
        "n": 23
    },
    {
        "id": 3370,
        "name": "汐止",
        "parent_id": 492,
        "post": "",
        "n": 24
    },
    {
        "id": 3371,
        "name": "树林",
        "parent_id": 492,
        "post": "",
        "n": 25
    },
    {
        "id": 3372,
        "name": "淡水",
        "parent_id": 492,
        "post": "",
        "n": 26
    },
    {
        "id": 3373,
        "name": "三峡",
        "parent_id": 492,
        "post": "",
        "n": 27
    },
    {
        "id": 3374,
        "name": "林口",
        "parent_id": 492,
        "post": "",
        "n": 28
    },
    {
        "id": 3375,
        "name": "平溪",
        "parent_id": 492,
        "post": "",
        "n": 29
    },
    {
        "id": 3376,
        "name": "宜兰",
        "parent_id": 493,
        "post": 1000201,
        "n": 1
    },
    {
        "id": 3377,
        "name": "罗东",
        "parent_id": 493,
        "post": 1000202,
        "n": 2
    },
    {
        "id": 3378,
        "name": "苏澳",
        "parent_id": 493,
        "post": 1000203,
        "n": 3
    },
    {
        "id": 3379,
        "name": "头城",
        "parent_id": 493,
        "post": 1000204,
        "n": 4
    },
    {
        "id": 3380,
        "name": "礁溪",
        "parent_id": 493,
        "post": 1000205,
        "n": 5
    },
    {
        "id": 3381,
        "name": "壮围",
        "parent_id": 493,
        "post": 1000206,
        "n": 6
    },
    {
        "id": 3382,
        "name": "员山",
        "parent_id": 493,
        "post": 1000207,
        "n": 7
    },
    {
        "id": 3383,
        "name": "冬山",
        "parent_id": 493,
        "post": 1000208,
        "n": 8
    },
    {
        "id": 3384,
        "name": "五结",
        "parent_id": 493,
        "post": 1000209,
        "n": 9
    },
    {
        "id": 3385,
        "name": "三星",
        "parent_id": 493,
        "post": 1000210,
        "n": 10
    },
    {
        "id": 3386,
        "name": "大同",
        "parent_id": 493,
        "post": 1000211,
        "n": 11
    },
    {
        "id": 3387,
        "name": "南澳",
        "parent_id": 493,
        "post": 1000212,
        "n": 12
    },
    {
        "id": 3388,
        "name": "桃园",
        "parent_id": 494,
        "post": 1000301,
        "n": 1
    },
    {
        "id": 3389,
        "name": "中坜",
        "parent_id": 494,
        "post": 1000302,
        "n": 2
    },
    {
        "id": 3390,
        "name": "大溪",
        "parent_id": 494,
        "post": 1000303,
        "n": 3
    },
    {
        "id": 3391,
        "name": "杨梅",
        "parent_id": 494,
        "post": 1000304,
        "n": 4
    },
    {
        "id": 3392,
        "name": "芦竹",
        "parent_id": 494,
        "post": 1000305,
        "n": 5
    },
    {
        "id": 3393,
        "name": "大园",
        "parent_id": 494,
        "post": 1000306,
        "n": 6
    },
    {
        "id": 3394,
        "name": "龟山",
        "parent_id": 494,
        "post": 1000307,
        "n": 7
    },
    {
        "id": 3395,
        "name": "八德",
        "parent_id": 494,
        "post": 1000308,
        "n": 8
    },
    {
        "id": 3396,
        "name": "龙潭",
        "parent_id": 494,
        "post": 1000309,
        "n": 9
    },
    {
        "id": 3397,
        "name": "平镇",
        "parent_id": 494,
        "post": 1000310,
        "n": 10
    },
    {
        "id": 3398,
        "name": "新屋",
        "parent_id": 494,
        "post": 1000311,
        "n": 11
    },
    {
        "id": 3399,
        "name": "观音",
        "parent_id": 494,
        "post": 1000312,
        "n": 12
    },
    {
        "id": 3400,
        "name": "复兴",
        "parent_id": 494,
        "post": 1000313,
        "n": 13
    },
    {
        "id": 3401,
        "name": "竹北",
        "parent_id": 495,
        "post": 1000401,
        "n": 1
    },
    {
        "id": 3402,
        "name": "竹东",
        "parent_id": 495,
        "post": 1000402,
        "n": 2
    },
    {
        "id": 3403,
        "name": "新埔",
        "parent_id": 495,
        "post": 1000403,
        "n": 3
    },
    {
        "id": 3404,
        "name": "关西",
        "parent_id": 495,
        "post": 1000404,
        "n": 4
    },
    {
        "id": 3405,
        "name": "湖口",
        "parent_id": 495,
        "post": 1000405,
        "n": 5
    },
    {
        "id": 3406,
        "name": "新丰",
        "parent_id": 495,
        "post": 1000406,
        "n": 6
    },
    {
        "id": 3407,
        "name": "芎林",
        "parent_id": 495,
        "post": 1000407,
        "n": 7
    },
    {
        "id": 3408,
        "name": "横山",
        "parent_id": 495,
        "post": 1000408,
        "n": 8
    },
    {
        "id": 3409,
        "name": "北埔",
        "parent_id": 495,
        "post": 1000409,
        "n": 9
    },
    {
        "id": 3410,
        "name": "宝山",
        "parent_id": 495,
        "post": 1000410,
        "n": 10
    },
    {
        "id": 3411,
        "name": "峨眉",
        "parent_id": 495,
        "post": 1000411,
        "n": 11
    },
    {
        "id": 3412,
        "name": "尖石",
        "parent_id": 495,
        "post": 1000412,
        "n": 12
    },
    {
        "id": 3413,
        "name": "五峰",
        "parent_id": 495,
        "post": 1000413,
        "n": 13
    },
    {
        "id": 3414,
        "name": "苗栗",
        "parent_id": 496,
        "post": 1000501,
        "n": 1
    },
    {
        "id": 3415,
        "name": "苑里",
        "parent_id": 496,
        "post": 1000502,
        "n": 2
    },
    {
        "id": 3416,
        "name": "通霄",
        "parent_id": 496,
        "post": 1000503,
        "n": 3
    },
    {
        "id": 3417,
        "name": "竹南",
        "parent_id": 496,
        "post": 1000504,
        "n": 4
    },
    {
        "id": 3418,
        "name": "头份",
        "parent_id": 496,
        "post": 1000505,
        "n": 5
    },
    {
        "id": 3419,
        "name": "后龙",
        "parent_id": 496,
        "post": 1000506,
        "n": 6
    },
    {
        "id": 3420,
        "name": "卓兰",
        "parent_id": 496,
        "post": 1000507,
        "n": 7
    },
    {
        "id": 3421,
        "name": "大湖",
        "parent_id": 496,
        "post": 1000508,
        "n": 8
    },
    {
        "id": 3422,
        "name": "公馆",
        "parent_id": 496,
        "post": 1000509,
        "n": 9
    },
    {
        "id": 3423,
        "name": "铜锣",
        "parent_id": 496,
        "post": 1000510,
        "n": 10
    },
    {
        "id": 3424,
        "name": "南庄",
        "parent_id": 496,
        "post": 1000511,
        "n": 11
    },
    {
        "id": 3425,
        "name": "头屋",
        "parent_id": 496,
        "post": 1000512,
        "n": 12
    },
    {
        "id": 3426,
        "name": "三义",
        "parent_id": 496,
        "post": 1000513,
        "n": 13
    },
    {
        "id": 3427,
        "name": "西湖",
        "parent_id": 496,
        "post": 1000514,
        "n": 14
    },
    {
        "id": 3428,
        "name": "造桥",
        "parent_id": 496,
        "post": 1000515,
        "n": 15
    },
    {
        "id": 3429,
        "name": "三湾",
        "parent_id": 496,
        "post": 1000516,
        "n": 16
    },
    {
        "id": 3430,
        "name": "狮潭",
        "parent_id": 496,
        "post": 1000517,
        "n": 17
    },
    {
        "id": 3431,
        "name": "泰安",
        "parent_id": 496,
        "post": 1000518,
        "n": 18
    },
    {
        "id": 3432,
        "name": "彰化",
        "parent_id": 497,
        "post": 1000701,
        "n": 1
    },
    {
        "id": 3433,
        "name": "鹿港",
        "parent_id": 497,
        "post": 1000702,
        "n": 2
    },
    {
        "id": 3434,
        "name": "和美",
        "parent_id": 497,
        "post": 1000703,
        "n": 3
    },
    {
        "id": 3435,
        "name": "线西",
        "parent_id": 497,
        "post": 1000704,
        "n": 4
    },
    {
        "id": 3436,
        "name": "伸港",
        "parent_id": 497,
        "post": 1000705,
        "n": 5
    },
    {
        "id": 3437,
        "name": "福兴",
        "parent_id": 497,
        "post": 1000706,
        "n": 6
    },
    {
        "id": 3438,
        "name": "秀水",
        "parent_id": 497,
        "post": 1000707,
        "n": 7
    },
    {
        "id": 3439,
        "name": "花坛",
        "parent_id": 497,
        "post": 1000708,
        "n": 8
    },
    {
        "id": 3440,
        "name": "芬园",
        "parent_id": 497,
        "post": 1000709,
        "n": 9
    },
    {
        "id": 3441,
        "name": "员林",
        "parent_id": 497,
        "post": 1000710,
        "n": 10
    },
    {
        "id": 3442,
        "name": "溪湖",
        "parent_id": 497,
        "post": 1000711,
        "n": 11
    },
    {
        "id": 3443,
        "name": "田中",
        "parent_id": 497,
        "post": 1000712,
        "n": 12
    },
    {
        "id": 3444,
        "name": "大村",
        "parent_id": 497,
        "post": 1000713,
        "n": 13
    },
    {
        "id": 3445,
        "name": "埔盐",
        "parent_id": 497,
        "post": 1000714,
        "n": 14
    },
    {
        "id": 3446,
        "name": "埔心",
        "parent_id": 497,
        "post": 1000715,
        "n": 15
    },
    {
        "id": 3447,
        "name": "永靖",
        "parent_id": 497,
        "post": 1000716,
        "n": 16
    },
    {
        "id": 3448,
        "name": "社头",
        "parent_id": 497,
        "post": 1000717,
        "n": 17
    },
    {
        "id": 3449,
        "name": "二水",
        "parent_id": 497,
        "post": 1000718,
        "n": 18
    },
    {
        "id": 3450,
        "name": "北斗",
        "parent_id": 497,
        "post": 1000719,
        "n": 19
    },
    {
        "id": 3451,
        "name": "二林",
        "parent_id": 497,
        "post": 1000720,
        "n": 20
    },
    {
        "id": 3452,
        "name": "田尾",
        "parent_id": 497,
        "post": 1000721,
        "n": 21
    },
    {
        "id": 3453,
        "name": "埤头",
        "parent_id": 497,
        "post": 1000722,
        "n": 22
    },
    {
        "id": 3454,
        "name": "芳苑",
        "parent_id": 497,
        "post": 1000723,
        "n": 23
    },
    {
        "id": 3455,
        "name": "大城",
        "parent_id": 497,
        "post": 1000724,
        "n": 24
    },
    {
        "id": 3456,
        "name": "竹塘",
        "parent_id": 497,
        "post": 1000725,
        "n": 25
    },
    {
        "id": 3457,
        "name": "溪州",
        "parent_id": 497,
        "post": 1000726,
        "n": 26
    },
    {
        "id": 3458,
        "name": "南投",
        "parent_id": 498,
        "post": 1000801,
        "n": 1
    },
    {
        "id": 3459,
        "name": "南投",
        "parent_id": 498,
        "post": 1000802,
        "n": 2
    },
    {
        "id": 3460,
        "name": "草屯",
        "parent_id": 498,
        "post": 1000803,
        "n": 3
    },
    {
        "id": 3461,
        "name": "竹山",
        "parent_id": 498,
        "post": 1000804,
        "n": 4
    },
    {
        "id": 3462,
        "name": "集集",
        "parent_id": 498,
        "post": 1000805,
        "n": 5
    },
    {
        "id": 3463,
        "name": "名间",
        "parent_id": 498,
        "post": 1000806,
        "n": 6
    },
    {
        "id": 3464,
        "name": "鹿谷",
        "parent_id": 498,
        "post": 1000807,
        "n": 7
    },
    {
        "id": 3465,
        "name": "中寮",
        "parent_id": 498,
        "post": 1000808,
        "n": 8
    },
    {
        "id": 3466,
        "name": "鱼池",
        "parent_id": 498,
        "post": 1000809,
        "n": 9
    },
    {
        "id": 3467,
        "name": "国姓",
        "parent_id": 498,
        "post": 1000810,
        "n": 10
    },
    {
        "id": 3468,
        "name": "水里",
        "parent_id": 498,
        "post": 1000811,
        "n": 11
    },
    {
        "id": 3469,
        "name": "信义",
        "parent_id": 498,
        "post": 1000812,
        "n": 12
    },
    {
        "id": 3470,
        "name": "仁爱",
        "parent_id": 498,
        "post": 1000813,
        "n": 13
    },
    {
        "id": 3471,
        "name": "斗六",
        "parent_id": 499,
        "post": 1000901,
        "n": 1
    },
    {
        "id": 3472,
        "name": "斗南",
        "parent_id": 499,
        "post": 1000902,
        "n": 2
    },
    {
        "id": 3473,
        "name": "虎尾",
        "parent_id": 499,
        "post": 1000903,
        "n": 3
    },
    {
        "id": 3474,
        "name": "西螺",
        "parent_id": 499,
        "post": 1000904,
        "n": 4
    },
    {
        "id": 3475,
        "name": "土库",
        "parent_id": 499,
        "post": 1000905,
        "n": 5
    },
    {
        "id": 3476,
        "name": "北港",
        "parent_id": 499,
        "post": 1000906,
        "n": 6
    },
    {
        "id": 3477,
        "name": "古坑",
        "parent_id": 499,
        "post": 1000907,
        "n": 7
    },
    {
        "id": 3478,
        "name": "大埤",
        "parent_id": 499,
        "post": 1000908,
        "n": 8
    },
    {
        "id": 3479,
        "name": "莿桐",
        "parent_id": 499,
        "post": 1000909,
        "n": 9
    },
    {
        "id": 3480,
        "name": "林内",
        "parent_id": 499,
        "post": 1000910,
        "n": 10
    },
    {
        "id": 3481,
        "name": "二仑",
        "parent_id": 499,
        "post": 1000911,
        "n": 11
    },
    {
        "id": 3482,
        "name": "仑背",
        "parent_id": 499,
        "post": 1000912,
        "n": 12
    },
    {
        "id": 3483,
        "name": "麦寮",
        "parent_id": 499,
        "post": 1000913,
        "n": 13
    },
    {
        "id": 3484,
        "name": "东势",
        "parent_id": 499,
        "post": 1000914,
        "n": 14
    },
    {
        "id": 3485,
        "name": "褒忠",
        "parent_id": 499,
        "post": 1000915,
        "n": 15
    },
    {
        "id": 3486,
        "name": "台西",
        "parent_id": 499,
        "post": 1000916,
        "n": 16
    },
    {
        "id": 3487,
        "name": "元长",
        "parent_id": 499,
        "post": 1000917,
        "n": 17
    },
    {
        "id": 3488,
        "name": "四湖",
        "parent_id": 499,
        "post": 1000918,
        "n": 18
    },
    {
        "id": 3489,
        "name": "口湖",
        "parent_id": 499,
        "post": 1000919,
        "n": 19
    },
    {
        "id": 3490,
        "name": "水林",
        "parent_id": 499,
        "post": 1000920,
        "n": 20
    },
    {
        "id": 3491,
        "name": "太保",
        "parent_id": 500,
        "post": "",
        "n": 1
    },
    {
        "id": 3492,
        "name": "朴子",
        "parent_id": 500,
        "post": "",
        "n": 2
    },
    {
        "id": 3493,
        "name": "布袋",
        "parent_id": 500,
        "post": "",
        "n": 3
    },
    {
        "id": 3494,
        "name": "大林",
        "parent_id": 500,
        "post": 10010,
        "n": 4
    },
    {
        "id": 3495,
        "name": "民雄",
        "parent_id": 500,
        "post": 1001001,
        "n": 5
    },
    {
        "id": 3496,
        "name": "溪口",
        "parent_id": 500,
        "post": 1001002,
        "n": 6
    },
    {
        "id": 3497,
        "name": "新港",
        "parent_id": 500,
        "post": 1001003,
        "n": 7
    },
    {
        "id": 3498,
        "name": "六脚",
        "parent_id": 500,
        "post": 1001004,
        "n": 8
    },
    {
        "id": 3499,
        "name": "东石",
        "parent_id": 500,
        "post": 1001005,
        "n": 9
    },
    {
        "id": 3500,
        "name": "义竹",
        "parent_id": 500,
        "post": 1001006,
        "n": 10
    },
    {
        "id": 3501,
        "name": "鹿草",
        "parent_id": 500,
        "post": 1001007,
        "n": 11
    },
    {
        "id": 3502,
        "name": "水上",
        "parent_id": 500,
        "post": 1001008,
        "n": 12
    },
    {
        "id": 3503,
        "name": "中埔",
        "parent_id": 500,
        "post": 1001009,
        "n": 13
    },
    {
        "id": 3504,
        "name": "竹崎",
        "parent_id": 500,
        "post": 1001010,
        "n": 14
    },
    {
        "id": 3505,
        "name": "梅山",
        "parent_id": 500,
        "post": 1001011,
        "n": 15
    },
    {
        "id": 3506,
        "name": "番路",
        "parent_id": 500,
        "post": 1001012,
        "n": 16
    },
    {
        "id": 3507,
        "name": "大埔",
        "parent_id": 500,
        "post": 1001013,
        "n": 17
    },
    {
        "id": 3508,
        "name": "阿里山",
        "parent_id": 500,
        "post": 1001014,
        "n": 18
    },
    {
        "id": 3509,
        "name": "屏东",
        "parent_id": 501,
        "post": 1001301,
        "n": 1
    },
    {
        "id": 3510,
        "name": "潮州",
        "parent_id": 501,
        "post": 1001302,
        "n": 2
    },
    {
        "id": 3511,
        "name": "东港",
        "parent_id": 501,
        "post": 1001303,
        "n": 3
    },
    {
        "id": 3512,
        "name": "恒春",
        "parent_id": 501,
        "post": 1001304,
        "n": 4
    },
    {
        "id": 3513,
        "name": "万丹",
        "parent_id": 501,
        "post": 1001305,
        "n": 5
    },
    {
        "id": 3514,
        "name": "长治",
        "parent_id": 501,
        "post": 1001306,
        "n": 6
    },
    {
        "id": 3515,
        "name": "麟洛",
        "parent_id": 501,
        "post": 1001307,
        "n": 7
    },
    {
        "id": 3516,
        "name": "九如",
        "parent_id": 501,
        "post": 1001308,
        "n": 8
    },
    {
        "id": 3517,
        "name": "里港",
        "parent_id": 501,
        "post": 1001309,
        "n": 9
    },
    {
        "id": 3518,
        "name": "盐埔",
        "parent_id": 501,
        "post": 1001310,
        "n": 10
    },
    {
        "id": 3519,
        "name": "高树",
        "parent_id": 501,
        "post": 1001311,
        "n": 11
    },
    {
        "id": 3520,
        "name": "万峦",
        "parent_id": 501,
        "post": 1001312,
        "n": 12
    },
    {
        "id": 3521,
        "name": "内埔",
        "parent_id": 501,
        "post": 1001313,
        "n": 13
    },
    {
        "id": 3522,
        "name": "竹田",
        "parent_id": 501,
        "post": 1001314,
        "n": 14
    },
    {
        "id": 3523,
        "name": "新埤",
        "parent_id": 501,
        "post": 1001315,
        "n": 15
    },
    {
        "id": 3524,
        "name": "枋寮",
        "parent_id": 501,
        "post": 1001316,
        "n": 16
    },
    {
        "id": 3525,
        "name": "新园",
        "parent_id": 501,
        "post": 1001317,
        "n": 17
    },
    {
        "id": 3526,
        "name": "崁顶",
        "parent_id": 501,
        "post": 1001318,
        "n": 18
    },
    {
        "id": 3527,
        "name": "林边",
        "parent_id": 501,
        "post": 1001319,
        "n": 19
    },
    {
        "id": 3528,
        "name": "南州",
        "parent_id": 501,
        "post": 1001320,
        "n": 20
    },
    {
        "id": 3529,
        "name": "佳冬",
        "parent_id": 501,
        "post": 1001321,
        "n": 21
    },
    {
        "id": 3530,
        "name": "琉球",
        "parent_id": 501,
        "post": 1001322,
        "n": 22
    },
    {
        "id": 3531,
        "name": "车城",
        "parent_id": 501,
        "post": 1001323,
        "n": 23
    },
    {
        "id": 3532,
        "name": "满州",
        "parent_id": 501,
        "post": 1001324,
        "n": 24
    },
    {
        "id": 3533,
        "name": "枋山",
        "parent_id": 501,
        "post": 1001325,
        "n": 25
    },
    {
        "id": 3534,
        "name": "三地门",
        "parent_id": 501,
        "post": 1001326,
        "n": 26
    },
    {
        "id": 3535,
        "name": "雾台",
        "parent_id": 501,
        "post": 1001327,
        "n": 27
    },
    {
        "id": 3536,
        "name": "玛家",
        "parent_id": 501,
        "post": 1001328,
        "n": 28
    },
    {
        "id": 3537,
        "name": "泰武",
        "parent_id": 501,
        "post": 1001329,
        "n": 29
    },
    {
        "id": 3538,
        "name": "来义",
        "parent_id": 501,
        "post": 1001330,
        "n": 30
    },
    {
        "id": 3539,
        "name": "春日",
        "parent_id": 501,
        "post": 1001331,
        "n": 31
    },
    {
        "id": 3540,
        "name": "狮子",
        "parent_id": 501,
        "post": 1001332,
        "n": 32
    },
    {
        "id": 3541,
        "name": "牡丹",
        "parent_id": 501,
        "post": 1001333,
        "n": 33
    },
    {
        "id": 3542,
        "name": "卑南",
        "parent_id": 502,
        "post": "",
        "n": 1
    },
    {
        "id": 3543,
        "name": "台东",
        "parent_id": 502,
        "post": 1001401,
        "n": 2
    },
    {
        "id": 3544,
        "name": "成功",
        "parent_id": 502,
        "post": 1001402,
        "n": 3
    },
    {
        "id": 3545,
        "name": "关山",
        "parent_id": 502,
        "post": 1001403,
        "n": 4
    },
    {
        "id": 3546,
        "name": "鹿野",
        "parent_id": 502,
        "post": 1001405,
        "n": 5
    },
    {
        "id": 3547,
        "name": "池上",
        "parent_id": 502,
        "post": 1001406,
        "n": 6
    },
    {
        "id": 3548,
        "name": "东河",
        "parent_id": 502,
        "post": 1001407,
        "n": 7
    },
    {
        "id": 3549,
        "name": "长滨",
        "parent_id": 502,
        "post": 1001408,
        "n": 8
    },
    {
        "id": 3550,
        "name": "太麻里",
        "parent_id": 502,
        "post": 1001409,
        "n": 9
    },
    {
        "id": 3551,
        "name": "大武",
        "parent_id": 502,
        "post": 1001410,
        "n": 10
    },
    {
        "id": 3552,
        "name": "绿岛",
        "parent_id": 502,
        "post": 1001411,
        "n": 11
    },
    {
        "id": 3553,
        "name": "海端",
        "parent_id": 502,
        "post": 1001412,
        "n": 12
    },
    {
        "id": 3554,
        "name": "延平",
        "parent_id": 502,
        "post": 1001413,
        "n": 13
    },
    {
        "id": 3555,
        "name": "金峰",
        "parent_id": 502,
        "post": 1001414,
        "n": 14
    },
    {
        "id": 3556,
        "name": "达仁",
        "parent_id": 502,
        "post": 1001415,
        "n": 15
    },
    {
        "id": 3557,
        "name": "兰屿",
        "parent_id": 502,
        "post": 1001416,
        "n": 16
    },
    {
        "id": 3558,
        "name": "花莲",
        "parent_id": 503,
        "post": 1001501,
        "n": 1
    },
    {
        "id": 3559,
        "name": "凤林",
        "parent_id": 503,
        "post": 1001502,
        "n": 2
    },
    {
        "id": 3560,
        "name": "玉里",
        "parent_id": 503,
        "post": 1001503,
        "n": 3
    },
    {
        "id": 3561,
        "name": "新城",
        "parent_id": 503,
        "post": 1001504,
        "n": 4
    },
    {
        "id": 3562,
        "name": "吉安",
        "parent_id": 503,
        "post": 1001505,
        "n": 5
    },
    {
        "id": 3563,
        "name": "寿丰",
        "parent_id": 503,
        "post": 1001506,
        "n": 6
    },
    {
        "id": 3564,
        "name": "光复",
        "parent_id": 503,
        "post": 1001507,
        "n": 7
    },
    {
        "id": 3565,
        "name": "丰滨",
        "parent_id": 503,
        "post": 1001508,
        "n": 8
    },
    {
        "id": 3566,
        "name": "瑞穗",
        "parent_id": 503,
        "post": 1001509,
        "n": 9
    },
    {
        "id": 3567,
        "name": "富里",
        "parent_id": 503,
        "post": 1001510,
        "n": 10
    },
    {
        "id": 3568,
        "name": "秀林",
        "parent_id": 503,
        "post": 1001511,
        "n": 11
    },
    {
        "id": 3569,
        "name": "万荣",
        "parent_id": 503,
        "post": 1001512,
        "n": 12
    },
    {
        "id": 3570,
        "name": "卓溪",
        "parent_id": 503,
        "post": 1001513,
        "n": 13
    },
    {
        "id": 3571,
        "name": "马公",
        "parent_id": 504,
        "post": 1001601,
        "n": 1
    },
    {
        "id": 3572,
        "name": "湖西",
        "parent_id": 504,
        "post": 1001602,
        "n": 2
    },
    {
        "id": 3573,
        "name": "白沙",
        "parent_id": 504,
        "post": 1001603,
        "n": 3
    },
    {
        "id": 3574,
        "name": "西屿",
        "parent_id": 504,
        "post": 1001604,
        "n": 4
    },
    {
        "id": 3575,
        "name": "望安",
        "parent_id": 504,
        "post": 1001605,
        "n": 5
    },
    {
        "id": 3576,
        "name": "七美",
        "parent_id": 504,
        "post": 1001606,
        "n": 6
    },
    {
        "id": 3577,
        "name": "双河",
        "parent_id": 31,
        "post": 659007,
        "n": 21
    },
    {
        "id": 3578,
        "name": "海棠",
        "parent_id": 357,
        "post": "",
        "n": 1
    },
    {
        "id": 3579,
        "name": "吉阳",
        "parent_id": 357,
        "post": "",
        "n": 2
    },
    {
        "id": 3580,
        "name": "天涯",
        "parent_id": 357,
        "post": "",
        "n": 3
    },
    {
        "id": 3581,
        "name": "崖州",
        "parent_id": 357,
        "post": "",
        "n": 4
    },
    {
        "id": 3582,
        "name": "霍尔果斯",
        "parent_id": 476,
        "post": 654004,
        "n": 3
    },
    {
        "id": 3583,
        "name": "前锋",
        "parent_id": 388,
        "post": "",
        "n": 2
    },
    {
        "id": 3584,
        "name": "福绵",
        "parent_id": 350,
        "post": 450903,
        "n": 2
    },
    {
        "id": 3585,
        "name": "可克达拉",
        "parent_id": 31,
        "post": 659008,
        "n": 22
    },
    {
        "id": 7036,
        "name": "龙华",
        "parent_id": 323,
        "post": 440309,
        "n": 7
    },
    {
        "id": 7037,
        "name": "坪山",
        "parent_id": 323,
        "post": 440310,
        "n": 8
    },
    {
        "id": 7038,
        "name": "昆玉",
        "parent_id": 31,
        "post": 659009,
        "n": 23
    },
    {
        "id": 7039,
        "name": "平桂",
        "parent_id": 352,
        "post": 451103,
        "n": 2
    },
    {
        "id": 7040,
        "name": "巴什",
        "parent_id": 152,
        "post": 150603,
        "n": 2
    },
    {
        "id": 7041,
        "name": "叶集",
        "parent_id": 231,
        "post": "",
        "n": 8
    },
    {
        "id": 7042,
        "name": "光明",
        "parent_id": 323,
        "post": 440311,
        "n": 9
    },
    {
        "id": 7043,
        "name": "龙港",
        "parent_id": 210,
        "post": 330383,
        "n": 12
    },
    {
        "id": 7044,
        "name": "胡杨河",
        "parent_id": 31,
        "post": 659010,
        "n": 24
    },
    {
        "id": 7045,
        "name": "西沙",
        "parent_id": 358,
        "post": 460300,
        "n": 1
    },
    {
        "id": 7046,
        "name": "南沙",
        "parent_id": 358,
        "post": 460300,
        "n": 0
    }
]
export default cities