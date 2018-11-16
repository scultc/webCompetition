function toolsBlockClick(clicked_id) {
    toToolsFromNav(clicked_id);
}

function toToolsFromNav(tool_id) {
    nav_dot=$("#nav-tools");
    $(nav_dot).click();


    // window.location.href="./tools.html"
    $("body").css("overflow-y", "scroll");
    _page_flag = "tools";
    clearInterval(_scroll_timer);
    card_tools = $('<div class="card-tools"></div>');
    box_body = $(".box-body");
    box_content = $(".box-content");
    $(box_content).children().remove();
    $(box_body).removeClass("box-body-info box-body-project box-body-news");
    $(box_body).addClass("box-body-tools");
    $(box_body).children().remove();
    $(box_body).append(card_tools);

    setTimeout(function () {
        $(card_tools).addClass("card-tools-full");
    }, 200);
    // setTimeout(function(){
    //     doInitAjax();
    // },1000);
    initTools(tool_id);
}


function initTools(tool_id) {
    $("body").css("overflow-y", "scroll");
    box_content = $(".box-content");
    // just the id
    box_result = $('<div id="result-tools"></div>');
    $(box_content).append(creatToolsBar_1());
    $(box_content).append(box_result);

    addToTopBtn(box_content);

    firstNavAction(tool_id);
    // locateNavBar();
}


function creatToolsBar_1() {
    box_row = $('<div class="row" id="row-nav"></div>');
    nav_box = $('<div class="nav-box nav-box-tools-1"></div>');
    nav_line = $('<div class="nav-line nav-line-tools-1"></div>');
    e_ul = $('<ul id="menu-tools-1"></ul>');
    li_1 = $('<li id="1-1" class="current-1"><a onclick="firstNavAction(1)">工商注册</a></li>');
    li_2 = $('<li id="1-2"><a onclick="firstNavAction(2)">知识产权</a></li>');
    li_3 = $('<li id="1-3"><a onclick="firstNavAction(3)">经营许可</a></li>');
    li_4 = $('<li id="1-4"><a onclick="firstNavAction(4)">人事管理</a></li>');
    li_5 = $('<li id="1-5"><a onclick="firstNavAction(5)">投资融资</a></li>');

    $(e_ul).append(li_1);
    $(e_ul).append(li_2);
    $(e_ul).append(li_3);
    $(e_ul).append(li_4);
    $(e_ul).append(li_5);
    $(nav_box).append(nav_line);
    $(nav_box).append(e_ul);
    box_row.append(nav_box);

    return nav_box;
}

function creatToolsBar_2(first_nav_order) {

    box_row = $('<div class="row" id="row-nav-2"></div>');
    nav_box = $('<div class="nav-box nav-box-tools-2"></div>');
    nav_line = $('<div class="nav-line nav-line-tools-2"></div>');
    e_ul = $('<ul id="menu-tools-2"></ul>');
    li_list = new Array();
    // li_wowgo=$('<li id="1-1" class="current"><a onclick="Wowgo()">Wowgo</a></li>');
    // li_doctorCan=$('<li id="1-2"><a onclick="DoctorCan()">Doctor Can 肿瘤智库</a></li>');
    // li_surgery=$('<li id="1-3"><a onclick="Surgery()">可视化脊柱微创手术导航</a></li>');
    // li_salary=$('<li id="1-4"><a onclick="Salary()">薪公益</a></li>');
    // li_hospital=$('<li id="1-5"><a onclick="Hospital()">飞行医院</a></li>');
    if (first_nav_order == 1) {
        li_1 = $('<li id="2-1" class="current-2"><a onclick="secondNavAction(1,1)">注册流程</a></li>');
        li_2 = $('<li id="2-2"><a onclick="secondNavAction(1,2)">所需材料</a></li>');
        li_3 = $('<li id="2-3"><a onclick="secondNavAction(1,3)">后续事项</a></li>');
        li_4 = $('<li id="2-4"><a onclick="secondNavAction(1,4)">公司名称</a></li>');
        li_5 = $('<li id="2-5"><a onclick="secondNavAction(1,5)">公司类型</a></li>');
        li_6 = $('<li id="2-6"><a onclick="secondNavAction(1,6)">注册资本</a></li>');
        li_7 = $('<li id="2-7"><a onclick="secondNavAction(1,7)">注册地址</a></li>');
        li_8 = $('<li id="2-8"><a onclick="secondNavAction(1,8)">经营范围</a></li>');
        li_9 = $('<li id="2-9"><a onclick="secondNavAction(1,9)">股权分配</a></li>');
        li_10 = $('<li id="2-10"><a onclick="secondNavAction(1,10)">购买发票</a></li>');
        li_11 = $('<li id="2-11"><a onclick="secondNavAction(1,11)">公司注销</a></li>');
        li_list.push(li_1);
        li_list.push(li_2);
        li_list.push(li_3);
        li_list.push(li_4);
        li_list.push(li_5);
        li_list.push(li_6);
        li_list.push(li_7);
        li_list.push(li_8);
        li_list.push(li_9);
        li_list.push(li_10);
        // li_list.push(li_11);
    }
    else if (first_nav_order == 2) {
        li_1 = $('<li id="2-1" class="current-2"><a onclick="secondNavAction(2,1)">产权概念</a></li>');
        li_2 = $('<li id="2-2"><a onclick="secondNavAction(2,2)">产权类型</a></li>');
        li_3 = $('<li id="2-3"><a onclick="secondNavAction(2,3)">知识产权权益</a></li>');
        li_4 = $('<li id="2-4"><a onclick="secondNavAction(2,4)">知识产权出资</a></li>');
        li_5 = $('<li id="2-5"><a onclick="secondNavAction(2,5)">工业产权</a></li>');
        li_6 = $('<li id="2-6"><a onclick="secondNavAction(2,6)">著作权</a></li>');

        li_list.push(li_1);
        li_list.push(li_2);
        li_list.push(li_3);
        li_list.push(li_4);
        li_list.push(li_5);
        li_list.push(li_6);
    }
    else if (first_nav_order == 3) {
        li_1 = $('<li id="2-1" class="current-2"><a onclick="secondNavAction(3,1)">申请条件</a></li>');
        li_2 = $('<li id="2-2"><a onclick="secondNavAction(3,2)">申办材料</a></li>');
        li_3 = $('<li id="2-3"><a onclick="secondNavAction(3,3)">核准</a></li>');

        li_list.push(li_1);
        li_list.push(li_2);
        li_list.push(li_3);
    }
    else if (first_nav_order == 4) {
        li_1 = $('<li id="2-1" class="current-2"><a onclick="secondNavAction(4,1)">录用</a></li>');
        li_2 = $('<li id="2-2"><a onclick="secondNavAction(4,2)">调配</a></li>');
        li_3 = $('<li id="2-3"><a onclick="secondNavAction(4,3)">任免</a></li>');
        li_4 = $('<li id="2-4"><a onclick="secondNavAction(4,4)">考核</a></li>');

        li_list.push(li_1);
        li_list.push(li_2);
        li_list.push(li_3);
        li_list.push(li_4);
    }
    else if (first_nav_order == 5) {
        li_1 = $('<li id="2-1" class="current-2"><a onclick="secondNavAction(5,1)">企业融资</a></li>');
        li_2 = $('<li id="2-2"><a onclick="secondNavAction(5,2)">企业投资</a></li>');
        li_3 = $('<li id="2-3"><a onclick="secondNavAction(5,3)">申请方式</a></li>');
        li_4 = $('<li id="2-4"><a onclick="secondNavAction(5,4)">办理流程</a></li>');
        li_5 = $('<li id="2-5"><a onclick="secondNavAction(5,5)">投资电子商务</a></li>');

        li_list.push(li_1);
        li_list.push(li_2);
        li_list.push(li_3);
        li_list.push(li_4);
        li_list.push(li_5);
    }
    else {
        ;
    }

    $.each(li_list, function (index, item) {
        $(e_ul).append(item);
    });
    $(nav_box).append(nav_line);
    $(nav_box).append(e_ul);
    box_row.append(nav_box);

    return nav_box;
}


/* 监控scroll以显示 top btn  控制搜索框的显示*/
$(window).scroll(function () {
    if (_page_flag == "tools") {
        scroll_t = $(window).scrollTop();
        win_h = $(window).height();
        box_content = $("#box-content");
        doc_h = $(document).height();
        if ($(box_content).scrollTop() < (scroll_t - 300)) {
            controlBtnTop("show");

        }
        else {
            controlBtnTop("hide");
        }

    }
})


/* origin */

function firstNav() {
    var $liCur = $("#menu-tools-1 li.current-1"),
        curP = $liCur.position().left,
        curW = $liCur.outerWidth(true),
        $slider = $(".nav-line-tools-1"),
        $targetEle = $("#menu-tools-1 li a"),
        $navBox = $(".nav-box-tools-1");
    // console.log($liCur.attr("id"));
    // console.log(curP);
    $liCur.unbind();
    $slider.unbind();
    $targetEle.unbind();
    $navBox.unbind();
    $slider.stop(true, true).animate({
        "left": curP,
        "width": curW
    });
    $targetEle.mouseenter(function () {
        var $_parent = $(this).parent(),
            _width = $_parent.outerWidth(true),
            posL = $_parent.position().left;
        // console.log(posL);
        $slider.stop(true, true).animate({
            "left": posL,
            "width": _width
        }, "fast");
    });
    $navBox.mouseleave(function (cur, wid) {
        cur = curP;
        wid = curW;
        // console.log(cur);
        $slider.stop(true, true).animate({
            "left": cur,
            "width": wid
        }, "fast");
    });
}

function secondNav() {
    var $liCur = $("#menu-tools-2 li.current-2"),
        curP = $liCur.position().left,
        curW = $liCur.outerWidth(true),
        $slider = $(".nav-line-tools-2"),
        $targetEle = $("#menu-tools-2 li a"),
        $navBox = $(".nav-box-tools-2");
    // console.log($liCur.attr("id"));
    // console.log(curP);
    $liCur.unbind();
    $slider.unbind();
    $targetEle.unbind();
    $navBox.unbind();
    $slider.stop(true, true).animate({
        "left": curP,
        "width": curW
    });
    $targetEle.mouseenter(function () {
        var $_parent = $(this).parent(),
            _width = $_parent.outerWidth(true),
            posL = $_parent.position().left;
        // console.log(posL);
        $slider.stop(true, true).animate({
            "left": posL,
            "width": _width
        }, "fast");
    });
    $navBox.mouseleave(function (cur, wid) {
        cur = curP;
        wid = curW;
        // console.log(cur);
        $slider.stop(true, true).animate({
            "left": cur,
            "width": wid
        }, "fast");
    });
}

function refreash_1() {
    var curid = $(".current-1").attr("id");
    $("#" + curid).removeClass("current-1");
    $(".nav-box-tools-2").remove();

}

function refreash_2() {
    $("#result-tools").empty();
    var curid = $(".current-2").attr("id");
    $("#" + curid).removeClass("current-2");

}

_time_delay = 250;

function firstNavAction(first_nav_order) {
    refreash_1();
    $("#1-" + first_nav_order).addClass("current-1");
    firstNav();
    $("#box-content").append(creatToolsBar_2(first_nav_order));
    secondNavAction(first_nav_order, 1);
}

function secondNavAction(first_nav_order, sub_nav_order) {
    refreash_2();
    locateNavBar();
    $("#2-" + sub_nav_order).addClass("current-2");
    secondNav();
    content_list = new Array();
    content_title_list = new Array();
    if (first_nav_order == 1 && sub_nav_order == 1) {
        content_title_list = ["第一步 核准名称", "第二步 提交资料", "第三步 领取执照", "第四步 刻章等事项"];
        content_list = ["<p>时间：1-3个工作日</p> <p>操作：确定公司类型、名字、注册资本、股东及出资比例后，可以去工商局现场或线上提交核名申请。</p> <p>结果：核名通过，失败则需重新核名。</p>", "<p>时间：5-15个工作日</p> <p>操作：核名通过后，确认地址信息、高管信息、经营范围，在线提交预申请。在线预审通过之后，按照预约时间去工商局递交申请材料。</p> <p>结果：收到准予设立登记通知书。</p>", "<p>时间：预约当天</p> <p>操作：携带准予设立登记通知书、办理人身份证原件，到工商局领取营业执照正、副本。</p> <p>结果：领取营业执照。</p>", "<p>时间：1-2个工作日</p> <p>操作：凭营业执照，到公安局指定刻章点办理：公司公章、财务章、合同章、法人代表章、发票章；至此，一个公司注册完成。</p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 2) {
        content_title_list = ["","<p>注：住所使用证明材料的准备，分为以下三种情况：</p>" ],
        content_list = ["<p>1、公司法定代表人签署的《公司设立登记申请书》；</p>" +
        "<p>2、全体股东签署的公司章程；</p>" +
        "<p>3、法人股东资格证明或者自然人股东身份证及其复印件；</p>" +
        "<p>4、董事、监事和经理的任职文件及身份证复印件；</p>" +
        "<p>5、指定代表或委托代理人证明；</p>" +
        "<p>6、代理人身份证及其复印件；</p>" +
        "<p>7、住所使用证明。</p>" ,
        "<p>（1）若是自己房产，需要房产证复印件，自己的身份证复印件；</p>" +
        "<p>（2）若是租房，需要房东签字的房产证复印件，房东的身份证复印件，双方签字盖章的租赁合同，和租金发票；</p>" +
        "<p>（3）若是租的某个公司名下的写字楼，需要该公司加盖公章的房产证复印件，该公司营业执照复印件，双方签字盖章的租赁合同，还有租金发票 </p>"];
    }

    else if (first_nav_order == 1 && sub_nav_order == 3) {
        content_title_list = ["1、办理银行基本户", "2、记账报税", "3、缴纳社保", "4、申请税控及发票", "5、企业年报", "注："];
        content_list = ["<p>公司注册完成后，需要办理银行基本户开户。基本户是公司资金往来的主要账户,经营活动的日常资金收付以及工资、奖金和现金的支取都可以通过这个账户来办理。每个公司只能开一个基本户。</p>", "<p>完成公司注册后，需先办理税务报到，报到时需提供一名会计的信息(包括姓名、身份证号、联系电话)。公司成立后一个月起，需要会计每月记账并向税务机关申报纳税。企业准备好资料到专管所报到后，税务局将核定企业缴纳税金的种类、税率、申报税金的时间，及企业的税务专管员。企业日后将根据税务部门核定的税金进行申报与缴纳。</p>", "<p>公司注册完成后，需要在30天内到所在区域管辖的社保局开设公司社保账户，办理《社保登记证》及CA证书，并和社保、银行签订三方协议。之后，社保的相关费用会在缴纳社保时自动从银行基本户里扣除。</p>", "<p>如果企业要开发票，需要申办税控器，参加税控使用培训，核定申请发票。完成申请后，企业就可以自行开具发票了。</p>", "<p>根据《企业信息公示暂行条例》规定，每年1月1日至6月30日，企业应当报送上一年度年度报告，内容包括公司基本情况简介、主要财务数据和指标、股本变动及股东情况等等。</p>", "<p>每年需要做年报的企业是：营业执照上，注册时间为前一年12月31日前的大陆企业。</p>" +
        "<p>工商行政规定，未按规定期限公示年度报告的企业，工商机关会将其载入经营异常名录，并处罚款。超过三年未年报的企业，将会纳入严重违法企业“黑名单”。纳入异常名录后，企业将无法变更、注销、转股，对外合作时，社会公众可随时查看到该公司的异常情况。同时对法人、高管进行行政限制。</p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 4) {
        content_title_list = ["","<p>1、地区+字号+行业+组织形式</p>" ,"<p>2、字号+(地区)+行业+组织形式</p>" ,"<p>3、字号+行业+(地区)+组织形式</p>" ];
        content_list = ["<p>常见的公司名称一般有3种形式，不同形式之间并没有本质区别，注册时任选其一即可。</p>" ,
        "<p>例：北京快又好信息技术有限责任公司</p>" ,
        "<p>例：快又好(北京)信息技术有限责任公司</p>" ,
        "<p>例：快又好信息技术(北京)有限责任公司</p>" +
        "<p>建议在起名时，建议将字号在“国家企业信用信息公示系统”上查询是否已经被注册，尽量保证没有重名，这样通过率会高一些。</p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 5) {
        content_title_list = ["有限责任公司", "股份有限公司", "有限合伙企业", "外商独资公司", "个人独资企业", "国有独资公司", "其他"];
        content_list = ["<p>由五十个以下的股东出资设立，每个股东以其所认缴的出资额对公司承担有限责任，公司法人以其全部资产对公司债务承担全部责任的经济组织。</p>" +
        "<p>适用情况：适合创业的企业类型，大部分的投融资方案、VIE架构等都是基于有限责任公司进行设计的。</p>" +
        "<p>备注：对于初创企业来说，“有限责任公司”是目前最适合的企业类型，原因如下：</p>" +
        "<p>(1)有限责任公司的股东，只需要以出资额为限承担“有限责任”，在法律层面上就把公司和个人的财产分开了，可以避免创业者承担不必要的财务风险。</p>" +
        "<p>(2)有限责任公司运营成本低，机构设置少，结构简单，适合企业的初步发展阶段。</p>" +
        "<p>(3)目前成熟的天使、VC，几乎都基于“有限责任公司”设计投资方案。直接注册“有限责任公司”，在未来引进投资过程中也会比较顺利  。</p>", "<p>由2人以上200人以下的发起人组成，公司全部资本为等额股份，股东以其所持股份为限对公司承担责任。</p>" +
        "<p>适用情况：适用于成熟、大规模类型公司，设立程序较为严格和复杂，不太适用于初创型和中小微企业。如：中国石油天然气股份有限公司(中石油)。</p>", "<p>由普通合伙人和有限合伙人组成，普通合伙人对合伙企业债务承担无限连带责任，有限合伙人以其认缴的出资额为限对合伙企业债务承担有限责任 [2]  。</p>" +
        "<p>适用情况：适用于风险投资基金、公司股权激励平台(员工持股平台)。</p>", "<p>外国的公司、企业、其他经济组织或者个人，依照中国法律在中国境内设立的全部资本由外国投资者投资的企业。</p>" +
        "<p>适用情况：股东为外国人或外国公司的企业，流程相对内资公司更复杂，监管更严格。在名称上与有限责任公司一致。</p>", "<p>个人出资经营、归个人所有和控制、由个人承担经营风险和享有全部经营收益的企业。投资人以其个人财产对企业债务承担无限责任。</p>" +
        "<p>适用情况：适用于个人小规模的小作坊、小饭店等，常见于对名称有特殊要求的企业，如：XX中心、XX社、XX部等。</p>", "<p>是指国家单独出资、由国务院或者地方人民政府授权本级人民政府国有资产监督管理机构履行出资人职责的有限责任公司。</p>",
        "<p>    非公司企业：具有投资资格的法人、其他经济组织。</p>" +
        "<p>外资企业：外方为公司、法人、其他经济组织和自然人，中方为公司、法人及其他经济组织</p>"];
    }


    else if (first_nav_order == 1 && sub_nav_order == 6) {
        content_title_list = ["","1、注册资本并不需要一次缴清","<p>2、公司注册资本写多少，要参考所在行业资质要求</p>","<p>3、注册资本越大，承担的风险/责任就越大</p>","<p>4、什么是验资报告，需要做吗？</p>" ,
        "<p>5、公司注册资本的增减</p>",];
        content_list = ["<p>注册资本是全体股东出于公司经营需要，提供或承诺提供给公司的资金总数。</p>" +
        "<p>需要注意的是，大部分的公司叫“XX有限公司”或“XX有限责任公司”。这里的有限责任公司的股东对公司的债务只承担有限的责任，而承担的最高额度就是公司的注册资本。</p>" ,
        "<p>我国目前实行注册资本认缴制，认缴制的意思就是：注册资本不用在一开始就全部缴纳完成，而是只要在承诺的时限内(一般为10-20年)缴完即可，这极大的降低了公司注册时的资金压力。 </p>" ,
        "<p>例如，互联网公司申请ICP经营许可证时，ICP经营许可证要求公司注册资本在100万以上；天猫对大多数类目的入驻商家标准也是100万以上。其他需要资质/资格的，要参照本行业一般的做法。</p>" , 
        "<p>举个例子，比如一家注册资本为100万的公司，后来公司经营不善，欠了1000万的外债，股东最多只需用他100万的出资额来承担责任，超出的部分就和他没关系了。但如果这家公司的注册资本是1000万，那么就要承担全部1000万的责任！</p>" +
        "<p>所以，注册资本并不是越大越好，大部分互联网创业者走的是股权融资的路子，最重要的是股权比例，而不是注册资本。根据自己的实际情况，设定一个合理的注册资本，才是最理智的选择。</p>" ,
        "<p>之前在实缴制的时候，注册资本是需要验资报告的。现在认缴制已经基本不需要了，只有少数情况会用到，例如：参加招投标项目，招标方要求出具验资报告；跟规模比较大的企业合作，对方为了确认你的公司实力，也会要求出具验资报告。如果需要用到验资报告，可以在注册资本实缴完成后，找会计师事务所来出具。</p>" ,
        "<p>根据《公司法》的有关规定，我国按照资本确定、资本维持、资本不变三原则，要求公司必须保持注册资本的相对稳定，同时对公司增加或减少注册资本规定了具体的条件和程序。</p>" +
        "<p>公司增加注册资本</p>" +
        "<p>公司增加注册资本是指在公司成立后，经权力机构决议，依法定程序在原有注册资本的基础上予以扩大，增加公司实有资本总额的法律行为。</p>" +
        "<p>有限责任公司增加注册资本的主要途径是股东增加出资，情况比较简单;股份有限公司可以通过发行新股来增加注册资本，也可以将公积金转为注册资本，情况比较复杂。下面主要介绍一下股份有限公司增加注册资本的程序和要求。</p>" +
        "<p>(一)由股东大会作出决议。股份有限公司增加注册资本，应由董事会拟订增资方案并提交股东大会，由股东大会决议通过。决议内容应包括新股种类及数额、新股发行价格、新股发行的起止日期、向原有股东发行新股的种类及数额。</p>" +
        "<p>(二)增量发行新股应符合法定条件。公司公开发行新股应当符合下列条件：(1)具备健全且运行良好的组织机构;(2)具有持续盈利能力，财务状况良好;(3)3年财务会计文件无虚假记载，无其他重大违法行为;(4)经国务院批准的国务院证券监督管理机构规定的其他条件。上市公司非公开发行新股，应当符合经国务院批准的国务院证券监督管理机构规定的条件，并报国务院证券监督管理机构核准。</p>" +
        "<p>(三)发行新股须进行审批。股东大会作出发行新股的决议后，董事会必须报国务院证券监督管理机构核准。</p>" +
        "<p>(四)进行公告。公司经批准向社会公开发行新股时，必须公告新股招股说明书和财务会计报表及附表。</p>" +
        "<p>(五)公积金转增资本。股份有限公司经股东大会决议将公积金转为资本时，按股东原有股份比例派送新股或增加每股面值。但法定公积金转为资本时，所留存的该项公积金不得少于注册资本的15%。</p>" +
        "<p>(六)变更登记。公司增加注册资本后，应依法向公司登记机关办理变更登记。</p>" +
        "<p>公司减少注册资本</p>" +
        "<p>公司减少注册资本是指公司成立后，经权力机构决议，依法定程序使其注册资本在原有基础上进行削减的法律行为。其法定程序如下：</p>" +
        "<p>(一)公司权力机构作出决议或决定。公司减少注册资本，在有限责任公司，须经代表2/3以上表决权的股东决议通过;在国有独资公司，必须由国有资产监督管理机构决定，其中，重要的国有独资公司的减资，由国有资产监督管理机构审核后，报本级人民政府批准。在股份有限公司，须经代表2/3以上表决权的股东决议通过。</p>" +
        "<p>(二)编制表册。公司决议减少注册资本时，董事会必须编制资产负债表和财产清单。</p>" +
        "<p>(三)通知和公告。应当注意的是，就增加注册资本这一事项，公司不必通知和公告债权人，但当公司减少其注册资本时，应当自作出减少注册资本决议之日起10日内通知已知债权人，并于30日内在报纸上公告。债权人自接到通知书之日起30日内，未接到通知书的自第一次公告之日起45日内，有权要求公司清偿债务或者提供相应的担保。</p>" +
        "<p>(四)进行变更登记。公司减少注册资本时，公司章程原定的注册资本发生变化，须向原公司登记机关办理变更登记。办理登记时虚报注册资本的，责令改正，处以虚报注册资本金额5%以上15%以下的罚款。股份有限公司通过收购本公司股票的方式减少注册资本的，必须在10日内注销该部分股份，并依照法律、行政法规办理变更登记并公告。</p>" +
        "<p>公司减少资本后的注册资本不得低于法定的最低限额。</p></p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 7) {
        content_title_list = ["","<p>1、北京等地</p>" ,"<p>2、深圳、广州等一些沿海经济比较发达的地方</p>" ,"<p>3、上海等地</p>" ,"<p>备注：</p>" ];
        content_list = ["<p>注册地址就是在公司营业执照上登记的“住址”，不同的城市对注册地址的要求也不一样，具体应以当地工商局要求为准。</p>" +
        "<p>各地对注册地址的要求，主要分为以下几类：</p>" ,
        "<p>只允许写字楼、商铺等商业地产注册公司。</p>" ,
        "<p>民居也可以进行注册。</p>" ,
        "<p>居于两种之间。上海虽然只允许商业地产注册公司，但实质上政府作为第三方特批了很多经济园区、开发区，这些开发区能够为公司提供合法注册地址。</p>" ,
        "<p>1、创业初期如果资金紧张，可以选择入驻创业孵化器(集中办公区)，使用它们的注册地址。</p>" +
        "<p>2、公司注册地址是可以变更的，但跨城区的税务变更会比较麻烦，所以在选择注册地址时，最好先确定好城区。</p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 8) {
        content_title_list = ["","<p>以互联网科技公司为例，其经营范围如下：</p>" ];
        content_list = ["<p>经营范围是企业可以从事的生产经营与服务项目。它反映的是企业业务活动的内容和生产经营方向，是企业业务活动范围的法律界限。</p>" +
        "<p>初次注册公司，不知道如何确定经营范围时，可以直接参考行业内同类公司。</p>" ,
        "<p>网络通信科技产品领域内的技术开发、技术咨询、技术转让、技术服务，计算机网络工程，计算机软件开发及维护，计算机辅助设备的安装及维修，电子产品的安装和销售，计算机及相关产品(除计算机信息系统安全专用产品)、办公用品的销售，企业管理咨询(除经纪)。</p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 9) {
        content_title_list = ["","<p>1、团队要有明确的老大，切忌平均分配股权</p>" ,"<p>2、股东人数不要太多</p>" ,"3、创始合伙人的得权期、退出机制、回购权","<p>4、提前留一定的期权池</p>" ];
        content_list = ["<p>股权是股东基于其股东资格而享有的，从公司获得经济利益，并参与公司经营管理的权利。</p>" +
        "<p>股权分配的核心是要让各个创始人在分配和讨论的过程中，从心眼里感觉到合理、公平，从而事后甚至是忘掉这个分配而集中精力做公司。以下是我们整理的几个要点：</p>" ,
        "<p>平均分配股权的问题在于，当几个创始人之间意见不一致时，容易出现拍板人缺失，决策陷入僵局，不利于团队的稳定。股权分配时要避免平均分配，一定要有老大的角色。</p>" ,
        "<p>股东人数太多，就会导致决策比较难推动。比如在做工商变更时需要所有股东签字，此时如果有股东去外地出差或出国旅游，不能凑齐所有人员一起签字，就会耽误变更的时间。另外，不太稳定的小股东最容易产生股权纠纷，阻碍企业发展。 </p>" +
        "<p>特别强调一点，34%的股权虽然不多，但是却拥有重大事件(如公司合并重组、增值扩股、破产等)的一票否决权，可以在重大决策上对抗其余所有股东。所以，掌握有一票否决权的股东都是举足轻重的角色。</p>" ,
        "<p>一个完整的企业股权结构，除了合理的股份分配外，还要有科学的管理体系，即提前约定好股权的得权、退出和回购机制，避免日后纠纷。</p>" ,
        "<p>互联网公司股权激励的作用越来越重要，初创阶段股权分配时有必要提前预留一定的期权池，为今后的股权激励留出余地，一般期权池的比例大多设置为10%到20%，这些股份通常由创始人代持。</p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 10) {
        content_title_list = ["","备注：","增值税：","所得税：",""];
        content_list = ["<p>发票购用簿及发票申请报批准表。</p>" +
        "<p>办税人员(一般为财务人员或企业法人、职员等)的身份证、证件照2张、办理发票准购证。</p>" +
        "<p>带好公章、法人章、发票专用章、税务登记证（三证合一、五证合一后企业需要携带营业执照正副本原件。）。办税人员本人和公司财务负责人员同去税务部门，第一次领发票需法人签字、即需要法人同去税务部门。</p>" ,
        "<p>以上材料为纳税人第一次购票应准备手续，一般纳税人第一次购票，除做以上准备外，还应准备以下材料：电脑培训的上岗证原件，税控系统IC卡，购票前先自己电脑零抄税一次（在抄税前，应先输入企业的基本信息），并打印零抄税单。如税务部门有新要求或新规定企业应以税务部门为准！</p>" ,
        "<p>增值税：销售商品的公司，小规模企业（普票）按所开发票额的3%征收增值税；一般纳税人（增票）按进项和销项抵扣后的17%征收增值税。按月征收。</p>" ,
        "<p>所得税：查账征收：对企业的纯利润征收25%的企业所得税，核定征收：商业企业为开票额的1%征收、服务企业为开票额的2.5%征收。按季度征收。</p>" ,
        "<p>征收方式各市各行政区税务机关掌握不同，大多税务所都采用查账征收方式。鉴于实际经营当中多数企业没有进货发票以致造成账面利润过高，所以推荐小公司采用核定征收在税负上比较划算。落户经济开发区企业可享受地方财政扶持（税收奖励）另外全国各个地方的具体行政收费不同，以当地行政部门要求为准。</p>"];
    }
    else if (first_nav_order == 1 && sub_nav_order == 11) {
        content_title_list = [""];
        content_list = ["<p>当公司不打算经营时，要及时进行注销。如果放着不管，几个月后税务机关就会把公司吊销，吊销不仅会使公司本身，而且连同其法定代表人均会进入企业信用黑名单，影响法人的信贷、开办公司、出入境等。</p>" +
        "<p>如果不幸被工商部门吊销营业执照了，也需要先把吊销转成正常的公司注销流程，且不能恢复经营。</p>"];
    }
    else if (first_nav_order == 2 && sub_nav_order == 1) {
        content_title_list = ["",""];
        content_list = ["<p>知识产权是指人们就其智力劳动成果所依法享有的专有权利，通常是国家赋予创造者对其智力成果在一定时期内享有的专有权或独占权（exclusive right）。</p>" ,
        "<p>知识产权从本质上说是一种无形财产权，他的客体是智力成果或是知识产品，是一种无形财产或者一种没有形体的精神财富，是创造性的智力劳动所创造的劳动成果。它与房屋、汽车等有形财产一样，都受到国家法律的保护，都具有价值和使用价值。有些重大专利、驰名商标或作品的价值也远远高于房屋、汽车等有形财产。</p>"];
    }
    else if (first_nav_order == 2 && sub_nav_order == 2) {
        content_title_list = ["（一）著作权", "（二）工业产权"];
        content_list = ["<p>著作权又称版权，是指自然人、法人或者其他组织对文学、艺术和科学作品依法享有的财产权利和精神权利的总称。主要包括著作权及与著作权有关的邻接权；通常我们说的知识产权主要是指计算机软件著作权和作品登记。</p>", "<p>   工业产权则是指工业、商业、农业、林业和其他产业中具有实用经济意义的一种无形财产权，由此看来“产业产权”的名称更为贴切。主要包括专利权与商标权。</p>"];
    }


    else if (first_nav_order == 2 && sub_nav_order == 3) {
        content_title_list = ["（一）人身权利","（二）财产权利"];
        content_list = ["<p>  按照内容组成，知识产权由人身权利和财产权利两部分构成，也称之为精神权利和经济权利。</p>" +
        "<p>所谓人身权利，是指权利同取得智力成果的人的人身不可分离，是人身关系在法律上的反映。例如，作者在其作品上署名的权利，或对其作品的发表权、修改权等，即为精神权利。</p></p>","<p>   所谓财产权是指智力成果被法律承认以后，权利人可利用这些智力成果取得报酬或者得到奖励的权利，这种权利也称之为经济权利。它是指智力创造性劳动取得的成果，并且是由智力劳动者对其成果依法享有的一种权利。</p>"];
    }


else if (first_nav_order == 2 && sub_nav_order == 4) {
        content_title_list = ["",""];
        content_list = ["<p>根据《中华人民共和国公司法》第二十七条 股东可以用货币出资，也可以用实物、知识产权、土地使用权等可以用货币估价并可以依法转让的非货币财产作价出资;但是，法律、行政法规规定不得作为出资的财产除外。</p>" +
        "<p>对作为出资的非货币财产应当评估作价，核实财产，不得高估或者低估作价。法律、行政法规对评估作价有规定的，从其规定。</p>" ,
        "<p>知识产权出资需要经过评估，评估需要提供如下材料：</p>" +
        "<p>1、提供专利证书，专利登记簿，商标注册证，与无形资产出资有关的转让合同，交接证明等。</p>" +
        "<p>2、填写无形资产出资验证清单。要求填写的名称，有效状况，作价等内容符合合同，协议，章程，由企业签名或验收签章，获得各投资者认同，并在清单上签名。</p>" +
        "<p>3、无形资产应办理过户手续（知识产权办理产权转让登记手续；非专利技术签定技术转让合同；土地使用权办理变更土地登记手续）但在验资时尚未办妥的，填写出资财产移交表，由拟设立企业及其出资者签署，并承诺在规定期限内办妥有关财产权转移手续；交付方式，交付地点合同，协议，章程中有规定的，应与合同，协议，章程相符：“接收方签章”栏，由全体股东签字盖章。</p>" +
        "<p>4、资产评估机构出具的评估目的，评估范围与对象，评估基准日，评估假设等有关限定条件满足验资要求的评估报告和出资各方对评估资产价值的确认文件。</p>" +
        "<p>5、新公司法第二十七条删去了旧款关于知识产权出资比例的要求，意味着企业可以100%用知识产权出资。</p>" +
        "<p>6、以专利权出资的，如专利权人为全民所有制单位，提供上级主管部门批文；以商标权出资，提供商标主管部门批文；以高新技术成果出资的，提供国家或省级科技管理部门审查认定文件。</p>"];
    }
    else if (first_nav_order == 2 && sub_nav_order == 5) {
        content_title_list = ["商标权", "专利保护", "商号权"];
        content_list = ["<p>是指商标主管机关依法授予商标所有人对其申请商标受国家法律保护的专有权。商标是用以区别商品和服务不同来源的商业性标志，由文字、图形、字母、数字、三维标志、颜色组合和声音等，以及上述要素的组合构成。中国商标权的获得必须履行商标注册程序，而且实行申请在先原则。商标是产业活动中的一种识别标志，所以商标权的作用主要在于维护产业活动中的秩序，与专利权的不同作用主要在于促进产业的发展不同。</p>", "<p> 是指一项发明创造向国家专利局提出专利申请，经依法审查合格后，向专利申请人授予的在规定时间内对该项发明创造享有的专有权。根据中国专利法，发明创造有三种类型，发明、实用新型和外观设计。发明和实用新型专利被授予专利权后，专利权人对该项发明创造拥有独占权，任何单位和个人未经专利权人许可，都不得实施其专利，即不得为生产经营目的制造、使用、许诺销售、销售和进口其专利产品。外观设计专利权被授予后，任何单位和个人未经专利权人许可，都不得实施其专利，即不得为生产经营目的制造、销售和进口其专利产品。未经专利权人许可，实施其专利即侵犯其专利权，引起纠纷的，由当事人协商解决；不愿协商或者协商不成的，专利权人或利害关系人可以向人民法院起诉，也可以请求管理专利工作的部门处理。当然，也存在不侵权的例外，比如先使用权和科研目的的使用等。专利保护采取司法和行政执法“两条途径、平行运作、司法保障”的保护模式。该地区行政保护采取巡回执法和联合执法的专利执法形式，集中力量，重点对群体侵权、反复侵权等严重扰乱专利法治环境的现象加大打击力度。   </p>" + "<p> 即厂商名称权，是对自己已登记的商号（厂商名称、企业名称）不受他人妨害的一种使用权。企业的商号权不能等同于个人的姓名权（人格权的一种）。</p>",
        "<p>此外，如原产地名称、专有技术、反不正当竞争等也规定在巴黎公约中，但原产地名称不是智力成果，专有技术和不正当竞争只能由反不当竞争法保护，一般不列入知识产权的范围。</p>"];
    }


    else if (first_nav_order == 2 && sub_nav_order == 6) {
        content_title_list = ["","","<p>主要内容</p>" ];
        content_list = ["<p>自然科学、社会科学以及文学、音乐、戏剧、绘画、雕塑、摄影和电影摄影等方面的作品组成版权。版权是法律上规定的某一单位或个人对某项著作享有印刷出版和销售的权利，任何人要复制、翻译、改编或演出等均需要得到版权所有人的许可，否则就是对他人权利的侵权行为。知识产权的实质是把人类的智力成果作为财产来看待。著作权是文学、艺术、科学技术作品的原创作者，依法对其作品所享有的一种民事权利。</p>" ,
        "在中国，著作权用在广义时，包括（狭义的）著作权、著作邻接权、计算机软件著作权等，属于著作权法规定的范围。这是著作权人对著作物（作品）独占利用的排他的权利。狭义的著作权又分为发表权、署名权、修改权、保护作品完整权、使用权和获得报酬权（著作权法第10条）。著作权分为著作人身权和著作财产权。著作权与专利权、商标权有时有交叉情形，这是知识产权的一个特点。</p>" ,
        
        "<p>1、著作权自作品创作完成之日起产生。</p>" +
        "<p>2、又叫版权。分为著作人格权与著作财产权。其中著作人格权的内涵包括了公开发表权、姓名表示权及禁止他人以扭曲、变更方式利用著作损害著作人名誉的权利。</p>" +
        "<p>3、有以下几条权利：发表权，署名权，修改权，保护作品完整权，复制权，发行权，出租权，展览权，表演权，放映权，广播权，信息互联网传播权，摄制权，改编权，翻译权，汇编权，应当由著作权人享有的其他权利。</p>"];
    }
    else if (first_nav_order == 3 && sub_nav_order == 1) {
        content_title_list = ["<p>申请网站ICP许可证的，应当符合《中华人民共和国电信条例》第十三条的规定和下列条件：</p>"];
        content_list = ["" +
        "<p>1、有与开发经营活动相适应的资金和专业人员。</p>" +
        "<p>2、有业务发展计划及相关技术方案。</p>" +
        "<p>3、有为用户提供长期服务的信誉或者能力。</p>" +
        "<p>4、经营者为依法设立的公司。注册资金应在100万或者100万以上的公司。</p>" +
        "<p>5、涉及到ICP管理办法中规定须要前置审批的信息服务内容的，已取得有关主管部门同意的文件。</p>" +
        "<p>6、健全的网络与信息安全保障措施，包括网站安全保障措施、信息安全保密管理制度、用户信息 安全管理制度。</p>" +
        "<p>7、国家规定的其他条件。</p>"];
    }
    else if (first_nav_order == 3 && sub_nav_order == 2) {
        content_title_list = [""];
        content_list = ["<p>1、公司法定代表人签署的经营增值电信业务的书面申请。内容包括：申请电信业务的种类、业务覆盖范围、公司名称、通信地址、邮政编码、联系人、联系电话、电子信箱地址等；</p>" +
        "<p>2、公司的企业法人营业执照副本及复印件（包括法人身份证复印件）；</p>" +
        "<p>3、公司概况。包括：公司基本情况，拟从事增值电信业务的人员、场地和设施等情况（执有通信行业职业资格证书的情况）；</p>" +
        "<p>4、公司经会计师事务所审计的企业法人年度财务会计报告或验资报告及电信主管部门规定的其他相关会计资料；</p>" +
        "<p>5、公司章程，公司股权结构及股东的有关情况（包括入股方式的说明）；</p>" +
        "<p>6、业务发展可行性研究报告和技术方案。包括：申请经营电信业务的业务发展和实施计划、技术方案、服务项目、业务覆盖范围、市场调研与分析、收费方案、预期服务质量、投资分析、社会效益和经济效益等；</p>" +
        "<p>7、为用户提供长期服务和质量保障的措施；</p>" +
        "<p>8、信息安全保障措施；</p>" +
        "<p>9、证明公司信誉的有关材料；</p>" +
        "<p>10、公司法定代表人签署的公司依法经营电信业务的承诺书；</p>" +
        "<p>11、申请经营的电信业务依照法律、行政法规及国家有关规定须经有关主管部门事先审核同意的，应当提交有关主管部门审核同意的文件。</p>" +
        "<p>申请经营无线电通信业务的，应当提交国家或者省级无线电管理机构出具的无线电频率资源预指配意见。</p>" +
        "<p>尚未获得企业法人营业执照的申请者，应当提交公司的企业名称预先核准通知书，无需提交第2、9项中规定的材料。第1项规定的书面申请和第10项规定的承诺书，拟成立有限责任公司的，应当由全体股东签署；拟成立股份有限公司的，应当由全体发起人签署</p>"];
    }
    else if (first_nav_order == 3 && sub_nav_order == 3) {
        content_title_list = [""];
        content_list = ["<p>1、申办材料齐全、规范、有效。</p>" +
        "<p>2、申请单位必须符合《电信业务经营许可证管理办法》第六条的规定。</p>" +
        "<p>3、对申请单位的经营场所、机房进行实地考察。</p>" +
        "<p>时限：60 个工作日。</p>" +
        "<p>注：在地方上可能要求的不一样，但是大体上这些都是必要的</p>"];
    }
    else if (first_nav_order == 4 && sub_nav_order == 1) {
        content_title_list = [""];
        content_list = ["<p>是全部人事管理的基石。中国国家机关、企业、事业单位在编制定员内需要补充工作人员时，根据招录的条件和要求，除了从高等学校、中等专业学校毕业生和从现有的工人中遴选外，可以从社会上的待业人员中录用。录用工作人员必须进行德、智、体全面了解，一般采取考试或考核的办法，择优录用。工作人员被录用以后，要有一定的试用期。试用期间，由主管领导对被试用人员的思想品质、专业技术水平、工作能力和身体状况等，进行全面认真的考察。试用期满后，根据考察结果，对符合条件的予以正式任用。正式任用后其工资福利待遇按国家现行有关规定办理，其地位、权利和义务得到法律保护。</p></p>"];
    }
    else if (first_nav_order == 4 && sub_nav_order == 2) {
        content_title_list = [""];
        content_list = ["<p>是人事管理中的一项经常性的工作。由于工作的需要，或为达到在职训练的目的，或为调整“人与人”、“人与事”的关系，或为照顾工作人员本人及其家庭的困难，常常采取调动工作人员工作岗位的措施。调配工作人员必须按照国家编制和人员结构要求，企业单位生产人员与非生产人员的合理比例，本着学以致用、适才适所、发挥特长的原则进行。</p></p>"];
    }
    else if (first_nav_order == 4 && sub_nav_order == 3) {
        content_title_list = [""];
        content_list = ["<p>任免是国家依据法规，授予工作人员一定的职务，或免除工作人员所任的职务。任免必须经过严格考核，做到及时、正确。只有任免得当，才能人尽其才，否则将会贻误工作。</p></p>"];
    }
    else if (first_nav_order == 4 && sub_nav_order == 4) {
        content_title_list = [""];
        content_list = ["<p>对工作人员的政治、业务素质和工作实绩的考察了解。考核是人事管理中的一个基本要素，是“用人行政”的基础。通过考核，全面了解工作人员的优劣短长，可以为识别、使用、培训、调动、奖惩工作人员，以及实行按劳分配原则提供可靠的依据，也是激励先进、鞭策后进、巩固岗位责任制的重要措施。考核要以德才为基本标准，以考绩为重点，全面地考德、考能、考勤、考绩。①考德。主要考核能否认真贯彻执行国家的宪法、法律、法令，是否具备工作人员应有的道德品质。②考能。主要考核是否具有做好本职工作的业务技能，以及必备的文化知识和实际工作能力。③考勤。主要考核出勤情况、学习成绩和工作态度。④考绩。主要考核完成任务的数量、质量、效率。</p></p>"];
    }
    else if (first_nav_order == 5 && sub_nav_order == 1) {
        content_title_list = ["  企业融资主要有两种形式：</p>一种是内源融资：", "一种是外源融资："];
        content_list = ["<p>内源融资是指公司经营活动结果产生的资金，即公司内部融通的资金，它主要由留存收益和折旧构成.是指企业不断将自己的储蓄（主要包括留存盈利、折旧和定额负债）转化为投资的过程。内源融资对企业的资本形成具有原始性、自主性、低成本和抗风险的特点，是企业生存与发展不可或缺的重要组成部分。事实上，在发达的市场经济国家，内源融资是企业首选的融资方式，是企业资金的重要来源。</p></p>", "<p>外源融资是指企业通过一定方式向企业之外的其它经济主体筹集资金。外源融资分方式包括：银行贷款、发行股票、企业债券等，此外，企业之间的商业信用、融资租赁在一定意义上说也属于外源融资的范围。外源融资是吸收其他经济主体的储蓄，以转化为自己投资的过程。随着技术的进步和生产规模的扩大，单纯依靠内源融资已很难满足企业的资金需求，外源融资已逐渐成为企业获得资金的重要方式。</p></p>"];
    }
    else if (first_nav_order == 5 && sub_nav_order == 2) {
        content_title_list = ["","企业投可分为直接投资和间接投资两种</p>" ];
        content_list = ["<p>企业投资是指企业以自有的资产投入，承担相应的风险，以期合法地取得更多的资产或权益的一种经济活动。企业投资从投入到产出中间有个经营过程，稍有不慎投资将化为流水。因此企业投资需要注意客观评估自身条件量力而行，认真研究投资环境，投资项目，要作好市场调查，防止投资失败。</p>" ,
        
        "<p>直接投资一般是把资金投放于生产经营环节中，主要为企业设立、购置各种生产经营用资产的投资，以期通过对企业的投资获取投资收益。这种企业经营性直接投资，在总的投资中所占比重较大。</p>" +
        "<p>间接投资又称金融投资或证券投资，是指把资金投放于证券等金融性资产，以期获愿股利或利息收入的投资。随着我国金融市场的完善和多渠道筹资的形成，企业的间接投资会越来越广泛。</p>"];
    }
    else if (first_nav_order == 5 && sub_nav_order == 3) {
        content_title_list = ["","","",""];
        content_list = ["<p>1.投融资行为的介入程度：直接投资，间接投资。</p>" ,
        "<p>2.投融资申请投入领域：生产性投融资申请，非生产性投融资申请。</p>" ,
        "<p>3.投融资申请方式：对内投融资申请，对外投融资申请。</p>" ,
        "<p>4.投融资办理内容：固定资产投融资申请，无形资产投融资办理，流动资产投融资申请，房地产投融资申请，保险投融资办理，信托投融资办理等。</p>"];
    }


    else if (first_nav_order == 5 && sub_nav_order == 4) {
        content_title_list = ["<p>1.投融资办理企业向审批机关提交董事会决议和董事长签署的申请书等文件。</p>","<p>2.审批机关在接到投融资办理申请文件后，以书面形式作出是否同意的答复。</p>",
        "<p>3.审批机关进行投融资申请审核。</p>","<p>4.经审批机关审核同意后，投融资办理企业按照变更登记的有关规定，向工商行政机关申请变更登记。</p>","<p>5.投融资办理完成。</p>"];
        content_list = ["" ,"","","",""];
    }
    else if (first_nav_order == 5 && sub_nav_order == 5) {
        content_title_list = ["","",""];
        content_list = ["<p>由于中小企业自身特征，偿债能力弱、融资规模较小、财务规范性差、缺乏完善的公司治理机制等问题，中小企业抵御风险的能力一般较弱。因此，大型金融机构一般缺乏相关的金融服务方案，主要因为银行为了控制风险，设置了复杂的风控手续，最终实现收益一般较低。</p>" ,
        "<p>目前针对中小企业融资一般都是通过地下钱庄、私募基金、担保公司、投资公司等来获取企业发展需要的资金。</p>" ,
        "<p>我国提倡综合利用政府资助、科技贷款、资本市场、创业投资、发放债券等方式加强对于中小企业的融资支持。目前，国内正逐渐兴起通过网络集合多种营销渠道，解决中小企业融资难问题，即网上融资贷款信息服务平台，比如：融众网。未来，无论是中小企业还是个人，融资贷款的电子商务化愈来愈成为一种趋势。</p>"];
    }


    // card_list=new Array();

    $.each(content_list, function (index, item) {
        // console.log(item);
        // var tools_template=$("#tools_template"); 
        var result = $("#result-tools");
        // var graph = tools_template.clone();
        setTimeout(function () {
            // graph.find(".card-row-tools-title").text(content_title_list[index]);
            // graph.find(".card-row-tools-text").html(item);
            // graph.css("opacity","1");
            result.append(createToolsCard(content_title_list[index], item));
            // graph1.animate({opacity:1},1000);
        }, _time_delay * index);
    });
}

function createToolsCard(title, text) {
    d_template = $('<div class="card-row-tools" style="opacity: 1;"><div>');
    d_block = $('<div class="card-row-tools-block"><div>');
    e_h5 = $('<h5 class="card-row-tools-title">' + title + '</h5>');
    e_p = $('<p class="card-row-tools-text">' + text + '</p>');

    $(d_block).append(e_h5);
    $(d_block).append(e_p);
    $(d_template).append(d_block);

    return d_template;
}