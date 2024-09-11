import './style/App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "@/view/Dashboard.jsx";
import Setting from "@/view/Setting.jsx";
import Login from "@/view/Login.jsx";
import SignUp from "@/view/SignUp.jsx";
import {ConfigProvider} from "antd";
import {themeState} from "@/themes/themeState.jsx";
import {useRecoilValue} from "recoil";
import {themes} from "@/themes/themeAtom.js";
import {Helmet, HelmetProvider} from "react-helmet-async";


function App() {
    // 테마에 따라 스타일 설정
    const theme = useRecoilValue(themeState);
    const currentTheme = themes[theme];
    const themeConfig = {
        token: {
            colorPrimary: currentTheme.primaryColor,
            colorBgBase: currentTheme.backgroundColor,
            colorTextBase: currentTheme.textColor,
            colorBorder: currentTheme.borderColor
        }
    };


    return (
        <HelmetProvider>
            <Helmet>
                <style>
                    {`
            :root {
              --primary-color: ${currentTheme.primaryColor};
              --background-color: ${currentTheme.backgroundColor};
              --text-color: ${currentTheme.textColor};
              --border-color: ${currentTheme.borderColor};
            }
          `}
                </style>
            </Helmet>
            <ConfigProvider theme={themeConfig}>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>


                    <Route path="/dashboard" element={<Dashboard/>}>
                        <Route path="setting" element={<Setting/>}/>
                    </Route>
                </Routes>
            </ConfigProvider>
        </HelmetProvider>
    )
}

export default App
