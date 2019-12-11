        function check1() {
            var nameValue1 = document.getElementById("user1").value;
            if (nameValue1 == '') {
                document.getElementById("n1").style.display = "inline";
            }
        }

        function check2() {
            var nameValue2 = document.getElementById("user2").value;
            if (nameValue2 == '') {
                document.getElementById("n2").style.display = "inline";
            }
        }

        function check3() {
            var nameValue3 = document.getElementById("user3").value;
            if (nameValue3 == '') {
                document.getElementById("n3").style.display = "inline";
            }
        }

        function check4() {
            var psValue = document.getElementById("user4").value;
            if (isNaN(psValue) || psValue == "") {
                document.getElementById("n4").style.display = "inline";
            }
        }

        function check5() {
            var psValue = document.getElementById("user5").value;
            if (isNaN(psValue) || psValue == "" || psValue.length != 11) {
                document.getElementById("n5").style.display = "inline";
            }
        }

        function check6() {
            var psValue = document.getElementById("user6").value;
            if (isNaN(psValue) || psValue == "" || psValue.length != 11) {
                document.getElementById("n6").style.display = "inline";
            }
        }

        function check7() {
            var psValue = document.getElementById("user7").value;
            if (isNaN(psValue) || psValue == "") {
                document.getElementById("n7").style.display = "inline";
            }
        }

        function check8() {
            var psValue = document.getElementById("user8").value;
            if (isNaN(psValue) || psValue == "") {
                document.getElementById("n8").style.display = "inline";
            }
        }

        function addDiv() {
            var s1 = document.getElementById('bor');
            var divitm = document.createElement("div");
            divitm.innerHTML =
                "<div><hr/><p id ='p1'>请输入乘机人：<input id='user2' type='text' onclick='check2()'/><span id='n2' style='display:none;color:#f00;'> 用户名不能为空</span><br /></p><hr/><p id ='p1'>购票类型：<select name=;'type' style='width:150px; height:25px;'><option value='成人票' >成人票</option><option value='残疾票'>残疾票</option><option value='儿童票'>儿童票</option></select>￥2000/成人（含税费）</p><p id='p1'> 姓 &emsp; 名 ：<input type='text' size='17'/></p><p id='p1'>证件类型：<select name='证件' style='width:150px; height:25px;'><option value='居民身份证' >居民身份证</option><option value='护照'>护照</option><option value='居民暂住证'>居民暂住证</option></select></p><p id='p1'>证件号码：<input type='text' size='17'/></p></div>"
            s1.appendChild(divitm);
        }