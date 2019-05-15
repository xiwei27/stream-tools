import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {

    return (

      <footer id="footer">
        <div className="top">
            <div className="row">
                <div className="col-md-8 col-sm-12 hidden-xs">
                    <div className="left">
                        <div className="left_inner row">
                            <div id="footer_company" className="col-sm-3">
                                
                                <label>
                                    本站信息
                                </label>
                                <ul>
                                    
                                    <li>
                                        <a href="http://www.freeiptv.cn/about"  target="_blank">
                                            
                                            简介
                                            
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="http://www.freeiptv.cn/legal" target="_blank">
                                            
                                            免责声明
                                            
                                        </a>
                                    </li>
                                    
                                </ul>
                                
                                
                            </div>
                            
                        
                            
                            <div id="footer_company" className="col-sm-3">
                                
                                <label>
                                    相关链接
                                </label>
                                <ul>
                                    
                                    <li>
                                        <a href="http://www.freeiptv.cn" target="_blank">
                                            首页
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="http://www.freeiptv.cn/blog" target="_blank">
                                            技术文章
                                        </a>
                                    </li>
                                    
                                </ul>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="bottom">
            <div className="row">
               
                <div className="copyright">
                    freeiptv.cn 版权所有@ 2019 京ICP备19007292号-2
                    <br />本站所有内容均来自网络。如侵犯了您的权利，请联系我们删除，感谢您的支持。
                </div>
            </div>
    
        </div>
      </footer>
    );
  }
}


export default Footer;
