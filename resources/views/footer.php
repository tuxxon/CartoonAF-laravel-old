<footer class="footer pt-5 container d-flex justify-content-center">
                <div>
                    <p>&copy; 인공지능 코딩탐험  2020. All Rights Reserved. </p>
                    <ul class="list-inline d-flex justify-content-center">
                        <li class="list-inline-item">
                            <a href="privacy.html">개인정보취급방침</a>
                        </li>

                        <!--li class="list-inline-item">
                            <a href="Terms">Terms</a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.youtube.com/channel/UCHTNaLtro_1I6Y3SSywo3Cg">FAQ</a>
                        </li-->
                    </ul>
                </div>
            </footer>
            <!-- Modal -->
            <div class="modal fade" id="adModal" tabindex="-1" role="dialog" aria-labelledby="adModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="adModalLabel">(AD)광고 - 재시도를 한번 더 눌러주세요.</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body d-flex justify-content-center">
                            <ins class = "kakao_ad_area" 
                                style = "display:none;" 
                                data-ad-unit    = "DAN-u8arfl9ia5wh" 
                                data-ad-width   = "300" 
                                data-ad-height  = "250">
                            </ins>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button p-2" class="try-again-btn" onclick="gaReload2();">
                                <span class="try-again-text">다른 사진으로 재시도</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="imageSizeAlert" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="imageSizeAlertLongTitle">이미지 크기 에러</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body justify-content-center">
                      <p> 이미지가 너무 커서 변환할 수 없습니다. (2000 x 1100 로 제한) </p>
                    </div>
                    <div class="modal-footer">
                      <button id="imageSizeConfirm" type="button" class="btn btn-primary">확인</button>
                    </div>
                  </div>
                </div>
            </div>

            <script>
                function gaReload1() {
                    gtag('event', '다른 사진으로 재시도 1차', {
                        'event_category': '다른 사진으로 재시도'
                    });
                }
                function gaReload2() {
                    gtag('event', '다른 사진으로 재시도 2차', {
                        'event_category': '다른 사진으로 재시도'
                    });
                    localStorage.clear();
                    window.location.reload();
                }
            </script>        
        </div>
        <!-- Dark Overlay element -->
        <div class="overlay"></div>

    </div>

    <div class="mt-2 container d-flex justify-content-center ad-banner">
        <ins class="kakao_ad_area" 
             style="display:none;" 
             data-ad-unit="DAN-t4l3nz12y8mo" 
             data-ad-width="320" 
             data-ad-height="100">
        </ins>
    </div>
    <div class="mt-2 container d-flex justify-content-center ad-banner">
        <ins class="kakao_ad_area" style="display:none;" 
            data-ad-unit    = "DAN-1iyc7e5dpolyt" 
            data-ad-width   = "300" 
            data-ad-height  = "250">
        </ins>
    </div>

    <script>
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
        */

        var disqus_config = function () {
            this.page.url = "https://cartoonaf.touchizen.com";  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = "cartoonaf_main"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://codingtrip.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

    <!-- Optional JavaScript -->
    <!--script type="text/javascript" src="https://t1.daumcdn.net/kas/static/ba.min.js" async></script-->

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>    
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>

    <!-- Teachable Machine by Google-->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
    
    <!-- jQuery Custom Scroller CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
    <script type="text/javascript">
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

        $(window).on('beforeunload', function() {
            var gender = $('#gender').val();
            localStorage.setItem("imageSex",gender);

            var resultMessage = $('.result-message')[0].innerHTML;
            localStorage.setItem("resultMessage", resultMessage);
        });

        $(window).on('load', function() {
            //localStorage.clear();
            showImagesOnRefreshing();
        });

        /*
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                alert(navigator.userAgent);
            }
            else {
                console.log(navigator);
            }
        */
    </script>

    <!-- for AWS API Gateway.. -->
    <script type="text/javascript" src="lib/axios/dist/axios.standalone.js"></script>
    <script type="text/javascript" src="lib/CryptoJS/rollups/hmac-sha256.js"></script>
    <script type="text/javascript" src="lib/CryptoJS/rollups/sha256.js"></script>
    <script type="text/javascript" src="lib/CryptoJS/components/hmac.js"></script>
    <script type="text/javascript" src="lib/CryptoJS/components/enc-base64.js"></script>
    <script type="text/javascript" src="lib/url-template/url-template.js"></script>
    <script type="text/javascript" src="lib/apiGatewayCore/sigV4Client.js"></script>
    <script type="text/javascript" src="lib/apiGatewayCore/apiGatewayClient.js"></script>
    <script type="text/javascript" src="lib/apiGatewayCore/simpleHttpClient.js"></script>
    <script type="text/javascript" src="lib/apiGatewayCore/utils.js"></script>
    <script type="text/javascript" src="js/apigClient.js"></script>

    <!-- aws sdk -->
    <script type="text/javascript" src="https://sdk.amazonaws.com/js/aws-sdk-2.686.0.min.js"></script>
 

    <!-- for AnimalFace.site-->
    <script src="js/af.js"></script>

    <!-- To cartoonize an image-->
    <script src="js/cartoon.js"></script>

    <!-- To generate UUID  -->
    <script src="js/UUID.js"></script>
    <!--script id="dsq-count-scr" src="//codingtrip.disqus.com/count.js" async></script-->

    <!-- Go to www.addthis.com/dashboard to customize your tools -->
    <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ec37f060eca1146"></script>

  </body>

<!-- 
image input box
Copyright (c) 2020 by Aaron Vanston (https://codepen.io/aaronvanston/pen/yNYOXR)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

gender toggle
Copyright (c) 2020 by Mert Cukuren (https://codepen.io/knyttneve/pen/bPpEZY)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 -->
 <!--
  Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com
 </a-->

</html>