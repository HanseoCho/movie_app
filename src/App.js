import React from 'react';


function Food({name, picture}) {
    return <div>
        <h2>I like {name}</h2>
        <img src={picture}/>
    </div>
}

const foodILike = [{name: "kimchi",
                    image:
                        "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/s960x960/70508053_106038817461904_887428487751663616_o.jpg?_nc_cat=102&_nc_oc=AQk0uQR79HA0oPmbe-Wcer9Nu-AhfwUE0iVEM8oiosiDaksHa0orOSeusl5V_rH5Tkw&_nc_ht=scontent-ssn1-1.xx&_nc_tp=7&oh=38a71026da569997510a4b9451a07616&oe=5EBF4F6F"},
                    {name: "namul",
                        image:
                            "https://lh3.googleusercontent.com/proxy/rmfs2eKZijKTrOXC2MuyDcze2EpChYC_81RbUVAD4S-aKFrsRIY6VNcoYAikRONc93Zq41nGY_h0T0JqoaqsRIG2GQkK_vTGLuRjFT2QexHgF9GdVadnn0sBw6WHo5YuQtTvzVzO5Vc272rx8w"},
                    {name: "bulgogi",
                        image:
                            "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg"},
                    {name: "pajen",
                        image:
                            "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/29/19ea74f464f2faf18ed5ed534fed84f01.jpg"},
]


function App() {
  return (
    <div>
        {foodILike.map(item => <Food name = {item.name} picture = {item.image}/>)}

    </div>
  );
}

export default App;
