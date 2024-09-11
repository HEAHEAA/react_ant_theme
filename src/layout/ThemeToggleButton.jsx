import {themeState} from "@/themes/themeState.jsx";
import { useSetRecoilState} from "recoil";
import {themes} from "@/themes/themeAtom.js";
import {Button} from "antd";

const ThemeToggleButton = () => {
    //테마 변경 토글
    const setTheme = useSetRecoilState(themeState);
    const themeList = Object.keys(themes);
    const handleThemeColorChange = (color) => {
        setTheme(color);
        localStorage.setItem('theme', color.toString());
    }


    return (
        <div style={{width:'100%'}}>
            {
                themeList.map((item) => (
                    <Button
                        type="link"
                        key={item}
                        onClick={() => {handleThemeColorChange(item)}}
                        className={`custom-${item}`}
                    >{item}
                    </Button>
                ))
            }
        </div>

    )
}

export default ThemeToggleButton;
