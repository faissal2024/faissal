const toggleBtn = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

toggleBtn.addEventListener('click', function() {
  if (navbar.style.display === 'none' || navbar.style.display === '') {
    navbar.style.display = 'block';
    toggleBtn.textContent = ''; // Change button text
  } else {
    navbar.style.display = 'none';
    toggleBtn.textContent = ''; // Change button text
  }
});



document.addEventListener("DOMContentLoaded", function () {
  window.onload = function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  };
});


class Translate{

         constructor(){

          document.getElementById("arabic").addEventListener("click",()=>{

            this.Translate("arabic")

          });



          this.Translate();

   
}

Translate(language){


  if(language == "arabic"){

    document.getElementById("active").innerHTML = "رئيسية";

    document.getElementById("education").innerHTML = "البداية";

    document.getElementById("Serv").innerHTML = "مادا افعل";

    document.getElementById("testi").innerHTML = "اعمالي";

    document.getElementById("Contact").innerHTML = "تواصل";

    document.getElementById("arabic").innerHTML = "العربية";



    document.getElementById("text-animation-ar").innerHTML = "أنا مطور ويب متخصص في تصميم مواقع الويب، وتقديم تجارب مستخدم استثنائية وتصميمات حديثة وعالية الجودة تلبي توقعات العملاء. مع عامين من الخبرة، أتقن HTML وCSS وJavaScript وأطر عمل مثل React. أنا ملتزم بتعزيز مهاراتي وضمان جودة موقع الويب لتحقيق رضا العملاء.";

  

    document.getElementById("hi ar").innerHTML = "مرحبا انا فيصل";





    document.getElementById("btn ar").innerHTML = "تواصل";





    document.getElementById("heading ar").innerHTML = "البداية";



    document.getElementById("my journey-p ar1").innerHTML = "ستتساءل لماذا أبحث عن حل والحل هو لماذا؟ لم أنجح في دراستي وفي مجتمعنا هذه دراسة مهمة للعمل لذلك هنا نسأل لماذا اخترت البرمجة؟";


    document.getElementById("my journey-p ar2").innerHTML = "كما هو معلوم فإن برمجة المواقع الإلكترونية مطلوبة بشكل كبير في المغرب، وهذا المجال لا يتطلب في أغلب الأحيان شهادة جامعية، ومن هنا بدأ الحلم... بدأت بالبحث وفهم هذا المجال، وأحببته، لكن الظروف لم تساعدني في ذلك الوقت";

  

    document.getElementById("my journey-p ar3").innerHTML = "كان الحظ بجانبي عندما كنت أملك جهاز كمبيوتر حتى لو كان ضعيفا، كنت أرى فيه مفتاحا لشغفي، فبدأت أذهب إلى المقاهي والأماكن التي يتوفر فيها إنترنت مجاني فقط لتحميل الدورات على الهاتف والعودة إلى المنزل ومشاهدتها وتطبيقها، كانت هذه بدايتي في برمجة العديد من المشاريع التي أحببتها وأعطتني الرغبة في إكمالها حتى لو لم تساعدني الإمكانيات";



    document.getElementById("my journey-p ar4").innerHTML = "بدأت في إنشاء مشاريع جيدة وأتعلم أكثر فأكثر كل يوم، تعلمت كيفية إنشاء موقع من الصفر، وعرضت بعض أعمالي على الناس وحصلت على دعم كبير، والحمد لله هذا حفزني أكثر، ورغم أنني لم أكسب دولاراً واحداً إلا أن هذا الحلم الجميل سيبقى أمامي حتى أحققه";
                                                                                              

    document.getElementById("my journey-p ar5").innerHTML = "لم يتبقى سوى أيام معدودة حتى حلول العام الجديد، وقد وعدت نفسي ألا أضيع ولو القليل من الوقت فيها، وأن أطور نفسي أكثر فأكثر ببساطة لأنني أحب عملي";


    document.getElementById("heading 2").innerHTML = "ماذا أفعل";



    document.getElementById("heading h4_1").innerHTML = "تصميم وتطوير واجهة المستخدم وتجربة المستخدم";


    document.getElementById("heading p1").innerHTML = "تصميم وتطوير واجهة المستخدم/تجربة المستخدم: يمكنني تصميم واجهات مبتكرة وسهلة الاستخدام باستخدام HTML وCSS. أقوم بإنشاء تصميمات سريعة الاستجابة تدعم جميع الأجهزة، مما يضمن تجربة مستخدم مثالية";


    document.getElementById("heading h4_2").innerHTML = "تطوير مواقع الويب التفاعلية";

 

    document.getElementById("heading p2").innerHTML = "تطوير مواقع الويب التفاعلية: باستخدام جافا سكريبت يمكنني إضافة ميزات تفاعلية إلى مواقع الويب مثل التمرير الديناميكي والتأثيرات التفاعلية والنماذج المتقدمة، مما يجعل مواقع الويب أكثر جاذبية وتفاعلًا للمستخدمين.";



    document.getElementById("heading h4_3").innerHTML = "تحسين الأداء والسرعة";



    document.getElementById("heading p3").innerHTML = "تحسين الأداء والسرعة: من خلال تقنيات تحسين الأداء مثل ضغط الصور وتحسين الكود وإدارة ذاكرة التخزين المؤقت، أضمن أن يكون الموقع سريعًا وفعالًا.";



    document.getElementById("heading h4_4").innerHTML = "إدارة مشاريع الويب";


    document.getElementById("heading p4").innerHTML = "إدارة مشاريع الويب: مع أكثر من عامين من الخبرة في التعامل مع مشاريع متعددة، لدي القدرة على إدارة وتحسين تطوير مواقع الويب من البداية إلى النهاية، مع التركيز على تحقيق أهداف العميل وتقديم نتائج عالية الجودة.";



    document.getElementById("heading wo").innerHTML = "اعمالي";

    
    document.getElementById("movies").innerHTML = "موقع افلام";
    document.getElementById("movies-p").innerHTML = "موقعي هو عبارة عن منصة مصممة لعشاق الأفلام، حيث يقدم مجموعة واسعة من الأفلام عبر مختلف الأنواع، كاملة بمعلومات مفصلة عن كل فيلم وتجربة مشاهدة سلسة.";
   

    document.getElementById("login").innerHTML = "تسجيل دخول";
    document.getElementById("login p").innerHTML = "تسجيل الدخول هو عملية إدخال بيانات اعتماد المستخدم (مثل اسم المستخدم وكلمة المرور) للوصول إلى حساب شخصي والاستفادة من الخدمات المخصصة على الموقع";
 

    document.getElementById("Galaxy p").innerHTML = "يقدم موقعي خدمة إعلانية مميزة لهاتف Galaxy S23 Ultra، حيث يعرض أهم مميزاته وتصميمه المتطور من خلال محتوى جذاب وإبداعي يستهدف العملاء بشكل احترافي.";


    document.getElementById("login 2").innerHTML = "2تسجيل دخول";
    document.getElementById("login p2").innerHTML = "يعد تسجيل الدخول بوابة آمنة تسمح للمستخدمين بالوصول إلى حساباتهم الشخصية باستخدام بيانات اعتماد تم التحقق منها مثل البريد الإلكتروني وكلمة المرور، مع دعم تدابير أمنية متقدمة مثل المصادقة الثنائية لضمان حماية البيانات وتوفير تجربة مخصصة.";


    document.getElementById("not").innerHTML = "غير جاهز";
    document.getElementById("not p").innerHTML = " شكرا لزيارتكم لموقعي، وأود أن أبلغكم بأن هذا العمل غير جاهز في الوقت الحالي.";

    document.getElementById("not2").innerHTML = "غير جاهز";
    document.getElementById("not p2").innerHTML = " شكرا لزيارتكم لموقعي، وأود أن أبلغكم بأن هذا العمل غير جاهز في الوقت الحالي.";

    document.getElementById("Contact1").innerHTML = "تواصل معي";










  } 

  



      }
};

onload = new Translate();



