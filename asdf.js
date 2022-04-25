var settings = {
    "url": "https://www.superzoo.cl/catalogo/",
    "method": "PROPFIND",
    "timeout": 0,
    "headers": {
      "Cookie": "ci_session=74cd96e68b7187e1f755dd736c45f21474807bf5"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });