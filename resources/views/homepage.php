
            <section class="section text-center">
                <div class="container">
                    <!--h1 class="title">카툰화와 동물상 테스트</h1-->
                    <h2 class="subtitle">얼굴로 해보는 카툰화와 인공지능 동물상 테스트</h2>
                    <h2 class="sr-only">나는 어떤 동물과 닮았을까? 나의 동물상 찾기를 해보세요!</h2>
                    <h3 class="sr-only">이 앱은 조코딩의 동물상 테스트를 개선해서, 카툰화와 대표 동물상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다.</h3>
                    <h4 class="sr-only">본 서비스는 Google의 인공지능 teachable machine 2.0을 활용하였습니다.</h4>
                    <p class="sr-only">얼굴로 보는 인공지능 동물상 테스트, 나와 닮은 동물상을 찾아보세요! 대표 동물상 연예인 사진 데이터로 학습한 인공지능이 나의 얼굴로 동물상과 특징을 찾아드립니다. 카툰화시, 서버로 사진이 전송되어 저장될 수 있습니다. 인공지능이 보는 나의 동물상 테스트 한번 해보세요! 강아지상? 고양이상? 여우상? 사슴상? 토끼상? 곰상? 공룡상? 얼굴상 테스트를 통해 나와 닮은 동물 찾기를 할 수 있습니다.</p>
                </div>
            </section>

            <section class="text-center">
                <h3 class="pb-2 d-flex justify-content-center">성별을 선택하세요</h3> 
            </section>
            <section class="d-flex justify-content-center">
                <p class="d-flex align-items-center pr-3">여자</p>
                <div>
                    <input type="checkbox" id="gender">
                    <label for="gender">
                        <span class="knob">
                            <i></i>
                        </span>
                    </label>
                </div>
                <p class="d-flex align-items-center pl-3">남자</p>
            </section>

            <div class="mt-3 container file-upload">
                <div class="image-upload-wrap">
                    <form id="upload-form" action="{action_url}" method="POST" enctype="multipart/form-data">
                        <!-- Copy the 'fields' key:values returned by S3Client.generate_presigned_post() -->
                        <input type="hidden" name="key" value="{key}" />
                        <input type="hidden" name="x-amz-algorithm" value="AWS4-HMAC-SHA256" />
                        <input type="hidden" name="x-amz-credential" value="{credential}" />
                        <input type="hidden" name="x-amz-date" value="{date}" />
                        <input type="hidden" name="policy" value="{policy}" />
                        <input type="hidden" name="x-amz-signature" value="{signature}" />
                        <input type="file"   name="file"  class="file-upload-input" onchange="readURL(this);" accept="image/*" />
                        <input type="submit" name="submit" value="" class="invisible" />
                    </form>

                    <!--input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" /-->
                    <div class="drag-text">
                        <img src="img/upload.svg" class="mt-5 pt-5 upload">
                        <h3 class="mb-5 pb-5 pt-4  upload-text">얼굴 사진을 올려놓거나 눌러서 업로드하세요!</h3>
                    </div>
                </div>

                <div class="file-upload-content">
                    <img class="file-upload-image" id="face-image" src="#" alt="your image"/>

                    <div id="jssor_1" class="my-5" style="position:relative;margin:0;top:0px;left:0px;width:980px;height:150px;overflow:hidden;visibility:hidden;">

                        <!-- Loading Screen -->
                        <div data-u="loading" class="jssorl-009-spin" style="position:absolute;top:0px;left:0px;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.7);">
                            <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="img/spin.svg" />
                        </div>

                        <div data-u="slides" style="cursor:default;position:relative;top:0px;left:0px;width:980px;height:150px;overflow:hidden;">

                            <div class="imageAndText">
                                <a id="grayHref" href="#">
                                    <img id="grayImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Gray
                                </div>
                            </div>

                            <div class="imageAndText">
                                <a id="edgePreservingHref" href="#">
                                    <img id="edgePreservingImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Edge Preserving
                                </div>
                            </div>
                            <div class="imageAndText">
                                <a id="detailEnhanceHref" href="#">
                                    <img id="detailEnhanceImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Detail Enhance
                                </div>
                            </div>
                            <div class="imageAndText">
                                <a id="stylizationHref" href="#">
                                    <img id="stylizationImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Stylization
                                </div>
                            </div>
                            <div class="imageAndText">
                                <a id="normalCartoonHref" href="#">
                                    <img id="normalCartoonImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Normal Cartoon
                                </div>
                            </div>

                            <div class="imageAndText">
                                <a id="cartoonBasicHref" href="#">
                                    <img id="cartoonBasicImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Basic Cartoon
                                </div>
                            </div>
                            <div class="imageAndText">
                                <a id="cartoonLiteHref" href="#">
                                    <img id="cartoonLiteImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Cartoon Lite
                                </div>
                            </div>

                            <div class="imageAndText">
                                <a id="pencilSketchGrayHref" href="#">
                                    <img id="pencilSketchGrayImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Pencil Sketch in Gray
                                </div>
                            </div>
                            <div class="imageAndText">
                                <a id="pencilSketchColorHref" href="#">
                                    <img id="pencilSketchColorImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Pencil Sketch in Color
                                </div>
                            </div>
                            <div class="imageAndText">
                                <a id="sketchifyHref" href="#">
                                    <img id="sketchifyImage" data-u="image" src="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg" />
                                </a>
                                <div class="caption mx-auto">
                                    Pencil Sketch using Sketchify
                                </div>
                            </div>

                        </div><a data-scale="0" href="https://www.jssor.com" style="display:none;position:absolute;">web animation composer</a>

                        <!-- Bullet Navigator -->
                        <div data-u="navigator" class="jssorb057" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
                            <div data-u="prototype" class="i" style="width:14px;height:14px;">
                                <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                                    <circle class="b" cx="8000" cy="8000" r="5000"></circle>
                                </svg>
                            </div>
                        </div>
                        <!-- Arrow Navigator -->
                        <div data-u="arrowleft" class="jssora093" style="width:50px;height:50px;top:0px;left:30px;" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
                            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                                <polyline class="a" points="7777.8,6080 5857.8,8000 7777.8,9920 "></polyline>
                                <line class="a" x1="10142.2" y1="8000" x2="5857.8" y2="8000"></line>
                            </svg>
                        </div>
                        <div data-u="arrowright" class="jssora093" style="width:50px;height:50px;top:0px;right:30px;" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
                            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                                <circle class="c" cx="8000" cy="8000" r="5920"></circle>
                                <polyline class="a" points="8222.2,6080 10142.2,8000 8222.2,9920 "></polyline>
                                <line class="a" x1="5857.8" y1="8000" x2="10142.2" y2="8000"></line>
                            </svg>
                        </div>
                    </div>
                    
                    <div id="loading" class="animated bounce">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                        <p class="text-center">AI가 당신의 동물상을 분석중입니다.</p>
                    </div>
                    <p class="result-message"></p>
                    <div id="label-container" class="d-flex flex-column justify-content-around"></div>

                    <!-- Go to www.addthis.com/dashboard to customize your tools -->
                    <div class="addthis_inline_share_toolbox_gh8z"></div>
        
                    <div class="pt-3 image-title-wrap mt-5">
                        <button type="button p-2" class="try-again-btn" onclick="gaReload1();" data-toggle="modal" data-target="#adModal">
                            <span class="try-again-text">다른 사진으로 재시도</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="container pt-3">
                <div id="disqus_thread"></div>
            </div>
