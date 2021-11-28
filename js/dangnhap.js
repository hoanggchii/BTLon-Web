$(document).ready(function(e) {
    function KiemTraName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if ($("#txtName").val() == "") {
            $("#tbName").html("* Không được bỏ trống");
            return false;
        }
        if (!re.test($("#txtName").val())) {
            $("#tbName").html("* Ký tự đầu viết hoa");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#txtName").blur(KiemTraName);

    var txtPass = $("#password");
    var tbPass = $("#tbPass");

    function KiemTraPass() {
        var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (txtPass.val() == "") {
            tbPass.html(" * Bắt buộc phải nhập");
            return false;
        }
        if (!re.test(txtPass.val())) {
            tbPass.html(" * Password tối thiểu tám ký tự, có ít nhất một chữ cái và một số");
            return false;
        }
        tbPass.html("*");
        return true;
    }
    txtPass.blur(KiemTraPass);

    var txtKTraPass = $("#txtXNMK");
    var tbKTraPass = $("#tbXNMK");

    function KiemTraXacNhanPassWord() {
        if (txtKTraPass.val() != txtPass.val()) {
            tbKTraPass.html("* phải  giống ô mật khẩu");
            return false;
        } else {
            tbKTraPass.html("*");
            return true;
        }
    }
    txtKTraPass.blur(KiemTraXacNhanPassWord);

    function KiemTraAdd() {
        if ($("#txtAdd").val() == "") {
            $("#tbAdd").html("Khong duoc bo trong");
            return false;
        }

        $("#tbAdd").html("*");
        return true;
    }
    $("#txtAdd").blur(KiemTraAdd);

    function KiemTraPhone() {
        var re = /((09|03|07|08|05)+([0-9]{8}))/;
        if ($("#txtPhone").val() == "") {
            $("#tbPhone").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtPhone").val())) {
            $("#tbPhone").html("* Số điện thoại có dạng 09|03|07|08|05 và số có 10 số");
            return false;
        }

        $("#tbPhone").html();
        return true;
    }
    $("#txtPhone").blur(KiemTraPhone);

    $("#btnLogin").click(function() {
        if (KiemTraName() == true && KiemTraPass() == true) {
            alert("Đăng nhập thành công");
            return true;
        }
        return false;

    });

    $("#btnSignin").click(function() {
        if (KiemTraName() == true && KiemTraPass() == true && KiemTraXacNhanPassWord() == true && KiemTraAdd() == true && KiemTraPhone() == true) {
            alert("Đăng ký thành công")
            return true;
        }
        return false;

    });
});