$(document).ready(function(e) {
    function KiemTraName() {
        var re = /^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/;
        if ($("#txtName").val() == "") {
            $("#hoten").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtName").val())) {
            $("#hoten").html("Ky tu dau viet hoa");
            return false;
        }
        $("#hoten").html("*");
        return true;
    }
    $("#txtName").blur(KiemTraName);

    function KiemTraMail() {
        var re = /^[a-zA-Z0-9.\_\-]+@([a-zA-Z0-9])+.\w{3}$/;
        if ($("#txtEmail").val() == "") {
            $("#email").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtEmail").val())) {
            $("#email").html("Nhap dung dinh dang mail abc@gmail.com");
            return false;
        }

        $("#email").html("*");
        return true;
    }
    $("#txtEmail").blur(KiemTraMail);

    function KiemTraAdd() {
        if ($("#txtAdd").val() == "") {
            $("#tbAdd").html("Khong duoc bo trong");
            return false;
        }

        $("#tbAdd").html("*");
        return true;
    }
    $("#txtAdd").blur(KiemTraAdd);

    function KiemTraSDT() {
        var re = /((09|03|07|08|05)+([0-9]{8}))/;
        if ($("#txtSDT").val() == "") {
            $("#dienthoai").html("Khong duoc bo trong");
            return false;
        }
        if (!re.test($("#txtSDT").val())) {
            $("#dienthoai").html("Số đt bắt đầu là 09|03|07|05|08 và có 10 chữ số");
            return false;
        }

        $("#dienthoai").html();
        return true;
    }
    $("#txtSDT").blur(KiemTraSDT);
    $("#btnThanhToan").click(function() {
        if (KiemTraAdd() == true && KiemTraName() == true && KiemTraMail() == true && KiemTraSDT() == true) {
            alert("Đặt hàng thành công");
            return true;
        }
        return false;
    });
});