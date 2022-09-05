import { ActionTypes } from '../constants/actiontypes';


const addListData = [
  // {
  //   "phoneNumber": "(596) 931-0168 x70975",
  //   "createdDate": "2015-07-26T19:04:39.331Z",
  //   "lastModified": "2005-11-18T10:01:37.648Z",
  //   "consent": "true",
  //   "campaignName": "Francis Reinger",
  //   "channel": "input",
  //   "campaignId": 72,
  //   "id": "1"
  // },
  // {
  //   "phoneNumber": "942-594-1951 x17910",
  //   "createdDate": "1996-12-29T20:15:17.177Z",
  //   "lastModified": "2043-07-31T06:25:01.239Z",
  //   "consent": "true",
  //   "campaignName": "Hubert Will",
  //   "channel": "hack",
  //   "campaignId": 95,
  //   "id": "2"
  // },
  // {
  //   "phoneNumber": "1-595-481-4137 x77016",
  //   "createdDate": "2070-06-03T02:47:43.017Z",
  //   "lastModified": "2001-08-19T05:06:34.148Z",
  //   "consent": "true",
  //   "campaignName": "Daryl Reichert",
  //   "channel": "parse",
  //   "campaignId": 71,
  //   "id": "3"
  // },
  // {
  //   "phoneNumber": "(676) 227-0147",
  //   "createdDate": "2049-09-23T04:33:00.621Z",
  //   "lastModified": "1995-09-09T02:43:02.072Z",
  //   "consent": "true",
  //   "campaignName": "Jenny Mayert",
  //   "channel": "hack",
  //   "campaignId": 94,
  //   "id": "4"
  // },
  // {
  //   "phoneNumber": "955.259.9362",
  //   "createdDate": "2030-04-25T21:54:30.848Z",
  //   "lastModified": "2084-03-02T17:26:22.446Z",
  //   "consent": "true",
  //   "campaignName": "Miss Hector Kassulke",
  //   "channel": "input",
  //   "campaignId": 76,
  //   "id": "5"
  // },
  // {
  //   "phoneNumber": "(605) 415-7027",
  //   "createdDate": "2039-10-27T14:35:01.055Z",
  //   "lastModified": "2022-02-21T13:06:57.048Z",
  //   "consent": "false",
  //   "campaignName": "Kate Oberbrunner II",
  //   "channel": "input",
  //   "campaignId": 90,
  //   "id": "6"
  // },
  // {
  //   "phoneNumber": "1-563-957-8977 x275",
  //   "createdDate": "2030-07-01T23:23:46.375Z",
  //   "lastModified": "2051-07-05T19:19:49.081Z",
  //   "consent": "false",
  //   "campaignName": "Herman McClure",
  //   "channel": "navigate",
  //   "campaignId": 54,
  //   "id": "7"
  // },
  // {
  //   "phoneNumber": "1-204-379-1395 x057",
  //   "createdDate": "2055-05-29T15:34:03.061Z",
  //   "lastModified": "2083-02-23T13:12:04.017Z",
  //   "consent": "false",
  //   "campaignName": "Gary Bogisich",
  //   "channel": "synthesize",
  //   "campaignId": 51,
  //   "id": "8"
  // },
  // {
  //   "phoneNumber": "(611) 788-7366 x8720",
  //   "createdDate": "2006-02-16T07:04:47.264Z",
  //   "lastModified": "2051-04-03T02:01:11.401Z",
  //   "consent": "false",
  //   "campaignName": "Frank Crist",
  //   "channel": "navigate",
  //   "campaignId": 77,
  //   "id": "9"
  // },
  // {
  //   "phoneNumber": "(905) 925-5818 x2122",
  //   "createdDate": "2034-01-05T19:59:57.983Z",
  //   "lastModified": "2096-06-18T22:20:24.790Z",
  //   "consent": "false",
  //   "campaignName": "Robin Kshlerin II",
  //   "channel": "override",
  //   "campaignId": 7,
  //   "id": "10"
  // },
  // {
  //   "phoneNumber": "596.795.2437",
  //   "createdDate": "2019-04-10T08:58:43.743Z",
  //   "lastModified": "2012-05-06T18:35:18.474Z",
  //   "consent": "false",
  //   "campaignName": "Domingo Hyatt",
  //   "channel": "parse",
  //   "campaignId": 46,
  //   "id": "11"
  // },
  // {
  //   "phoneNumber": "(261) 770-8574",
  //   "createdDate": "2056-08-17T20:04:55.143Z",
  //   "lastModified": "2052-03-10T09:47:36.511Z",
  //   "consent": "false",
  //   "campaignName": "Florence Yost",
  //   "channel": "connect",
  //   "campaignId": 96,
  //   "id": "12"
  // },
  // {
  //   "phoneNumber": "251-237-1140 x4368",
  //   "createdDate": "2034-02-25T05:37:02.075Z",
  //   "lastModified": "2035-02-14T14:00:57.491Z",
  //   "consent": "false",
  //   "campaignName": "Alexander Runolfsson",
  //   "channel": "synthesize",
  //   "campaignId": 87,
  //   "id": "13"
  // },
  // {
  //   "phoneNumber": "849.248.9816 x86390",
  //   "createdDate": "2061-03-19T14:50:24.262Z",
  //   "lastModified": "2076-04-09T00:41:16.621Z",
  //   "consent": "false",
  //   "campaignName": "Darin Balistreri",
  //   "channel": "generate",
  //   "campaignId": 46,
  //   "id": "14"
  // },
  // {
  //   "phoneNumber": "(770) 765-0555 x166",
  //   "createdDate": "2016-06-09T12:00:16.091Z",
  //   "lastModified": "2080-11-14T19:11:46.293Z",
  //   "consent": "false",
  //   "campaignName": "Christian Stiedemann",
  //   "channel": "generate",
  //   "campaignId": 23,
  //   "id": "15"
  // },
  // {
  //   "phoneNumber": "286-250-8385 x12580",
  //   "createdDate": "2082-05-03T05:03:53.898Z",
  //   "lastModified": "1995-11-23T18:22:14.747Z",
  //   "consent": "false",
  //   "campaignName": "Merle Langworth",
  //   "channel": "transmit",
  //   "campaignId": 80,
  //   "id": "16"
  // },
  // {
  //   "phoneNumber": "510.559.5222 x7191",
  //   "createdDate": "2021-01-20T04:02:31.488Z",
  //   "lastModified": "2059-02-25T23:24:19.647Z",
  //   "consent": "false",
  //   "campaignName": "Dolores Altenwerth V",
  //   "channel": "quantify",
  //   "campaignId": 73,
  //   "id": "17"
  // },
  // {
  //   "phoneNumber": "410-222-7985",
  //   "createdDate": "1993-01-01T21:58:41.235Z",
  //   "lastModified": "2044-04-06T01:04:31.820Z",
  //   "consent": "false",
  //   "campaignName": "Tami Little",
  //   "channel": "bypass",
  //   "campaignId": 69,
  //   "id": "18"
  // },
  // {
  //   "phoneNumber": "844-265-7945 x721",
  //   "createdDate": "2036-05-08T16:17:01.330Z",
  //   "lastModified": "2051-12-04T04:48:36.417Z",
  //   "consent": "false",
  //   "campaignName": "Angel Gorczany",
  //   "channel": "input",
  //   "campaignId": 20,
  //   "id": "19"
  // },
  // {
  //   "phoneNumber": "766-837-7207 x9538",
  //   "createdDate": "1993-09-22T22:47:59.141Z",
  //   "lastModified": "2060-07-09T21:08:05.747Z",
  //   "consent": "false",
  //   "campaignName": "Jesse Schimmel",
  //   "channel": "generate",
  //   "campaignId": 3,
  //   "id": "20"
  // },
  // {
  //   "phoneNumber": "770-551-4151",
  //   "createdDate": "2018-11-18T21:19:36.602Z",
  //   "lastModified": "2017-04-09T11:10:01.394Z",
  //   "consent": "false",
  //   "campaignName": "Tracy Leuschke",
  //   "channel": "parse",
  //   "campaignId": 16,
  //   "id": "21"
  // },
  // {
  //   "phoneNumber": "569.586.8431 x028",
  //   "createdDate": "1992-10-29T11:48:55.607Z",
  //   "lastModified": "1992-11-18T15:25:24.647Z",
  //   "consent": "false",
  //   "campaignName": "Mrs. Jody Kiehn",
  //   "channel": "parse",
  //   "campaignId": 92,
  //   "id": "22"
  // },
  // {
  //   "phoneNumber": "455-443-1094 x695",
  //   "createdDate": "2074-10-12T23:07:34.449Z",
  //   "lastModified": "2083-02-22T21:33:27.823Z",
  //   "consent": "false",
  //   "campaignName": "Mrs. Verna Osinski",
  //   "channel": "quantify",
  //   "campaignId": 73,
  //   "id": "23"
  // },
  // {
  //   "phoneNumber": "(491) 843-1742",
  //   "createdDate": "2027-06-11T15:19:45.807Z",
  //   "lastModified": "2046-08-25T03:37:25.842Z",
  //   "consent": "false",
  //   "campaignName": "Barry Treutel",
  //   "channel": "input",
  //   "campaignId": 99,
  //   "id": "24"
  // },
  // {
  //   "phoneNumber": "1-367-935-8099 x4037",
  //   "createdDate": "2014-08-17T18:14:39.754Z",
  //   "lastModified": "2054-07-23T15:13:12.658Z",
  //   "consent": "false",
  //   "campaignName": "Garrett Dietrich",
  //   "channel": "generate",
  //   "campaignId": 91,
  //   "id": "25"
  // },
  // {
  //   "phoneNumber": "(236) 768-0499 x13154",
  //   "createdDate": "2039-03-03T04:10:09.571Z",
  //   "lastModified": "2047-05-22T06:00:22.623Z",
  //   "consent": "false",
  //   "campaignName": "Erica Haley",
  //   "channel": "override",
  //   "campaignId": 79,
  //   "id": "26"
  // },
  // {
  //   "phoneNumber": "424-843-1118 x41034",
  //   "createdDate": "2007-03-12T23:32:47.746Z",
  //   "lastModified": "2081-02-08T00:07:40.284Z",
  //   "consent": "false",
  //   "campaignName": "Thomas Okuneva",
  //   "channel": "transmit",
  //   "campaignId": 69,
  //   "id": "27"
  // },
  // {
  //   "phoneNumber": "312.401.3322 x148",
  //   "createdDate": "2004-03-03T03:15:37.410Z",
  //   "lastModified": "1992-11-05T08:56:44.077Z",
  //   "consent": "false",
  //   "campaignName": "Frankie Hayes",
  //   "channel": "index",
  //   "campaignId": 96,
  //   "id": "28"
  // },
  // {
  //   "phoneNumber": "1-204-756-6900",
  //   "createdDate": "1998-05-22T15:40:57.126Z",
  //   "lastModified": "2003-05-06T23:06:40.307Z",
  //   "consent": "false",
  //   "campaignName": "Clifford Hayes",
  //   "channel": "calculate",
  //   "campaignId": 17,
  //   "id": "29"
  // }
];

export const consentReducer = (state = addListData, { type, payload }) => {
  switch (type)
  {
    case ActionTypes.FETCH_CONSENT:
      //logic for fetchConsent
      console.warn("Reducers", ActionTypes.FETCH_CONSENT);
      return addListData;


    case ActionTypes.ADD_TO_CONSENT_LIST:
      //logic for add Consent
      state.push(ActionTypes.payload);
      console.warn("Reducers", ActionTypes.ADD_TO_CONSENT_LIST);
      return addListData;


    case ActionTypes.FETCH_CONSENT_LIST_DELETE:
      //logic for delete Consent
      console.warn("Reducers", ActionTypes.FETCH_CONSENT_LIST_DELETE);
      return addListData;


    case ActionTypes.SET_CONSENT_LIST_EDIT:
      //logic for EDIT
      console.warn("Reducers", ActionTypes.SET_CONSENT_LIST_EDIT);
      return addListData;


    case ActionTypes.SET_CONSENT_LIST_VIEW:
      //logic for VIEW
      console.warn("Reducers", ActionTypes.SET_CONSENT_LIST_VIEW);
      return addListData;


    default:
      return addListData;
  }
};