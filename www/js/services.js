angular.module('parliament.services', [])

.factory('Members', function($http) {
  // Might use a resource here that returns a JSON array

  var baseurl = 'http://localhost:8000/members/';

  // Some fake testing data
  var members = [
  {"id":"1","memberid":"467","name":"Dr. Kirit Somaiya,","party":"BJP","constituencies":"Mumbai-North-East","state":"Maharashtra","paddress":"Neelam Nagar, Mulund (E),  Mumbai- 400081, Maharashtra","pphone":"Tels : (022) 21634152, 21630696","localaddress":"203, South Avenue,  New Delhi - 110011","localphone":"Tel : (011) 23794676, 23015513","email":"kiritbjp@gmail.com; \nkiritsomaiya@gmail.com"},
  {"id":"2","memberid":"4143","name":"Adhalrao Patil, Shri Shivaji","party":"SS","constituencies":"Shirur","state":"Maharashtra","paddress":"At &amp; P.O. Landewadi, Tal. Ambegaon,  Distt.Pune-410503, Maharashtra","pphone":"Tel : (02133) 235101, \nMob :  09820021344 <\/br> Fax : (02133) 235102","localaddress":"59, Lodhi Estate,  New Delhi - 110003","localphone":"Tel. : (011) 24635556, 24656554 <\/br>Mob :  09868180788, Fax : (011) 24693334","email":"shivajirao@sansad.nic.in ; \n<b>website<\/b> : www.shivajirao.com"},
  {"id":"3","memberid":"4847","name":"Adhikari, Shri Deepak (Dev)","party":"AITC","constituencies":"Ghatal","state":"West Bengal","paddress":"Flat No. 29-B, Tower-4, South City,  375, Prince Anwar Shaw Road,  Kolkata-700108, West Bengal","pphone":"Tel: (033) 24999121, 0903799999 (M)","localaddress":"Flat No. 26, South Avenue,  New Delhi-110011","localphone":"09013869520 (M)","email":"adhikari.deepak@sansad.nic.in; medevadhikrari@gmail.com"},
  {"id":"4","memberid":"4502","name":"Adhikari, Shri Sisir Kumar","party":"AITC","constituencies":"Kanthi","state":"West Bengal","paddress":"Vill. Karkuli,P.O. Contai,  Distt. Purba Medinipur-721401,<\/br> West Bengal-721401","pphone":"Tels.(03220)255067, 09434039494 (M), Fax. (03220) 255599","localaddress":"15, Windsor Place,  New Delhi - 110 001","localphone":"Tels. (011) 23782544, 09650080251 (M)<\/br> Telefax. (011) 23782544","email":"sisiradhikari76@yahoo.com"},
  {"id":"5","memberid":"4501","name":"Adhikari, Shri Suvendu","party":"AITC","constituencies":"Tamluk","state":"West Bengal","paddress":"90 C, Sector - 12, , Mahaprabhurchak, Haldia,  Distt. Purba Medinipur, West Bengal","pphone":"Tels.(03220)259500, 09013180183 (M)","localaddress":"69, South Avenue,  New Delhi - 110 011","localphone":"Tels. (011) 23017348, 9013180183 (M), Fax. (011) 23017349","email":"adhikari.suvendu@sansad.nic.in ; adhikarisuvendu@gmail.com"},
  {"id":"6","memberid":"7","name":"Adityanath, Shri Yogi","party":"BJP","constituencies":"Gorakhpur","state":"Uttar Pradesh","paddress":"361,Purana Gorakhpur,Shri Gorakhnath Mandir,  Gorakhpur-273001,Uttar Pradesh","pphone":"(0551)2255453,09450966551(M), Fax:(0551)2255455","localaddress":"19, G.R.G. Road,  New Delhi - 110 001","localphone":"Tels.(011) 23092633, \n09450966551 (M)","email":"yogi.adityanath@sansad.nic.in; \nyogiadityanath72@gmail.com"},
  {"id":"7","memberid":"8","name":"Adsul, Shri Anandrao","party":"SS","constituencies":"Amravati","state":"Maharashtra","paddress":"5\/B,Kadamgiri Apartment,Co-operative Housing Society Ltd., (br) Ashok Nagar Chakravarti Ashok Road, Kandivali (East), Mumbai-400101, Maharashatra","pphone":"(022)28871042, 28863403(R), 09868180266 (M)","localaddress":"AB-9, Pandara Road,  New Delhi - 110 003","localphone":"Tels. (011) 23074036, 9868180266 (M) , Telefax: (011) 23074036","email":"av.adsul@sansad.nic.in"},
  {"id":"8","memberid":"9","name":"Advani, Shri Lal Krishna","party":"BJP","constituencies":"Gandhinagar","state":"Gujarat","paddress":"1835\/16, Kasturbhai Block, Din Dayal Bhawan,  J.P.Chowk, Khanpur, Ahmedabad-380 001, Gujarat","pphone":"(079)22504525","localaddress":"30, Prithviraj Road,  New Delhi - 110 011","localphone":"Tels. (011) 23794124, 23794125<\/br> Fax: (011) 23013142","email":"advanilk@sansad.nic.in"},
  {"id":"9","memberid":"4267","name":"Agrawal, Shri Rajendra","party":"BJP","constituencies":"Meerut","state":"Uttar Pradesh","paddress":"135,Chanakyapuri,Shastri Nagar,Pradesh, Meerut - 250005, Uttar Pradesh","pphone":"Telefax. (0121) 2769955, 09412202623(M),","localaddress":"201, Narmada Apartment,  Dr. B.D. Marg, New Delhi - 110 001","localphone":"Tels. 09013180336 (M)","email":" rajendra.agrawal51@gmail.com; ; rajendra.agrawal@sansad.nic.in"},
  {"id":"10","memberid":"10","name":"Ahamed, Shri E.","party":"IUML","constituencies":"Malappuram","state":"Kerala","paddress":"House No.13\/40-B, `Sitara` Thana - Kannur-670012, Kerala","pphone":"Tels. (0497)2706713, 09818882200(M)","localaddress":"9, Teen Murti Marg,  New Delhi - 110 011","localphone":"Tels. (011) 23017051, Tel\/Fax. (011) 23017052","email":"eahmed@hotmail.com"}
  ];

  return {
    all: function() {
        /*$http.get(baseurl).then(function(response){
          return response.data;
        });*/
        return members;
    },
    get: function(memberId) {
      for (var i = 0; i < members.length; i++) {
        if (members[i].id === memberId) {
          return members[i];
        }
      }
      return null;
    }
  };
});
