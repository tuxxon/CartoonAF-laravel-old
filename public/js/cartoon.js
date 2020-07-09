/**
 *  
 *  @author Gordon Ahn
 *  
 *  Created by Gordon Ahn on May 29, 2020
 * 
 */


 /**
  * 
  * @param {*} image 
  */

// Configure AWS SDK for JavaScript & set region and credentials
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-northeast-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:e7b9de8c-8776-47f7-8e1a-9183b498e2ce',
});


const  FULLIMAGE_URL = "fullimage.html?id=";
const  kGRAY = "gray";
const  kEP = "ep";
const  kDE = "de";
const  kSTYLE = "style";
const  kSKETCHIFY = "sketchify";
const  kPS_COLOR = "ps-color";
const  kPS_GRAY = "ps-gray";
const  kSOURCE = "source";
const  kNORMALCARTOON = 'normal-cartoon';
const  kCARTOONBASIC = 'cartoon-basic';
const  kCARTOONLITE = 'cartoon-lite';


function getImagesForCartoon_apigateway() {

    var apigClient = apigClientFactory.newClient();

    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: 'test1234.png'
    };
    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            param0: '',
            param1: ''
        },
        */
        queryParams: {
            name: 'test1234.png'
            //param1: ''
        }
    };

    apigClient.imageGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            console.log("==== apigClient => %s",result);
        })
        .catch(function(result){
            //This is where you would put an error callback
        });

}


function extractExtFrom(srcpath) {
    let re = /(?:\.([^.]+))?$/;
    let ext = "." + re.exec(srcpath)[1];

    return ext;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function AjaxSketchify(imgUrl) {

    $.get(imgUrl)
        .done(function() { 
            // Do something now you know the image exists.
            $("#sketchifyImage").attr("src",imgUrl);
            $("#sketchifyHref").attr("href",FULLIMAGE_URL+imgUrl);

            let images = JSON.parse( localStorage.getItem("images"));
            images[kSKETCHIFY] = imgUrl;
            localStorage.setItem("images", JSON.stringify(images));
        })
        .fail(function() { 
            // Image doesn't exist - do something else.
            sleep(200).then(() => {
                let aUrl = imgUrl.split('?');
                AjaxSketchify(aUrl[0]+"?t="+ new Date().getTime());
            });

        });
}

function AjaxNormalCartoon(imgUrl) {

    $.get(imgUrl)
        .done(function() { 
            // Do something now you know the image exists.
            $("#normalCartoonImage").attr("src",imgUrl);
            $("#normalCartoonHref").attr("href",FULLIMAGE_URL+imgUrl);

            let images = JSON.parse( localStorage.getItem("images"));
            images[kNORMALCARTOON] = imgUrl;
            localStorage.setItem("images", JSON.stringify(images));
        })
        .fail(function() { 
            // Image doesn't exist - do something else.
            sleep(200).then(() => {
                let aUrl = imgUrl.split('?');
                AjaxNormalCartoon(aUrl[0]+"?t="+ new Date().getTime());
            });

        });
}

function AjaxBasicCartoon(imgUrl) {

    $.get(imgUrl)
        .done(function() { 
            // Do something now you know the image exists.
            $("#cartoonBasicImage").attr("src",imgUrl);
            $("#cartoonBasicHref").attr("href",FULLIMAGE_URL+imgUrl);

            let images = JSON.parse( localStorage.getItem("images"));
            images[kCARTOONBASIC] = imgUrl;
            localStorage.setItem("images", JSON.stringify(images));
        })
        .fail(function() { 
            // Image doesn't exist - do something else.
            sleep(200).then(() => {
                let aUrl = imgUrl.split('?');
                AjaxBasicCartoon(aUrl[0]+"?t="+ new Date().getTime());
            });

        });
}

function AjaxCartoonLite(imgUrl) {

    $.get(imgUrl)
        .done(function() { 
            // Do something now you know the image exists.
            $("#cartoonLiteImage").attr("src",imgUrl);
            $("#cartoonLiteHref").attr("href",FULLIMAGE_URL+imgUrl);

            let images = JSON.parse( localStorage.getItem("images"));
            images[kCARTOONLITE] = imgUrl;
            localStorage.setItem("images", JSON.stringify(images));
        })
        .fail(function() { 
            // Image doesn't exist - do something else.
            sleep(200).then(() => {
                let aUrl = imgUrl.split('?');
                AjaxCartoonLite(aUrl[0]+"?t="+ new Date().getTime());
            });

        });
}

function showImagesToBeCartoonized(filename) {

    var apigClient = apigClientFactory.newClient();
    var params = {
        //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
        name: filename
    };
    var body = {
        //This is where you define the body of the request
    };
    var additionalParams = {
        //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them here
        /*
        headers: {
            param0: '',
            param1: ''
        },
        */
        queryParams: {
            name: filename
            //param1: ''
        }
    };

    apigClient.cartoonafGet(params, body, additionalParams)
        .then(function(result){
            //This is where you would put a success callback
            let images = result.data.body.images;
            let hash_v = result.data.body.hash;
            let imageSrc = images[kSOURCE]; 
            let ext    = imageSrc.substr(imageSrc.lastIndexOf('.')+1);

            let tGray = images[kGRAY].substr(images[kGRAY].lastIndexOf('?')+1);
            let qGray = images[kGRAY].lastIndexOf('?') > 0 ? "&" + tGray : "";
            $("#grayImage").attr("src",images[kGRAY]);
            $("#grayHref").attr("href","/" + hash_v +"/gray?e=" + ext + qGray);

            let tEP = images[kEP].substr(images[kEP].lastIndexOf('?')+1);
            let qEP = images[kEP].lastIndexOf('?') > 0 ? "&" + tEP : "";
            $("#edgePreservingImage").attr("src",images[kEP]);
            $("#edgePreservingHref").attr("href","/" + hash_v +"/edge-preserving?e=" + ext + qEP );

            let tDE = images[kDE].substr(images[kDE].lastIndexOf('?')+1);
            let qDE = images[kDE].lastIndexOf('?') > 0 ? "&" + tDE : "";
            $("#detailEnhanceImage").attr("src",images[kDE]);
            $("#detailEnhanceHref").attr("href","/" + hash_v +"/detail-enhance?e=" + ext + qDE);

            let tStyle = images[kSTYLE].substr(images[kSTYLE].lastIndexOf('?')+1);
            let qStyle = images[kSTYLE].lastIndexOf('?') > 0 ? "&" + tStyle : "";
            $("#stylizationImage").attr("src",images[kSTYLE]);
            $("#stylizationHref").attr("href","/" + hash_v +"/stylization?e=" + ext + qStyle);

            let tPSGray = images[kPS_GRAY].substr(images[kPS_GRAY].lastIndexOf('?')+1);
            let qPSGray = images[kPS_GRAY].lastIndexOf('?') > 0 ? "&" + tPSGray : "";
            $("#pencilSketchGrayImage").attr("src",images[kPS_GRAY]);
            $("#pencilSketchGrayHref").attr("href","/" + hash_v +"/pencil-sketch-in-gray?e="+ext + qPSGray);

            let tPSColor = images[kPS_COLOR].substr(images[kPS_COLOR].lastIndexOf('?')+1);
            let qPSColor = images[kPS_COLOR].lastIndexOf('?') > 0 ? "&" + tPSColor : "";
            $("#pencilSketchColorImage").attr("src",images[kPS_COLOR]);
            $("#pencilSketchColorHref").attr("href","/" + hash_v +"/pencil-sketch-in-color?e="+ext + qPSColor);

            if (images[kSKETCHIFY]) {
                let tSketchify = images[kSKETCHIFY].substr(images[kSKETCHIFY].lastIndexOf('?')+1);
                let qSketchify = images[kSKETCHIFY].lastIndexOf('?') > 0 ? "&" + tSketchify : "";

                $("#sketchifyImage").attr("src",images[kSKETCHIFY]);
                $("#sketchifyHref").attr("href","/" + hash_v +"/pencil-sketch-using-sketchify?e="+ext + qSketchify);
            }
            else {
                let srcpath = images[kSOURCE];
                let ext = extractExtFrom(srcpath);

                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/sketchify"+ext;
                AjaxSketchify(imgUrl);
            }

            if (images[kNORMALCARTOON]) {
                let tNormalCartoon = images[kNORMALCARTOON].substr(images[kNORMALCARTOON].lastIndexOf('?')+1);
                let qNormalCartoon = images[kNORMALCARTOON].lastIndexOf('?') > 0 ? "&" + tNormalCartoon : "";

                $("#normalCartoonImage").attr("src",images[kNORMALCARTOON]);
                $("#normalCartoonHref").attr("href","/" + hash_v +"/normal-cartoon-using-canny?e="+ext + qNormalCartoon);
            }
            else {
                let srcpath = images[kSOURCE];
                let ext = extractExtFrom(srcpath);

                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/normal-cartoon"+ext;
                AjaxNormalCartoon(imgUrl);
            }

            if (images[kCARTOONBASIC]) {
                let tCartoonBasic = images[kCARTOONBASIC].substr(images[kCARTOONBASIC].lastIndexOf('?')+1);
                let qCartoonBasic = images[kCARTOONBASIC].lastIndexOf('?') > 0 ? "&" + tCartoonBasic : "";

                $("#cartoonBasicImage").attr("src",images[kCARTOONBASIC]);
                $("#cartoonBasicHref").attr("href","/" + hash_v +"/basic-cartoon-using-adaptivethreshold?e="+ext + qCartoonBasic);
            }
            else {
                let srcpath = images[kSOURCE];
                let ext = extractExtFrom(srcpath);

                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/cartoon-basic"+ext;
                AjaxBasicCartoon(imgUrl);
            }

            if (images[kCARTOONLITE]) {
                let tCartoonLite = images[kCARTOONLITE].substr(images[kCARTOONLITE].lastIndexOf('?')+1);
                let qCartoonLite = images[kCARTOONLITE].lastIndexOf('?') > 0 ? "&" + tCartoonLite : "";
                $("#cartoonLiteImage").attr("src",images[kCARTOONLITE]);
                $("#cartoonLiteHref").attr("href","/" + hash_v +"/cartoon-lite-using-adaptivethreshold?e="+ext + qCartoonLite);
            }
            else {
                let srcpath = images[kSOURCE];
                let ext = extractExtFrom(srcpath);

                let imgUrl = "https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/"+result.data.body.hash+"/cartoon-lite"+ext;
                AjaxCartoonLite(imgUrl);
            }
            
            localStorage.setItem("hashimage", result.data.body.hash);
            localStorage.setItem("images", JSON.stringify(result.data.body.images));
        })
        .catch(function(result){
            //This is where you would put   an error callback
            // catch errors...
        });

}

/**
 * show data from localstorge when refresing or clicking back button.
 */
function showImagesOnRefreshing() {

    //var hashimage = localStorage.getItem("hashimage");
    //if (hashimage == null || hashimage.length === 0 )
    //    return;

    let images = JSON.parse(localStorage.getItem("images"));
    let hash_v = localStorage.getItem("hashimage");
    let imageSrc = images[kSOURCE]; 
    let ext    = imageSrc.substr(imageSrc.lastIndexOf('.')+1);

    if (images == null || images.length === 0 )
        return;

    /**
     *  The image to be analyzed.
     */
    $('.image-upload-wrap').hide();
    $('#loading').show();
    $('.file-upload-image').attr('src', images['source']);
    $('.file-upload-content').show();
    $('.image-title').html("refresh");
    $('#loading').hide();

    /**
     *  Gender and result-message
     */
    $('#gender').val(localStorage.getItem("imageSex"));
    $('.result-message')[0].innerHTML = localStorage.getItem("resultMessage");

    /**
     *  Converted images.
     */
    let tGray = images[kGRAY].substr(images[kGRAY].lastIndexOf('?')+1);
    let qGray = images[kGRAY].lastIndexOf('?') > 0 ? "&" + tGray : "";
    $("#grayImage").attr("src",images[kGRAY]);
    $("#grayHref").attr("href","/" + hash_v +"/gray?e="+ext + qGray );

    let tEP = images[kEP].substr(images[kEP].lastIndexOf('?')+1);
    let qEP = images[kEP].lastIndexOf('?') > 0 ? "&" + tEP : "";
    $("#edgePreservingImage").attr("src",images[kEP]);
    $("#edgePreservingHref").attr("href","/" + hash_v +"/edge-preserving?e="+ext+qEP );

    let tDE = images[kDE].substr(images[kDE].lastIndexOf('?')+1);
    let qDE = images[kDE].lastIndexOf('?') > 0 ? "&" + tDE : "";
    $("#detailEnhanceImage").attr("src",images[kDE]);
    $("#detailEnhanceHref").attr("href","/" + hash_v +"/detail-enhance?e="+ext+qDE);

    let tStyle = images[kSTYLE].substr(images[kSTYLE].lastIndexOf('?')+1);
    let qStyle = images[kSTYLE].lastIndexOf('?') > 0 ? "&" + tStyle : "";
    $("#stylizationImage").attr("src",images[kSTYLE]);
    $("#stylizationHref").attr("href","/" + hash_v +"/stylization?e="+ext+qStyle);

    let tPSGray = images[kPS_GRAY].substr(images[kPS_GRAY].lastIndexOf('?')+1);
    let qPSGray = images[kPS_GRAY].lastIndexOf('?') > 0 ? "&" + tPSGray : "";
    $("#pencilSketchGrayImage").attr("src",images[kPS_GRAY]);
    $("#pencilSketchGrayHref").attr("href","/" + hash_v +"/pencil-sketch-in-gray?e="+ext+qPSGray);

    let tPSColor = images[kPS_COLOR].substr(images[kPS_COLOR].lastIndexOf('?')+1);
    let qPSColor = images[kPS_COLOR].lastIndexOf('?') > 0 ? "&" + tPSColor : "";
    $("#pencilSketchColorImage").attr("src",images[kPS_COLOR]);
    $("#pencilSketchColorHref").attr("href","/" + hash_v +"/pencil-sketch-in-color?e="+ext+qPSColor);

    let tSketchify = images[kSKETCHIFY].substr(images[kSKETCHIFY].lastIndexOf('?')+1);
    let qSketchify = images[kSKETCHIFY].lastIndexOf('?') > 0 ? "&" + tSketchify : "";
    $("#sketchifyImage").attr("src",images[kSKETCHIFY]);
    $("#sketchifyHref").attr("href","/" + hash_v +"/pencil-sketch-using-sketchify?e="+ext+qSketchify);

    let tNormalCartoon = images[kNORMALCARTOON].substr(images[kNORMALCARTOON].lastIndexOf('?')+1);
    let qNormalCartoon = images[kNORMALCARTOON].lastIndexOf('?') > 0 ? "&" + tNormalCartoon : "";
    $("#normalCartoonImage").attr("src",images[kNORMALCARTOON]);
    $("#normalCartoonHref").attr("href","/" + hash_v +"/normal-cartoon-using-canny?e="+ext+qNormalCartoon);

    let tCartoonBasic = images[kCARTOONBASIC].substr(images[kCARTOONBASIC].lastIndexOf('?')+1);
    let qCartoonBasic = images[kCARTOONBASIC].lastIndexOf('?') > 0 ? "&" + tCartoonBasic : "";
    $("#cartoonBasicImage").attr("src",images[kCARTOONBASIC]);
    $("#cartoonBasicHref").attr("href","/" + hash_v +"/basic-cartoon-using-adaptivethreshold?e="+ext+qCartoonBasic);

    let tCartoonLite = images[kCARTOONLITE].substr(images[kCARTOONLITE].lastIndexOf('?')+1);
    let qCartoonLite = images[kCARTOONLITE].lastIndexOf('?') > 0 ? "&" + tCartoonLite : "";
    $("#cartoonLiteImage").attr("src",images[kCARTOONLITE]);
    $("#cartoonLiteHref").attr("href","/" + hash_v +"/cartoon-lite-using-adaptivethreshold?e="+ext+qCartoonLite);

}

function showLoadingForSlides() {
    const LOADING_IMAGE = "img/redspinner.svg";

    $("#grayImage").attr("src",LOADING_IMAGE);
    $("#edgePreservingImage").attr("src",LOADING_IMAGE);
    $("#detailEnhanceImage").attr("src",LOADING_IMAGE);
    $("#stylizationImage").attr("src",LOADING_IMAGE);
    $("#pencilSketchGrayImage").attr("src",LOADING_IMAGE);
    $("#pencilSketchColorImage").attr("src",LOADING_IMAGE);
    $("#sketchifyImage").attr("src",LOADING_IMAGE);
    $("#normalCartoonImage").attr("src",LOADING_IMAGE);
    $("#cartoonBasicImage").attr("src",LOADING_IMAGE);    
    $("#cartoonLiteImage").attr("src",LOADING_IMAGE);    
}
/**
 * Post an image to s3 with a signed url.
 * 
 * @param {*} filename : image filename to post.
 */

function postImagesForCartoon(filename) { 

	/// Prepare to call Lambda function
    let lambda = new AWS.Lambda();
    let ext = extractExtFrom(filename);

    var paramFilename = UUID.generate() + ext;
    var input = {
        //name: "test1234.png",
        resource: "",
        httpMethod: "POST",
        queryStringParameters: {
            name: paramFilename
        }
    };

    var params = {
        FunctionName: 'upload-image-to-s3',
		InvocationType : 'RequestResponse',
        Payload: JSON.stringify(input)
    };

    showLoadingForSlides();

    lambda.invoke(params, function(err, data) {
        //var result = document.getElementById('result');
        if (err) {
            console.log(err, err.stack);
            //result.innerHTML = err;
        } 
        else {
            /**
             * Initialize the inputs of form 
             * in order to post an image to s3 with a signed url.
             */

            /**  Commented out to resize the source image...
                var img = $('.file-upload-image')[0];
                if (img.naturalWidth > 2000 &&  img.naturalHeight > 1100) {
                    $('#imageSizeConfirm').click(function(e) {
                        $('#imageSizeAlert').modal('hide');
                        return;
                    });
                    $('#imageSizeAlert').modal('show');
                    return;
                }
            */

            var output = JSON.parse(data.Payload);
            $("#upload-form").attr('action', output.body.url);
            $("#upload-form > input[name^='key']").val(output.body.fields['key']);
            $("#upload-form > input[name^='x-amz-credential']").val(output.body.fields['x-amz-credential']);
            $("#upload-form > input[name^='x-amz-date']").val(output.body.fields['x-amz-date']);
            $("#upload-form > input[name^='policy']").val(output.body.fields['policy']);
            $("#upload-form > input[name^='x-amz-signature']").val(output.body.fields['x-amz-signature']);

            var uploadForm = $('#upload-form');
            var formData = new FormData($('form')[0]);

            /**
             *  Upload an image through Ajax.. using event driven way.
             */
            uploadForm.submit(function (e) {
        
                e.preventDefault();

                $.ajax({
                    type: uploadForm.attr('method'),
                    url: uploadForm.attr('action'),
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function (data) {
                        /**
                         *  Showing the images to be cartoonized.
                         */
                        showImagesToBeCartoonized(paramFilename);
                    },
                    error: function (data) {
                        console.log('[debug] An error occurred.');
                        console.log('[debug] = %s',JSON.stringify(data));
                        console.log('[debug] filename = %s',filename);
                        /**
                         * Whenever the S3 or lambda has a long break time,
                         * 'Net error' occurs..
                         */
                        sleep(300).then(() => {
                            postImagesForCartoon(filename);
                        });
                    },
                });
            });

            $("#upload-form > input[name^='submit']").click();
        }
    });
    
}

/*--- Initialize a image slider from jssor --- */
window.jssor_1_slider_init = function() {

    var jssor_1_options = {
      $AutoPlay: 1,
      $AutoPlaySteps: 5,
      $SlideDuration: 160,
      $SlideWidth: 200,
      $SlideSpacing: 3,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
        $Steps: 5
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $SpacingX: 16,
        $SpacingY: 16
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 980;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        //var containerElement = document.getElementsByClassName('file-upload-content');
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};

jssor_1_slider_init();


/*----   ----*/
