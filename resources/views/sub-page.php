                <section>
                    <div class="container">
                        <div class="row justify-content-center mb-3">
                                <h2 class="subtitle " id="filtertitle"><?php echo $filterTitle; ?></h2>
                        </div>
                        <!--div class="row justify-content-md-center">
                            <div class="col col-sm-2 text-center">
                                <a id="prevBtn" type="button" class="btn btn-info" href="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg">이전</a>
                            </div>
                            <div class="col col-sm-5 text-center">
                            </div>
                            <div class="col col-sm-2 text-center">
                                <a id="prevBtn" type="button" class="btn btn-info" href="https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg">다음</a>
                            </div>
                        </div-->
                        <div class="row justify-content-md-center">
                            <img id="fullImage" class = "show-full-image" 
                                 src="https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/<?php echo $imageUri ?>" 
                                 onerror="javascript:src='https://getbootstrap.com/docs/4.5/assets/brand/bootstrap-solid.svg'" 
                            />

                            <div id="imageConversion" class="my-3" style="text-align:center;width:100%;height:100%;display:none;">
                                <div class="spinner-border text-primary my-auto" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>

                        </div>
                        <div class="row justify-content-md-center mt-3">
                            <div id="paramTitle0" class="col col-sm-3 text-center">
                                <p>Flags</p>
                            </div>
                            <div id="paramTitle1" class="col col-sm-3 text-center">
                                <p>Sigma_s</p>
                            </div>
                            <div id="paramTitle2" class="col col-sm-3 text-center">
                                <p>Sigma_r</p>
                            </div>
                        </div>
                        <div class="row justify-content-md-center mb-3">
                            <div id="paramNumber0" class="col col-sm-3">
                                <input id="inputNumber0" type="number" value="4.5" data-decimals="2" min="0" max="9" step="0.1" />
                            </div>
                            <div id="paramNumber1" class="col col-sm-3">
                                <input id="inputNumber1" type="number" value="4.5" data-decimals="2" min="0" max="9" step="0.1" />
                            </div>
                            <div id="paramNumber2" class="col col-sm-3">
                                <input id="inputNumber2"  type="number" value="4.5" data-decimals="2" min="0" max="9" step="0.1" />
                            </div>
                        </div>

                        <div class="row justify-content-center my-3">
                            <div id="downloadBtnArea" class="col col-sm-3">
                                <a id="downloadBtn" type="button" class="btn btn-success btn-lg btn-block" href="https://cartoonaf.s3.ap-northeast-2.amazonaws.com/public/<?php echo $imageUri ?>">다운로드</a>
                            </div>
                            <div id="confirmBtnArea" class="col col-sm-3">
                                <button id="confirmBtn" type="button" class="btn btn-primary btn-lg btn-block">변환</button>
                            </div>
                            <div id="initBtnArea" class="col col-sm-3">
                                <button id="initBtn" type="button" class="btn btn-light btn-lg btn-block">초기값</button>
                            </div>
                        </div>

                        <div class="row justify-content-md-center">
                            <div id="addThis" class="addthis_inline_share_toolbox_6lz1"></div>
                        </div>

                        <div class="modal-body d-flex justify-content-center">
                            <ins class = "kakao_ad_area" 
                                style = "display:none;" 
                                data-ad-unit    = "DAN-u8arfl9ia5wh" 
                                data-ad-width   = "300" 
                                data-ad-height  = "250">
                            </ins>
                        </div>                        
                    </div>
                </section>

                <div class="container pt-3">
                    <div id="disqus_thread"></div>
                </div>
