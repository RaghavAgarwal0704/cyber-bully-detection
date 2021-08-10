const checkText = async (text) => {
    try {
        console.log("Text to be checked : ", text);
        const { spawn } = require("child_process");
        const child = spawn("python", ["././ML/textAnalyzer.py", text]);
        let data = "";
        for await (const chunk of child.stdout) data += chunk;
        data = parseFloat(data);
        console.log("Score : ", data);
        return data;
    } catch (e) {
        throw new Error(e.message);
    }
};

const checkImage = async (data) => {
    try {
        console.log(data);
        return true;
        // return false;
        // console.log("Text to be checked : ", text);
        const { spawn } = require("child_process");
        const child = spawn("python", ["././ML/imageAnalyzer.py", data]);
        let res = "";
        let err = "";
        for await (const chunk of child.stdout) res += chunk;
        for await (const chunk of child.stderr) err += chunk;
        // res = parseFloat(res);
        console.log("Score : ", res);
        console.log("Error : ", err);
    } catch (e) {
        throw new Error(e.message);
    }
};

// checkText("fuck");
module.exports = { checkText, checkImage };
