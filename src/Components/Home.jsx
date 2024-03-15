import React from "react";
import '../styles/Home.css';
import '../Reset/LoginReset.css';
import Logo from '../svg_PORTEN/logo.svg';
import Watch from '../png_PORTEN/watch.png';
import Brang from '../svg_PORTEN/brand.svg';

function Home() {
    return (
        <div className="home">
            <div className="first_block">
                <div className="logo">
                    <img src={Logo}/>
                </div>

                <div className="txt">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor <br/>
                        pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum<br/>
                        nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi.<br/>
                        Tortor nibh magna feugiat id nunc, dui nisl viverra.
                    </p>
                </div>
            </div>
            <div class="container"> 
                <div class="watches">
                    <h1>СЕЗОН 2022/23</h1>
                    <div class="line_content1">
                        <div class="line1"> </div>
                    </div>

                    <div class="catalog">
                        <div class = "watch_content">
                            <img src = {Watch}/>
                            <p>Louis XVI ATHOS</p>
                            <span>165 000 руб.</span>
                        </div>
                        <div class = "watch_content">
                            <img src = {Watch}/>
                            <p>Louis XVI ATHOS</p>
                            <span>165 000 руб.</span>
                        </div>
                        <div class = "watch_content">
                            <img src = {Watch}/>
                            <p>Louis XVI ATHOS</p>
                            <span>165 000 руб.</span>
                        </div>
                    </div>
                </div>
                <div class="container_man">
                    <h1>Новая коллекция</h1>
                    <div class="line_content_photo">
                        <div class="line_photo"> </div>
                    </div>
                    <button>Каталог</button>
                </div>
            </div>
            <div class = "content">
                <div class = "photo"></div>
                <div class="text">
                    <p>коллекция 2021</p>
                    <div class="line_content">
                        <div class="line"></div>
                    </div>
                    <div class="lorem">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut<br></br>
                            mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus<br></br>
                            vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet <br></br>
                            convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum <br></br> 
                            interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada <br></br>
                            integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur <br></br>
                            auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id <br></br>
                            aliquam a aliquam egestas leo orci pharetra sed diam.
                        </span>
                    </div>
                    <button>Посмотреть коллекцию</button>
                </div>        
            </div>
            <div class="container_new">
                <div class="container_new_text">
                    <h1>Новые поступления</h1>
                </div>

                <div class="container_new_line">
                    <div> </div>
                </div>
                <div class="content_new">
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                    <div class="content_watches">
                        <img src={Watch}/>
                        <p>Louis XVI ATHOS</p>
                        <span>165 000 руб.</span>
                    </div>
                </div>
            </div>
            <div class="brands_container">
                <div class="brands_container_text">
                    <h1>Наши бренды</h1>
                </div>

                <div class="container_new_line">
                    <div> </div>
                </div>
                <div class="brands">
                    <img src={Brang}/>
                    <img src={Brang}/>
                    <img src={Brang}/>
                    <img src={Brang}/>
                </div>
            </div>
            <div class="bottom_line">
                <p>© 2022 Все права защищены</p>
                <a href="#">Сделано Figma.info</a>
            </div>
        </div>
    )
}

export default Home;