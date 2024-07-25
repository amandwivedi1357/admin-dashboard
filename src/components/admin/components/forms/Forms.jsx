import { PiDotsThreeBold } from "react-icons/pi"
import Mycharts from "../dashboard/MyChart"
import MyChart2 from "../dashboard/MyChart2"
import { MdOutlineShoppingCart } from "react-icons/md"
import { BiDollar } from "react-icons/bi"
import { LuUsers2 } from "react-icons/lu"

const Forms = () => {
  return (
    <div className="dash_cont">

        <div className="dash_main">
            <p className="title">Forms</p>
            <p className="subtitle">Home / Forms</p>
            {/* <div className="dash_content">

                <div className="dash_left">
                    <div className="top_cards">
                        <div className="top_Card">
                            <div className="topic">
                                <p className="title">Sales<span className="subtitle">| Today</span></p>
                                <PiDotsThreeBold />
                            </div>
                            <div className="rest_content">
                                <div className="left">
                                    <div className="cart">
                                        <MdOutlineShoppingCart />
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="title">145</p>
                                    <p className="data">
                                        <strong>12%</strong> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="top_Card">
                        <div className="topic">
                                <p className="title">Sales<span className="subtitle">| Today</span></p>
                                <PiDotsThreeBold />
                            </div>
                            <div className="rest_content">
                                <div className="left">
                                    <div className="cart">
                                        <BiDollar  color="rgb(47, 194, 54)"/>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="title">145</p>
                                    <p className="data">
                                        <strong>12%</strong> increase
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top_Card">
                        <div className="topic">
                                <p className="title">Sales<span className="subtitle">| Today</span></p>
                                <PiDotsThreeBold />
                            </div>
                            <div className="rest_content">
                                <div className="left">
                                    <div className=" cart2">
                                        <LuUsers2  color="rgb(255, 145, 72)"/>
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="title">145</p>
                                    <p className="data">
                                        <strong style={{color:"rgb(255, 145, 72)"}}>8%</strong> decrease
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="chart">
  <Mycharts/>
                        </div>
                </div>
                <div className="dash_right">
                <div className="chart2">
  <MyChart2/>
                        </div>
                </div>
            </div> */}
        </div>
      
    </div>
  )
}

export default Forms