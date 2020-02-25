import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
    return <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt = {name}/>
    </div>
}

Food.propTypes = {
    name: PropTypes.string.isRequired
    ,picture: PropTypes.string.isRequired
    ,rating: PropTypes.number.isRequired
};

const foodILike = [{
                        id:1,
                        name: "kimchi",
                        image:
                            "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/s960x960/70508053_106038817461904_887428487751663616_o.jpg?_nc_cat=102&_nc_oc=AQk0uQR79HA0oPmbe-Wcer9Nu-AhfwUE0iVEM8oiosiDaksHa0orOSeusl5V_rH5Tkw&_nc_ht=scontent-ssn1-1.xx&_nc_tp=7&oh=38a71026da569997510a4b9451a07616&oe=5EBF4F6F",
                        rating:5
                    },
                    {
                        id:2,
                        name: "namul",
                        image:
                            "https://lh3.googleusercontent.com/proxy/rmfs2eKZijKTrOXC2MuyDcze2EpChYC_81RbUVAD4S-aKFrsRIY6VNcoYAikRONc93Zq41nGY_h0T0JqoaqsRIG2GQkK_vTGLuRjFT2QexHgF9GdVadnn0sBw6WHo5YuQtTvzVzO5Vc272rx8w",
                        rating:4
                    },
                    {
                        id:3,
                        name: "bulgogi",
                        image:
                            "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg",
                        rating:3
                    },
                    {
                        id:4,
                        name: "pajen",
                        image:
                            "https://recipe1.ezmember.co.kr/cache/recipe/2017/05/29/19ea74f464f2faf18ed5ed534fed84f01.jpg",
                        rating:3.5
                    }
                    ]


function App() {
  return (
    <div>
        {foodILike.map(item => <Food key = {item.id} name = {item.name} picture = {item.image} rating = {item.rating}/>)}

    </div>
  );
}

export default App;
