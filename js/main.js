
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

var $menubar = $('#menubar');
var $menubarHdr = $('#menubar_hdr');

$(window).on("load resize", debounce(function() {
    if(window.innerWidth <= 900) {	
        $('body').addClass('small-screen').removeClass('large-screen');
        $menubar.addClass('display-none').removeClass('display-block');
        $menubarHdr.removeClass('display-none ham').addClass('display-block');
    } else {
       
        $('body').addClass('large-screen').removeClass('small-screen');
        $menubar.addClass('display-block').removeClass('display-none');
        $menubarHdr.removeClass('display-block').addClass('display-none');
        $('.ddmenu_parent > ul').hide();
    }
}, 10));

$(function() {
    $menubarHdr.click(function() {
        $(this).toggleClass('ham');
        if ($(this).hasClass('ham')) {
            $menubar.addClass('display-block');
        } else {
            $menubar.removeClass('display-block');
        }
    });

    $menubar.find('a[href*="#"]').click(function() {
        $menubar.removeClass('display-block');
        $menubarHdr.removeClass('ham');
    });
	$menubar.find('a[href=""]').click(function() {
		return false;
	});

    $menubar.find('li:has(ul)').addClass('ddmenu_parent');
    $('.ddmenu_parent > a').addClass('ddmenu');

var touchStartY = 0;

$('.ddmenu').on('touchstart', function(e) {
    
    touchStartY = e.originalEvent.touches[0].clientY;
}).on('touchend', function(e) {
  
    var touchEndY = e.originalEvent.changedTouches[0].clientY;
    
    var touchDifference = touchStartY - touchEndY;
    
  
    if (Math.abs(touchDifference) < 10) { 
        var $nextUl = $(this).next('ul');
        if ($nextUl.is(':visible')) {
            $nextUl.stop().hide();
        } else {
            $nextUl.stop().show();
        }
        $('.ddmenu').not(this).next('ul').hide();
        return false; 
    }
});

    $('.ddmenu_parent').hover(function() {
        $(this).children('ul').stop().show();
    }, function() {
        $(this).children('ul').stop().hide();
    });

    $('.ddmenu_parent ul a').click(function() {
        $('.ddmenu_parent > ul').hide();
    });

});


$(function() {
  function toggleBodyScroll() {

    if ($('#menubar_hdr').hasClass('ham') && !$('#menubar_hdr').hasClass('display-none')) {
  
      $('body').css({
        overflow: 'hidden',
        height: '100%'
      });
    } else {
    
      $('body').css({
        overflow: '',
        height: ''
      });
    }
  }

  toggleBodyScroll();

  const observer = new MutationObserver(toggleBodyScroll);
  observer.observe(document.getElementById('menubar_hdr'), { attributes: true, attributeFilter: ['class'] });
});

$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
    $(scroll).hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300) {
            $(scroll).fadeIn().addClass(scrollShow);
        } else {
            $(scroll).fadeOut().removeClass(scrollShow);
        }
    });

    function smoothScroll(target) {
        var scroll = target.offset().top ; 
        $('body,html').animate({ scrollTop: scroll }, 500);
    }

    $('.pagetop').click(function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    $(window).on('load', function() {
        var hash = location.hash;
        if (hash) {
            $('body,html').scrollTop(0);
            setTimeout(function() {
                var target = $(hash);
                if (target.length) {
                    smoothScroll(target);
                }
            }, 100);
        }
    });

    $(window).on('load', function() {
        $('a[href*="#"]').click(function(e) {
            var href = $(this).attr('href');
            var targetId = href.split('#')[1]; 
            var target = $('#' + targetId);
            if (target.length) {
                e.preventDefault();
                smoothScroll(target);
                history.pushState(null, null, '#' + targetId); 
            }
        });
    });
});

$(function() {
	$('.openclose').next().hide();
	$('.openclose').click(function() {
		$(this).next().slideToggle();
		$('.openclose').not(this).next().slideUp();
	});
});

const languageData = {
    'en':{
        'lead01':'NEWS',
        'lead02':"Saionji-Family",
        'lead03':"Saionji Momiji's birthday",
        'lead04':"Saionji Kaede's birthday",
        'lead05':"Saionji Sumie's birthday",
        'lead06':"Saionji Souichi's birthday",
        'lead07':'What is Saionji-Family',
        'lead08':'There are a lot of sources of worry.',
        'lead09':'I am currently considering what to put in this section and what kind of site to create.',
        'lead10':'Chasing the family scoop of the FTP6 team?!',
        'lead11':'A monster family is born based on Copilot.',
        'lead12':'What is the Saionji family?',
        'lead13':'A wealthy family in Kyoto, starting with the autumn leaves, history begins to change...',
        'lead14':' The complete history is here.',
        'lead15':'Please look at this.',
        'lead16':'School Introduction',
        'lead17':'Leaping into the world through various majors.',
        'lead18':'HOME',
        'lead19':'CAMPANY',
        'lead20':'Saionji photo story',
        'lead21':'Family Info',
        'lead22':'Detailed information about the family!',
        'lead24':'Saionji Momiji',
        'lead25':'Personality and Characteristics',
        'lead26':'Age: 20 years old',
        'lead27':'Gender: Female',
        'lead28':"Educational Background: Currently enrolled in a prestigious women's university majoring in literature or an apprentice at a traditional cultural family.",
        'lead29':'Personality: Speaks calmly and gently, but surprisingly competitive.',
        'lead30':'Polite and courteous, but shows humor to close acquaintances.',
        'lead31':'She may not be up to date with trends, but I am very knowledgeable about classics and traditions.',
        'lead32':'Hobbies: Traditional Japanese culture in general such as tea ceremony, flower arrangement, waka poetry, and incense appreciation.',
        'lead33':'Coordination of Vintage Kimonos',
        'lead34':'Reading (modern literature and collections of waka poetry)',
        'lead35':'Piano or Koto (classical lessons)',
        'lead36':'Catchphrases: "It is so, you know" "Good day" "Well, ufufu..."',
        'lead37':'Appearance: Long straight black hair or styled in a traditional Japanese manner,',
        'lead38':'with a refined appearance',
        'lead39':'A classical beauty who suits both Western clothing and traditional Japanese attire, with a somewhat ephemeral atmosphere.',
        'lead40':'Saionji Kaede',
        'lead41':'Personality and Characteristics',
        'lead42':'Age: 25 years old',
        'lead43':'Gender: Male',
        'lead44':"Education: Graduated from the University of Tokyo, Faculty of Law. Candidate for diplomat, young politician's secretary, or successor candidate for a long-established company or cultural foundation.",
        'lead45':'Personality: Calm and collected, somewhat indulgent toward my younger sister but does not show it outwardly, has a sense of balance between tradition and modernity.',
        'lead46':'Hobbies: tea ceremony, calligraphy, horseback riding, fencing, rakugo, and classical music.',
        'lead47':"Catchphrase: Mainly respectful language, occasionally sarcasm or jokes, to my sister I say '... as always' and 'Don't push yourself too hard, Momiji' and so on.",
        'lead48':'Appearance: Well-proportioned face, neatly styled black hair, looks good in suits and traditional Japanese clothing, has good posture and a quiet presence.',
        'lead49':'Saionji Sumie',
        'lead50':'Personality and Characteristics',
        'lead51':'Age: 50 years old',
        'lead52':'Gender: Female',
        'lead53':'Origin: A prestigious family from Kyoto or a cultured family from Tokyo.',
        'lead54':'Occupation: Director of a cultural foundation, master of tea ceremony and Japanese poetry, a supporting figure at home as the wife of Souichi.',
        'lead55':'Saionji Souichi',
        'lead56':'Personality and Characteristics',
        'lead57':'Age: 55 years old',
        'lead58':'Gender: Male',
        'lead59':'Origin: A traditional family from Kyoto (the main branch of the Saionji family)',
        'lead60':'Occupation: Chairman of a cultural foundation, chairman of a long-established company, former diplomat, etc.',
        'lead61':'Company Name',
        'lead62':'Establishment',
        'lead63':'March 12, 1995',
        'lead64':'Representative',
        'lead65':'Saionji　Souichi',
        'lead66':'Capital stock',
        'lead67':'￥300,000,000',
        'lead68':'Partner company',
        'lead69':'Tech.C-Kobe',
        'lead70':'Saionji Photo Story',
        'lead71':'As part of creating a web page, the Saionji family is born.',
        'lead72':'Knowing the fun of AI, the birth of Kaede',
        'lead73':'The birth of Saionji Momiji using Copilot and chatGPT.',
        'lead74':'Frequently Asked Questions',
        'lead75':'How did the Momiji request?',
        'lead76':'First, I was given a list of name candidates, and among them was the name Saionji Momiji.',
        'lead77':'Also, I felt a sense of Kyoto from that name, so I requested it as a daughter of Kyoto!',
        'lead78':'Does Momiji have a boyfriend?!',
        'lead79':'There aren’t any! Since Momiji can be mass-produced, feel free to go for it if you’d like!',
        'lead80':'Where can I meet the Saionji family?',
        'lead81':'It might be difficult in reality...',
        'lead82':'However, it is possible to encounter in 3D depending on the method!',
        'lead83':'Is it true that Souichi is too scary?',
        'lead84':'I cannot deny it.',
        'lead85':'However, it seems that there is also a very playful side to them!',
        'lead86':'Download from here',
        'lead87':'The Saionzi music explosion',
        
    },
    'ja':{
        'lead01':'お知らせ',
        'lead02':'西園寺一家',
        'lead03':'西園寺紅葉 誕生',
        'lead04':'西園寺 楓誕生',
        'lead05':'西園寺澄江 誕生',
        'lead06':'西園寺宗一 誕生',
        'lead07':'西園寺familyとは、',
        'lead08':'悩みの種は凄く多し、',
        'lead09':'今後この欄に何を入れどのようなサイトを作るか検討中',
        'lead10':'FTP6班の家族スクープを追う？！',
        'lead11':'copilotを元にバケモン一家が爆誕',
        'lead12':'西園寺一家とはいかに',
        'lead13':'京都の大金持ちの文系一家、紅葉を初めに歴史は動く...',
        'lead14':'歴史の一部始終はこちらで',
        'lead15':'こちらをご覧下さい。',
        'lead16':'学校紹介',
        'lead17':'さまざまな専攻を通して世界へ飛躍中',
        'lead18':'ホーム',
        'lead19':'会社概要',
        'lead20':'西園寺フォトストーリー',
        'lead21':'家族情報',
        'lead22':'家の詳細情報！',
        'lead24':'西園寺　紅葉（さいおんじ　もみじ）',
        'lead25':'性格と特徴',
        'lead26':'年齢：20歳',
        'lead27':'性別：女性',
        'lead28':'学歴：名門女子大学 文学部在学中 or 伝統文化系の家元見習い',
        'lead29':'性格：穏やかで落ち着いた話し方をするが、意外と負けず嫌い',
        'lead30':'丁寧で礼儀正しいが、近しい相手にはユーモアを見せる。',
        'lead31':'流行には疎いが、古典や伝統に関しては非常に詳しい。',
        'lead32':'趣味：茶道・華道・和歌・香道など日本文化全般',
        'lead33':'古着物のコーディネート',
        'lead34':'読書（近代文学や和歌集など）',
        'lead35':'ピアノ or 琴（クラシックな習い事）',
        'lead36':'口癖：「〜でございますわ」「ごきげんよう」「まあ、うふふ…」',
        'lead37':'外見：黒髪のロングストレート、もしくは和風のまとめ、',
        'lead38':'端正な顔立ちで',
        'lead39':'やや儚げな雰囲気洋装でも和装でも似合う、クラシカルな美人',
        'lead40':'西園寺　楓（さいおんじ　かえで）',
        'lead41':'性格と特徴',
        'lead42':'年齢:25',
        'lead43':'性別：男性',
        'lead44':'学歴:東京大学法学部卒　外交官、若手政治家秘書、または老舗企業・文化財団の後継者候補',
        'lead45':'性格:冷静沈着　妹にはやや甘いが表に出さない　伝統と現代のバランス感覚あり',
        'lead46':'趣味:茶道・書道　馬術・フェンシング　落語・クラシック音楽',
        'lead47':'口癖:敬語中心　時折皮肉や冗談　妹には「…相変わらずだな」「無理はするな、紅葉」など',
        'lead48':'外見:端正な顔立ち　黒髪を流し気味に整える　スーツ・和装が似合う　姿勢が良く静かな気配',
        'lead49':'西園寺　澄江（さいおんじ　すみえ）',
        'lead50':'性格と特徴',
        'lead51':'年齢：50',
        'lead52':'性別：女性',
        'lead53':'出身：京都の名家または東京の文化人家庭',
        'lead54':'職業：文化財団の理事　茶道・和歌の師範　宗一の妻として家を支える存在',
        'lead55':'西園寺　宗一（さいおんじ　そういち)',
        'lead56':'性格と特徴',
        'lead57':'年齢：55',
        'lead58':'性別：男性',
        'lead59':'出身：京都の旧家（西園寺家の本家）',
        'lead60':'職業：文化財団理事長　老舗企業の会長　元外交官など',
        'lead61':'会社名',
        'lead62':'創立',
        'lead63':'1995年3月12日',
        'lead64':'代表者',
        'lead65':'西園寺　宗一',
        'lead66':'資本金',
        'lead67':'300,000,000円',
        'lead68':'提携企業',
        'lead69':'神戸・甲陽デザイン＆テクノロジー専門学校',
        'lead70':'西園寺フォトストーリー',
        'lead71':'　Webページを作る一環で西園寺ファミリー誕生',
        'lead72':'　AIの面白さを知り楓誕生',
        'lead73':'　CopilotとcahtGPTを用いて西園寺紅葉誕生',
        'lead74':'よく頂く質問集',
        'lead75':'紅葉はどのようにリクエストした？',
        'lead76':'最初に名前の候補を出してもらい、その中に西園寺紅葉の名がありました。',
        'lead77':'また、その名から京都感を感じたので京都の娘としてリクエストしていきました！',
        'lead78':'紅葉には、彼氏がいますか？！',
        'lead79':'いません！紅葉は量産も可能なので良ければ狙っちゃって下さい！',
        'lead80':'西園寺家はどこに行けば会えますか？',
        'lead81':'現実では難しいかもです...',
        'lead82':'ですが、3次元では方法によれば遭遇可能です！',
        'lead83':'宗一が怖すぎるってのは本当？',
        'lead84':'否定はできかねますー、',
        'lead85':'ですが、とてもちょけ散らかす一面もあるそうです！',
        'lead86':'ダウンロードはこちらから',
        'lead87':'The Saionzi music 爆誕',


    },
    
};


const langs = document.getElementById('language');
langs.addEventListener('change',(e) => {
    changeLanguage(e.target.value);
});

const changeLanguage = function(lang) {
    let elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(function(element) {
        let key = element.getAttribute('data-lang-key');
        let text = languageData[lang][key];
        element.textContent = text;
    });
}
