var body = $response.body;
var objc = JSON.parse(body);

objc.vips = [
    {
      "memberid" : 12,
      "expire_time" : 99999999999,
      "name" : "稻壳会员",
      "has_ad" : 0,
      "enabled" : null
    },
    {
      "memberid" : 20,
      "expire_time" : 99999999999,
      "name" : "WPS会员",
      "has_ad" : 0,
      "enabled" : null
    },
    {
      "memberid" : 40,
      "expire_time" : 99999999999,
      "name" : "超级会员",
      "has_ad" : 0,
      "enabled" : null
    }
];

body = JSON.stringify(objc);
$done({ 
    body 
});
