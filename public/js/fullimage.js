
/**
 *  
 *  @author Gordon Ahn
 *  
 *  Created by Gordon Ahn on JUne 19, 2020
 * 
 */

const  kGRAY = "gray";
const  kEP = "ep";
const  kDE = "de";
const  kNORMALCARTOON = 'normal-cartoon';
const  kCARTOONBASIC = 'cartoon-basic';
const  kCARTOONLITE = 'cartoon-lite';
const  kPS_COLOR = "ps-color";
const  kPS_GRAY = "ps-gray";
const  kSKETCHIFY = "sketchify";
const  kSOURCE = "source";
const  kSTYLE = "style";
const  kLS_IMAGES = "images";

function convertImageByParams(src_name,dest_name, flags, sigma_s, sigma_r, shade_factor) {

    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: src_name,
        filter: dest_name,
        flags: flags,
        sigma_s: sigma_s,
        sigma_r: sigma_r,
        shade_factor: shade_factor
    };

    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            headers_param0: 'headers_param0',
            headers_param1: 'headers_param1'
        },
        */
        queryParams: {
            name: src_name,
            filter: dest_name,
            flags: flags,
            sigma_s: sigma_s,
            sigma_r: sigma_r,
            shade_factor: shade_factor
        }
    };

    apigClient.fullimageGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            let filter_image = result.data.body.images;
            let images = JSON.parse(localStorage.getItem(kLS_IMAGES));
            $('#fullImage').attr('src', filter_image['dest']);
            images[dest_name] = filter_image['dest'];
            localStorage.setItem(kLS_IMAGES, JSON.stringify(images));
            $("#imageConversion").hide();

            //console.log("[debug] convertImageByParams(images) ===> %s", JSON.stringify(images));
        })
        .catch(function(result){
            //This is where you would put   an error callback
            // catch errors...
            $("#imageConversion").hide();
            console.log("[debug] error: convertImageByParams() ===> %s", JSON.stringify(result));
        });

}

function convertImageByUsingSketchify(src_name, sigma) {

    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: "public/"+src_name,
        sigma: sigma
    };

    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            headers_param0: 'headers_param0',
            headers_param1: 'headers_param1'
        },
        */
        queryParams: {
            name: "public/"+src_name,
            sigma: sigma
        }
    };

    apigClient.sketchifyFullimageGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            //console.log("[debug] sketchifyFullimageGet(result) ===> %s", JSON.stringify(result));

            let filter_image = result.data.body.images;
            let images = JSON.parse(localStorage.getItem(kLS_IMAGES));
            $('#fullImage').attr('src', filter_image['dest']);
            images[kSKETCHIFY] = filter_image['dest'];
            localStorage.setItem(kLS_IMAGES, JSON.stringify(images));
            $("#imageConversion").hide();
            //console.log("[debug] sketchifyFullimageGet(images) ===> %s", JSON.stringify(images));
        })
        .catch(function(result){
            //This is where you would put   an error callback
            // catch errors...
            $("#imageConversion").hide();
            console.log("[debug] error: convertImageByUsingSketchify() ===> %s", JSON.stringify(result));
        });

}


function convertImageByUsingNormalCartoon(src_name, min, max) {

    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: "public/"+src_name,
        min: min,
        max: max
    };

    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            headers_param0: 'headers_param0',
            headers_param1: 'headers_param1'
        },
        */
        queryParams: {
            name: "public/"+src_name,
            min: min,
            max: max
        }
    };

    apigClient.normalCartoonFullimageGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            //console.log("[debug] normalCartoonFullimageGet(result) ===> %s", JSON.stringify(result));

            let filter_image = result.data.body.images;
            let images = JSON.parse(localStorage.getItem(kLS_IMAGES));
            $('#fullImage').attr('src', filter_image['dest']);
            images[kNORMALCARTOON] = filter_image['dest'];
            localStorage.setItem(kLS_IMAGES, JSON.stringify(images));
            $("#imageConversion").hide();
            //console.log("[debug] normalCartoonFullimageGet(images) ===> %s", JSON.stringify(images));
        })
        .catch(function(result){
            //This is where you would put   an error callback
            // catch errors...
            $("#imageConversion").hide();
            console.log("[debug] error: normalCartoonFullimageGet() ===> %s", JSON.stringify(result));
        });

}


function convertImageByUsingBasicCartoon(src_name, blockSize, C) {

    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: "public/"+src_name,
        blocksize: blockSize,
        paramC: C
    };

    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            headers_param0: 'headers_param0',
            headers_param1: 'headers_param1'
        },
        */
        queryParams: {
            name: "public/"+src_name,
            blocksize: blockSize,
            paramC: C
        }
    };

    apigClient.basicCartoonFullimageGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            //console.log("[debug] basicCartoonFullimageGet(result) ===> %s", JSON.stringify(result));

            let filter_image = result.data.body.images;
            let images = JSON.parse(localStorage.getItem(kLS_IMAGES));
            $('#fullImage').attr('src', filter_image['dest']);
            images[kCARTOONBASIC] = filter_image['dest'];
            localStorage.setItem(kLS_IMAGES, JSON.stringify(images));
            $("#imageConversion").hide();
            //console.log("[debug] basicCartoonFullimageGet(images) ===> %s", JSON.stringify(images));
        })
        .catch(function(result){
            //This is where you would put   an error callback
            // catch errors...
            $("#imageConversion").hide();
            console.log("[debug] error: basicCartoonFullimageGet() ===> %s", JSON.stringify(result));
        });

}

function convertImageByUsingCartoonLite(src_name, blockSize, C) {

    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: "public/"+src_name,
        blocksize: blockSize,
        paramC: C
    };

    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            headers_param0: 'headers_param0',
            headers_param1: 'headers_param1'
        },
        */
        queryParams: {
            name: "public/"+src_name,
            blocksize: blockSize,
            paramC: C
        }
    };

    apigClient.cartoonLiteFullimageGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            //console.log("[debug] cartoonLiteFullimageGet(result) ===> %s", JSON.stringify(result));

            let filter_image = result.data.body.images;
            let images = JSON.parse(localStorage.getItem(kLS_IMAGES));
            $('#fullImage').attr('src', filter_image['dest']);
            images[kCARTOONLITE] = filter_image['dest'];
            localStorage.setItem(kLS_IMAGES, JSON.stringify(images));
            $("#imageConversion").hide();

            //console.log("[debug] cartoonLiteFullimageGet(images) ===> %s", JSON.stringify(images));
        })
        .catch(function(result){
            //This is where you would put   an error callback
            // catch errors...
            $("#imageConversion").hide();
            console.log("[debug] error: cartoonLiteFullimageGet() ===> %s", JSON.stringify(result));
        });

}


/*----------------------------------------------*/

$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

function parseQueryString() {

    var parsedParameters = {};
    var uriParameters = location.search.substr(1).split('&');

    for (var i = 0; i < uriParameters.length; i++) {
        var parameter = uriParameters[i].split('=');
        parsedParameters[parameter[0]] = decodeURIComponent(parameter[1]);
    }

    return parsedParameters;
}

function getJsonFromImageUrl(_imageUrl) {
    let _imageUri = _imageUrl.substr(0, _imageUrl.lastIndexOf('?'));
    let imageUri = _imageUri.substr(0,_imageUri.lastIndexOf('.')+1);
    return imageUri + 'json';
}

function AjaxCall(jsonUrl) { 
    $.ajax({ 
        type: "GET", 
        url : jsonUrl, 
        data: "", 
        dataType:"json", 
        success : function(data, status, xhr) { 
            let filename = jsonUrl.substr(jsonUrl.lastIndexOf('/')+1);
            let filenameSplit = filename.split('.');
            let fileTitle = filenameSplit[0];

            switch(fileTitle) {
                case "ep": 
                    $("#inputNumber0").val(data.flags);
                    $("#inputNumber1").val(data.sigma_s);
                    $("#inputNumber2").val(data.sigma_r);
                    break;
                case "de":  
                    $("#inputNumber0").val(data.sigma_s);
                    $("#inputNumber1").val(data.sigma_r);
                    break;
                case "style": 
                    $("#inputNumber0").val(data.sigma_s);
                    $("#inputNumber1").val(data.sigma_r);
                    break;
                case "ps-gray": 
                    $("#inputNumber0").val(data.sigma_s);
                    $("#inputNumber1").val(data.sigma_r);
                    $("#inputNumber2").val(data.shade_factor);
                    break;
                case "ps-color": 
                    $("#inputNumber0").val(data.sigma_s);
                    $("#inputNumber1").val(data.sigma_r);
                    $("#inputNumber2").val(data.shade_factor);
                    break;
                case "sketchify": 
                    $("#inputNumber0").val(data.sigma);
                    break;
                case "normal-cartoon": 
                    $("#inputNumber0").val(data.min);
                    $("#inputNumber1").val(data.max);
                    break;
                case "cartoon-basic":
                    $("#inputNumber0").val(data.blockSize);
                    $("#inputNumber1").val(data.C);
                    break;
                case "cartoon-lite":
                    $("#inputNumber0").val(data.blockSize);
                    $("#inputNumber1").val(data.C);
                    break;

            }
        }, 
        error: function(jqXHR, textStatus, errorThrown) { 
            console.log(jqXHR.responseText); } 
    }); 
}


function settingParamsforGray(imageTitle) {
    $("#paramTitle0").hide();
    $("#paramTitle1").hide();
    $("#paramTitle2").hide();
    $("#paramNumber0").hide();
    $("#paramNumber1").hide();
    $("#paramNumber2").hide();
    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").hide();
    $("#initBtnArea").hide();
}

function settingParamsforEdgePreservingFilter(imageTitle, paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle1").show();
    $("#paramTitle2").show();
    $("#paramTitle0").html("<p>Flags</p>");
    $("#paramTitle1").html("<p>Sigma_s</p>");
    $("#paramTitle2").html("<p>Sigma_r</p>");

    $("#paramNumber0").show();
    $("#paramNumber1").show();
    $("#paramNumber2").show();

    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();
    $("#initBtnArea").show();

    initParamsforEdgePreservingFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));
}

function settingParamsforDetailEnhanceFilter(imageTitle,paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle1").show();
    $("#paramTitle2").hide();
    $("#paramTitle0").html("<p>Sigma_s</p>");
    $("#paramTitle1").html("<p>Sigma_r</p>");

    $("#paramNumber0").show();
    $("#paramNumber1").show();
    $("#paramNumber2").hide();

    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();
    $("#initBtnArea").show();

    initParamsforDetailEnhanceFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));

}

function settingParamsforStylizationFilter(imageTitle,paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle1").show();
    $("#paramTitle2").hide();
    $("#paramTitle0").html("<p>Sigma_s</p>");
    $("#paramTitle1").html("<p>Sigma_r</p>");

    $("#paramNumber0").show();
    $("#paramNumber1").show();
    $("#paramNumber2").hide();

    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();    
    $("#initBtnArea").show();
    
    initParamsforStylizationFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));

}

function settingParamsforPencilSketchFilter(imageTitle,paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle1").show();
    $("#paramTitle2").show();
    $("#paramTitle0").html("<p>Sigma_s</p>");
    $("#paramTitle1").html("<p>Sigma_r</p>");
    $("#paramTitle2").html("<p>Shade Factor</p>");
    $("#paramNumber0").show();
    $("#paramNumber1").show();
    $("#paramNumber2").show();

    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();
    $("#initBtnArea").show();

    initParamsforPencilSketchFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));
}

function settingParamsforSketchifyFilter(imageTitle,paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle1").hide();
    $("#paramTitle2").hide();
    $("#paramTitle0").html("<p>Sigma</p>");
    $("#paramNumber0").show();
    $("#paramNumber1").hide();
    $("#paramNumber2").hide();

    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();
    $("#initBtnArea").show();

    initParamsforSketchifyFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));
}

function settingParamsforNormalCartoonFilter(imageTitle,paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle0").html("<p>Min</p>");
    $("#paramTitle1").show();
    $("#paramTitle1").html("<p>Max</p>");
    $("#paramTitle2").hide();

    $("#paramNumber0").show();
    $("#paramNumber1").show();
    $("#paramNumber2").hide();
    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();
    $("#initBtnArea").show();

    initParamsforNormalCartoonFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));
}

function settingParamsforBasicCartoonFilter(imageTitle,paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle0").html("<p>Block Size</p>");
    $("#paramTitle1").show();
    $("#paramTitle1").html("<p>--Mean</p>");
    $("#paramTitle2").hide();
    $("#paramNumber0").show();
    $("#paramNumber1").show();
    $("#paramNumber2").hide();
    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();
    $("#initBtnArea").show();

    initParamsforBasicCartoonFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));
}

function settingParamsforCartoonLiteFilter(imageTitle,paramImageUrl) {
    $("#paramTitle0").show();
    $("#paramTitle0").html("<p>Block Size</p>");
    $("#paramTitle1").show();
    $("#paramTitle1").html("<p>--Mean</p>");
    $("#paramTitle2").hide();
    $("#paramNumber0").show();
    $("#paramNumber1").show();
    $("#paramNumber2").hide();
    $("#filtertitle").text(imageTitle);
    $("#confirmBtnArea").show();
    $("#initBtnArea").show();

    initParamsforCartoonLiteFilter();
    AjaxCall(getJsonFromImageUrl(paramImageUrl));
}


function initParamsforEdgePreservingFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='1' min='0' max='100' step='1'/>");
    $("#paramNumber1").html("<input id='inputNumber1' class='form-control-lg input-group-lg' type='number' value='60' min='0' max='100' step='1'/>");
    $("#paramNumber2").html("<input id='inputNumber2' class='form-control-lg input-group-lg' type='number' value='0.4' data-decimals='1' min='0' max='9' step='0.1' />");
}

function initParamsforDetailEnhanceFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='1' min='0' max='100' step='1'/>");
    $("#paramNumber1").html("<input id='inputNumber1' class='form-control-lg input-group-lg' type='number' value='60' min='0' max='100' step='1'/>");
    $("#paramNumber2").html("<input id='inputNumber2' class='form-control-lg input-group-lg' type='number' value='0.4' data-decimals='1' min='0' max='9' step='0.1' />");
}

function initParamsforStylizationFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='60' min='0' max='100' step='1'/>");
    $("#paramNumber1").html("<input id='inputNumber1' class='form-control-lg input-group-lg' type='number' value='0.45' data-decimals='2' min='0' max='9' step='0.01' />");
}

function initParamsforPencilSketchFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='60' min='0' max='100' step='1'/>");
    $("#paramNumber1").html("<input id='inputNumber1' class='form-control-lg input-group-lg' type='number' value='0.07' data-decimals='2' min='0' max='9' step='0.01' />");
    $("#paramNumber2").html("<input id='inputNumber2' class='form-control-lg input-group-lg' type='number' value='0.05' data-decimals='2' min='0' max='9' step='0.01' />");
}

function initParamsforSketchifyFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='10' min='0' max='100' step='1'/>");
}

function initParamsforNormalCartoonFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='100' min='1' max='300' step='1'/>");
    $("#paramNumber1").html("<input id='inputNumber1' class='form-control-lg input-group-lg' type='number' value='200' min='50' max='500' step='1' />");
}

function initParamsforBasicCartoonFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='9' min='1' max='19' step='2'/>");
    $("#paramNumber1").html("<input id='inputNumber1' class='form-control-lg input-group-lg' type='number' value='7' min='1' max='20' step='1' />");
}

function initParamsforCartoonLiteFilter() {
    $("#paramNumber0").html("<input id='inputNumber0' class='form-control-lg input-group-lg' type='number' value='3' min='1' max='19' step='2'/>");
    $("#paramNumber1").html("<input id='inputNumber1' class='form-control-lg input-group-lg' type='number' value='2' min='1' max='20' step='1' />");
}


let imageUrl = $('#fullImage').attr('src');
var filename = imageUrl.substr(imageUrl.lastIndexOf('/')+1);
var filenameSplit = filename.split('.');
var fileTitle = filenameSplit[0];


switch(fileTitle) {
    case "gray": settingParamsforGray("Gray Filter", imageUrl); break;
    case "ep": settingParamsforEdgePreservingFilter("Edge Preserving Filter", imageUrl); break;
    case "de": settingParamsforDetailEnhanceFilter("Detail Enhance Filter", imageUrl); break;
    case "style": settingParamsforStylizationFilter("Stylization Filter", imageUrl); break;
    case "ps-gray": settingParamsforPencilSketchFilter("Pencil Sketch in Gray", imageUrl);  break;
    case "ps-color": settingParamsforPencilSketchFilter("Pencil Sketch in Color", imageUrl); break;
    case "sketchify": settingParamsforSketchifyFilter("Pencil Sketch using sketchify", imageUrl); break;
    case "normal-cartoon": settingParamsforNormalCartoonFilter("Normal Cartoon using Canny", imageUrl); break;
    case "cartoon-basic": settingParamsforBasicCartoonFilter("Basic Cartoon using adaptiveThreshold", imageUrl); break;
    case "cartoon-lite": settingParamsforCartoonLiteFilter("Cartoon Lite using adaptiveThreshold", imageUrl); break;
}

//$("#fullImage").attr("src", IMAGE_URL);
//$("#downloadBtn").attr("href", IMAGE_URL);
//$("meta[property^='og:image']").attr("content", imageUrl);
//$("meta[property^='og:url']").attr("content", location.search);

var config = {
    decrementButton: "<strong>-</strong>", // button text
    incrementButton: "<strong>+</strong>", // ..
    groupClass: "", // css class of the resulting input-group
    buttonsClass: "btn-outline-secondary",
    buttonsWidth: "2.5rem",
    textAlign: "center",
    autoDelay: 500, // ms holding before auto value change
    autoInterval: 100, // speed of auto value change
    boostThreshold: 10, // boost after these steps
    boostMultiplier: "auto" // you can also set a constant number as multiplier
};

var imagesParam = JSON.parse(localStorage.getItem("imagesParam"));
if (imagesParam == undefined || imagesParam == null) {
    imagesParam = new Object();
}

if (fileTitle != 'gray') {
    $("input[type='number']").inputSpinner(config);
}

var $confirmBtn = $("#confirmBtn");
var $initBtn = $("#initBtn");

$confirmBtn.click( function (event) {

    var hashimage = localStorage.getItem("hashimage");
    var images = JSON.parse(localStorage.getItem("images"));
    var sourcename  = images.source.substr(images.source.lastIndexOf('/')+1);
    var src_name = hashimage + "/"+ sourcename;
    var dest_name = fileTitle;
    let flags = 0, sigma_s = 0, sigma_r = 0.0, shade_factor = 0.0;
    let min = 0, max = 0;
    let blockSize = 0, C = 0;

    /**
     *  0: convertImageByParams, 
     *  1: convertImageByUsingSketchify
     *  2: convertImageByUsingNormalCartoon
     *  3: convertImageByUsingBasicCartoon
     *  4: convertImageByUsingCartoonLite
     */

    let apiType = 0;
    switch(fileTitle) {
        case "ep": 
            flags = $("#inputNumber0").val();
            sigma_s = $("#inputNumber1").val();
            sigma_r = $("#inputNumber2").val();
            apiType = 0;
            break;
        case "de": 
            sigma_s = $("#inputNumber0").val();
            sigma_r = $("#inputNumber1").val();
            apiType = 0;
            break;
        case "style": 
            sigma_s = $("#inputNumber0").val();
            sigma_r = $("#inputNumber1").val();
            apiType = 0;
            break;
        case "ps-gray":  
            sigma_s = $("#inputNumber0").val();
            sigma_r = $("#inputNumber1").val();
            shade_factor = $("#inputNumber2").val();
            apiType = 0;
            break;
        case "ps-color": 
            sigma_s = $("#inputNumber0").val();
            sigma_r = $("#inputNumber1").val();
            shade_factor = $("#inputNumber2").val();
            apiType = 0;
            break;
        case "sketchify": 
            sigma_s = $("#inputNumber0").val();
            apiType = 1;
            break;
        case "normal-cartoon":
            min = $("#inputNumber0").val();
            max = $("#inputNumber1").val();                        
            apiType = 2;
            break;
        case "cartoon-basic":
            blockSize = $("#inputNumber0").val();
            C = $("#inputNumber1").val();                        
            apiType = 3;
            break;
        case "cartoon-lite":
            blockSize = $("#inputNumber0").val();
            C = $("#inputNumber1").val();                        
            apiType = 4;
            break;
    }

    imagesParam[fileTitle] = {
        "flags" : flags,
        "sigma_s" : sigma_s,
        "sigma_r" : sigma_r,
        "shade_factor" : shade_factor,
        "min" : min,
        "max" : max,
        "blockSize" : blockSize,
        "C" : C
    }

    //console.log("[DEBUG] ===> %s", JSON.stringify(imagesParam));
    //console.log("[DEBUG] src_name ===> %s", src_name);
    //console.log("[DEBUG] dest_name ===> %s", dest_name);
    $("#imageConversion").show();
    localStorage.setItem("imagesParam",JSON.stringify(imagesParam));

    switch(apiType) {
        case 1: convertImageByUsingSketchify(src_name, sigma_s); break;
        case 2: convertImageByUsingNormalCartoon(src_name, min, max); break;
        case 3: convertImageByUsingBasicCartoon(src_name, blockSize, C); break;
        case 4: convertImageByUsingCartoonLite(src_name, blockSize, C); break;
        default: convertImageByParams(src_name,dest_name, flags, sigma_s, sigma_r, shade_factor);
    }
    /*
    if (apiType == 1) {
        convertImageByUsingSketchify(src_name, sigma_s);
    }

    else { // apiType == 0
        convertImageByParams(src_name,dest_name, flags, sigma_s, sigma_r, shade_factor);
    }
    */
});

$initBtn.click( function (event) {
    switch(fileTitle) {
        case "ep": initParamsforEdgePreservingFilter(); break;
        case "de": initParamsforDetailEnhanceFilter(); break;
        case "style": initParamsforStylizationFilter(); break;
        case "ps-gray": initParamsforPencilSketchFilter();  break;
        case "ps-color": initParamsforPencilSketchFilter(); break;
        case "sketchify": initParamsforSketchifyFilter(); break;
        case "normal-cartoon": initParamsforNormalCartoonFilter(); break;
        case "cartoon-basic": initParamsforBasicCartoonFilter(); break;
        case "cartoon-lite": initParamsforCartoonLiteFilter(); break;                                        
    }
    $("input[type='number']").inputSpinner(config);
    $confirmBtn.trigger("click");
});
