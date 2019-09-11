import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {
  DanhSachPhimSapChieu = [
    {
        MaPhim: 361,
        TenPhim: 'Ác Quỷ Ma Sơ',
        Trailer: 'https://www.youtube.com/watch?v=4IOH7xTQ5Dg',
        MoTa: 'Lấy bối cảnh một tu viện thuộc Romania năm 1952, trước những sự kiện diễn ra trong "The Conjuring" và "Annabelle". Sau cái chết kỳ dị và bí ẩn của một nữ tu trẻ ở tu viện, một linh mục với quá khứ ám ảnh và một mục sư chưa thực hiện lời tuyên thệ cuối cùng được Vatican cử đến để điều tra sự việc. Họ đã cùng nhau khám phá ra một sự thật khủng khiếp. Không chỉ gặp nguy hiểm đe dọa mạng sống, cả hai còn phải đối mặt với sự đe dọa về đức tin lẫn linh hồn trước một thế lực tàn độc đội lốt một nữ tu ma quỷ.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-07T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/ac-quy-ma-so.jpg'
    },
    {
        MaPhim: 371,
        TenPhim: 'Transformer : The Last Knight',
        Trailer: 'https://www.youtube.com/watch?v=AntcyqJ6brc',
        MoTa: 'Ngày nay, hầu hết các chính phủ trên toàn Trái đất đã đẩy Transformer ra ngoài vòng pháp luật, và hiệp hội đa quốc gia Transformer Reaction Force (TRF) đã được thành lập với mục đích tiêu diệt tất cả các người máy ngoài hành tinh. Dù thiếu vắng Optimus Prime, người máy đã rời Trái đất để tìm kiếm đấng kiến tạo, các Transformer mới vẫn tiếp tục đến Trái đất thường xuyên; chiếc phi thuyền mới nhất đã hạ cánh xuống đống đổ nát của thành phố Chicago, và đã được một nhóm trẻ tìm ra. Khi đội TRF chạm trán lũ trẻ, chúng đã được cứu thoát bởi Izabella, một cô bé đã sống sót sau trận Đại chiến Chicago cùng với hai người bạn Transformer của cô là Sqweeks và Canopy, nhưng Canopy sau đó đã bị đội TRF tiêu diệt. Bumblebee và Cade Yeager sau đó đã tới và giúp chúng trốn thoát, nhưng Yeager lại không thể cứu được một Transformer đang bị kẹt lại trong phi thuyền. Trước khi chết, người máy chiến binh đã đưa cho Yeager một chiếc bùa kim loại. Hành động này đã bị Decepticon Barricade nhìn thấy và báo lại cho thủ lĩnh Megatron.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-01-02T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/transformer-the-last-knight.jpg'
    },
    {
        MaPhim: 374,
        TenPhim: 'Thiện Ác Đối Đầu 2',
        Trailer: 'https://www.youtube.com/watch?v=qBX0g7BBW9o',
        MoTa: 'Equalizer 2- Thiện Ác Đối Đầu 2 là một bộ phim hành động cực kỳ gây cấn và kịch tính với sự tham gia diễn xuất trở lại của diễn viên gạo cội Denzel Washington. Trong phim, cựu đặc vụ CIA tiếp tục trở thành “người hùng thầm lặng” truy tìm công lý đặc biệt càng quyết liệt hơn sau cái chết của người bạn thân Susan.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-10-01T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/thien-ac-doi-dau-2.jpg'
    },
    {
        MaPhim: 375,
        TenPhim: 'Cá Mập Siêu Bạo Chúa',
        Trailer: 'https://www.youtube.com/watch?v=dfNqTShwypw',
        MoTa: 'Trong chuyến thám hiểm đại dương, đoàn thủy thủ đã khám phá ra Mariana - khu vực biển sâu nhất Trái Đất. Tuy nhiên, cả đoàn bị mắc kẹt dưới đáy Thái Bình Dương, khi đó tính mạng của họ bị đe dọa trước kẻ săn mồi ám ảnh đầy kinh hãi nhất lịch sử - siêu cá mập bạo chúa khổng lồ, thường được biết đến với cái tên Megalodon. Trước tình hình ngàn cân treo sợi tóc, một đội chuyên gia gồm Jonas Taylor (Jason Statham), nhà đại dương và con gái ông đã được tập hợp để đến giải cứu đoàn tàu. Jonas cùng đồng đội sẽ xoay sở ra sao? Liệu họ có thể giải cứu mọi người thoát khỏi sinh vật đáng sợ này?',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-08-10T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/ca-map-sieu-bao-chua.jpg'
    },
    {
        MaPhim: 376,
        TenPhim: 'Alpha: Người Thủ Lĩnh',
        Trailer: 'https://www.youtube.com/watch?v=UL2P0wlgz6Y',
        MoTa: 'Alpha: Người Thủ Lĩnh là một tựa phim hành động phiêu lưu đầy tham vọng của hãng Sony. Không chỉ sở hữu phần ngoại cảnh choáng ngợp đặc tả thế giới cổ đại hùng vĩ, tác phẩm còn ôm ấp một kịch bản vô cùng cảm động. Phim là câu chuyện từ thù hóa bạn giữa cậu nhóc tiền sử (Kodi Smit-McPhee) và một chú sói lạc bầy. Cũng từ đây, lịch sử nhân loại hoàn toàn thay đổi.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-08-17T00:00:00',
        DanhGia: 4,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/alpha-nguoi-thu-linh.jpg'
    },
    {
        MaPhim: 377,
        TenPhim: 'Đế Chế Bất Diệt',
        Trailer: 'https://www.youtube.com/watch?v=gRxArKC908g',
        MoTa: '“Đế chế bất diệt” đặt trong bối cảnh nước Nga vào giữa thế kỷ 13 Trung Cổ, bị phân chia thành các quân khu đang lần lượt thất thủ khi quân đội Mông Cổ dẫn đầu bởi tướng Bạt Đô hiện thực hóa giấc mộng bá chủ thế giới của Thành Cát Tư Hãn. Sợ hãi trước sức mạnh và sự tàn bạo của quân xâm lược, hầu hết các thái tử Nga đều xin hàng và giao nộp vùng đất của họ cho kẻ thù. Những kẻ xâm lược cướp bóc và đốt cháy các thành phố, nhuộm đất Nga bằng máu, cho đến khi một kiếm sĩ Ryazan Evpaty Kolovrat đứng lên ngăn chặn chúng. Kolovrat dẫn đầu một đội ngũ của hàng trăm chiến binh dũng cảm để trả thù cho gia đình thân yêu, cho dân tộc, và quê hương của anh.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-08-17T00:00:00',
        DanhGia: 4,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/de-che-bat-diet.jpg'
    },
    {
        MaPhim: 380,
        TenPhim: 'TRẬN BÓNG KINH HOÀNG',
        Trailer: 'https://www.youtube.com/watch?v=ID73eCI7HMg',
        MoTa: 'Cho rằng gã anh trai phản bội Dimitri ( Pierce Brosnan) đang lẩn trốn đâu đó tại sân vận động Boleyn Ground nơi diễn ra trận bán kết tranh cúp Châu Âu giữa hai đội tuyển West Ham United và Dynamo FCC, Arkady ( Ray Stevenson), tên cầm đầu cuộc cách mạng tại bang Sukovia ở nước Nga đã phong tỏa toàn bộ sân vận động khiến nội bất xuất, ngoại bất nhập để truy tìm kẻ thù. Trong đám đông có mặt tại đó, Mike Knox ( Dave Bautista) và đứa cháu của mình Danni ( Lara Peake) đã vô tình có mặt tại trận cầu sống còn và phải đối mặt với băng nhóm nguy hiểm của tên Arkady. Liệu Mike có kịp thời ngăn chăn Arkady trước khi hắn tìm thấy Dimitri? Sự sống của 35,000 người có mặt tại sân vận động và người dân nước Nga phụ thuộc cả vào anh.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-07T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/tran-bong-kinh-hoang.jpg'
    },
    {
        MaPhim: 381,
        TenPhim: 'BAO GIỜ HẾT Ế',
        Trailer: 'https://www.youtube.com/watch?v=t5TG6DAdiyI',
        MoTa: 'Thiên Kim, 29 tuổi, là nhà quản lý khách sạn tài ba, một cô gái rất hiện đại, độc lập. Tuy nhiên, cô nàng thường xuyên bị gia đình mình: bà cố, bà ngoại và mẹ thúc giục chuyện hẹn hò, cưới xin. Những tưởng anh chàng Johnny là định mệnh của đời mình, người có thể cùng cô vượt qua "cái huông" chết chóc của gia tộc, Thiên Kim tin tưởng trao cho anh ta chiếc nhẫn gia bảo. Không ngờ, Johnny chỉ là kẻ lừa tình chuyên nghiệp. Trong lúc bối rối tìm kiếm Johnny, định mệnh đã khiến Kim gặp Hòa – chàng tài xế taxi thân thiện, đa tài, anh đang cần tiền chữa bệnh cho mẹ. Kim đề nghị Hòa giả làm bạn trai, về ra mắt nhà mình. Từ đây mọi chuyện dở khóc dở cười liên tục diễn ra.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-14T00:00:00',
        DanhGia: 4,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/bao-gio-het-e.jpg'
    },
    {
        MaPhim: 383,
        TenPhim: 'TAD TRUY TÌM KHO BÁU: BÍ MẬT CỦA VUA MIDAS',
        Trailer: 'https://www.youtube.com/watch?v=mgsw_5DUMIo',
        MoTa: 'Sau khi Sara – một nhà khảo cổ học trẻ tuổi – tìm thấy 1 trong 3 mảnh vòng cổ của Vua Midas, sự thật về việc ông ta sẽ biến tất cả mọi thứ mình chạm vào thành vàng đã được chứng minh, Tad quyết định đến tham gia triển lãm của cô ở Las Vegas. Tuy nhiên kẻ độc ác Jack Rackham cùng đồng bọn đã bắt cóc Sara và ăn trộm mảnh vòng cổ với tham vọng sẽ được kế thừa năng lực và của cải bao la của Vua Midas. Tad phải làm gì để cứu được Sara và phá vỡ âm mưu của Rackham? Cùng chờ đón chuyến phiêu lưu đi qua một nửa thế giới của Tad tới Tây Ban Nha, Hy Lạp, Thổ Nhĩ Kỳ,... với những người bạn Xác Ướp, vẹt Belzoni và chú chó Jeff.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-14T00:00:00',
        DanhGia: 4,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/tad-truy-tim-kho-bau-bi-mat-cua-vua-midas.png'
    },
    {
        MaPhim: 385,
        TenPhim: 'PROJECT GUTENBERG',
        Trailer: 'https://www.youtube.com/watch?v=qFyY27jar1U',
        MoTa: 'Cảnh sát Hồng Kông đã phá vỡ một phi vụ tiền giả động trời và bắt được Lee Man, một thành viên chủ chốt của đường dây tiền giả khi hắn đang chạy trốn sang Thái Lan. Các thanh tra cảnh sát đang nỗ lực tìm ra chân tưóng của Painter, kẻ chủ mưu đứng đầu băng đảng làm tiền giả từ lời khai của Lee Man. Bất chấp sự truy đuổi mạnh mẽ của cảnh sát, băng đảng của Painter lừa mua được giấy in tiền và cướp được một xe tải chở mực bảo mật để sản xuất hàng loạt các tờ tiền đô giả có thể qua mặt được cả những chuyên gia tiền tệ. Sở cảnh sát nhận ra họ phải đối mặt với một kẻ thù mạnh hơn họ tưởng...',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-10-12T00:00:00',
        DanhGia: 4,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/project-gutenberg.jpg'
    },
    {
        MaPhim: 386,
        TenPhim: 'Sinh Vật Huyền Bí: Tội Ác Của GrindelWald',
        Trailer: 'https://www.youtube.com/watch?v=Aa9-FP1pbd8',
        MoTa: 'Sinh Vật Huyền Bí: Tội Ác Của GrindelWald dự kiến khởi chiếu ngày 16.11.2018',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-11-16T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/sinh-vat-huyen-bi-toi-ac-cua-grindelwald.jpg'
    },
    {
        MaPhim: 387,
        TenPhim: 'ROBIN HOOD',
        Trailer: 'https://www.youtube.com/watch?v=zwPn9ZnbCo0',
        MoTa: 'ROBIN xứ Loxley (Taron Egerton), chàng chiến binh mạnh mẽ cùng chỉ huy người Moor (Jamie Foxx) khởi đầu cuộc nổi dậy táo bạo chống lại Vương triều Anh đã ngập tràn nhiễu nhương. Một cuộc phiêu lưu hành động ly kỳ mở ra những chiến trường khốc liệt, những trận chiến đấu hùng tráng và một mối tình vượt thời gian.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-11-23T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/robin-hood.jpg'
    },
    {
        MaPhim: 388,
        TenPhim: 'Wreck-It Ralph 2',
        Trailer: 'https://www.youtube.com/watch?v=KHQhp2cGZtE',
        MoTa: 'Wreck-It Ralph 2 ',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-11-23T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/wreck-it-ralph-2.jpg'
    },
    {
        MaPhim: 391,
        TenPhim: 'AVENGERS 3: CUỘC CHIẾN VÔ CỰC',
        Trailer: 'https://www.youtube.com/watch?v=O4XbKp6kN2k',
        MoTa: 'Phim Avengers: Cuộc Chiến Vô Cực - Avengers: Infinity War 2018: Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-20T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/avengers-3-cuoc-chien-vo-cuc.jpg'
    },
    {
        MaPhim: 392,
        TenPhim: 'Đặc Vụ Kingsman 2: Tổ Chức Hoàng Kim ',
        Trailer: 'https://www.youtube.com/watch?v=95UVH7DJLgc',
        MoTa: 'Kingsman: Tổ Chức Hoàng Kim - phần thứ hai của siêu phẩm hành động - gián điệp “vạn người mê” Kingsman: The Secret Service công chiếu năm 2015. Ở thời điểm phim ra mắt, mật vụ Kingsman: The Secret Service như thổi một làn gió mới cho dòng phim điệp viên vốn đã cũ kỹ, thông qua kịch bản lôi cuốn, lời thoại dí dởm, cùng những trường đoạn hành động đẹp mắt và sáng tạo. Vẫn do đạo diễn kỳ cựu Matthew Vaugh cầm trịch, Kingsman: Tổ Chức Hoàng Kim hứa hẹn sẽ một lần nữa khiến cộng đồng fan “dậy sóng”.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-23T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/dac-vu-kingsman-2-to-chuc-hoang-kim.jpg'
    },
    {
        MaPhim: 393,
        TenPhim: 'THẾ GIỚI KHỦNG LONG 2: VƯƠNG QUỐC SỤP ĐỔ',
        Trailer: 'https://www.youtube.com/watch?v=whixKrf1M_k',
        MoTa: 'Khi tiến hành chiến dịch giải cứu những con khủng long khỏi tuyệt chủng vì thảm họa núi lửa, nhóm thám hiểm vô tình khám phá ra một âm mưu có thể khiến toàn bộ hành tinh đối mặt với một hiểm họa to lớn chưa từng thấy kể từ thời tiền sử.\n\nBốn năm sau thảm họa Công Viên kỷ Jura bị hủy diệt. Một vài con khủng long vẫn còn sống sót trong rừng trong khi Isla Nublar bị con người bỏ hoang. Lúc này, ngọn núi lửa tại vùng đất này bất ngờ hoạt động lại. Owen (Chris Pratt) và Claire (Bryce Dallas Howard) quyết định tiến hành chiến dịch giải cứu những con khủng long để cứu chúng khỏi nguy cơ tuyệt chủng. Không ngờ rằng, trong hành trình giải cứu những sinh vật khổng lồ này, họ phát hiện ra một bí mật kinh người, có thể gây diệt vong cho Trái Đất.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-30T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/the-gioi-khung-long-2-vuong-quoc-sup-do.jpg'
    },
    {
        MaPhim: 394,
        TenPhim: 'Lộ Mặt',
        Trailer: 'https://www.youtube.com/watch?v=yLZm8myPZFc',
        MoTa: 'Tham gia Lộ Mặt, Minh Luân vào vai Phong - kẻ buôn bán chất cấm. Trong một phi vụ, Phong gặp và rơi vào lưới tình với Trâm (Vĩnh Thuyên Kim). Trớ trêu thay, cô gái này lại có mối quan hệ đầy bi kịch với bố mẹ của Phong.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-09-29T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/lo-mat.jpg'
    },
    {
        MaPhim: 395,
        TenPhim: 'AQUAMAN: ĐẾ VƯƠNG ATLANTIS',
        Trailer: 'https://www.youtube.com/watch?v=WDkg3h8PCVU',
        MoTa: 'Arthur Curry là kết tinh tình yêu của một người đàn ông bình thường và vị nữ vương đại dương. Mặc dù không muốn dính líu vào cuộc tranh giành quyền lực của hoàng tộc nhưng rốt cuộc, anh vẫn phải đối mặt với người em cùng mẹ khác cha để quyết định xem ai sẽ là người ngồi lên ngai vàng.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-12-21T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/aquaman-de-vuong-atlantis.jpg'
    },
    {
        MaPhim: 396,
        TenPhim: 'X-MEN: DARK PHOENIX',
        Trailer: 'https://www.youtube.com/watch?v=XUIRrMRA-7s',
        MoTa: 'Jean Grey bắt đầu phát triển sức mạnh phi thường tiềm ẩn trong cơ thể và nó đã biến cô thành Dark Phoenix. Bây giờ X-Men sẽ phải xem xét cuộc sống của một thành viên trong nhóm liệu có đáng giá hơn tất cả mạng sống con người trên thế giới?',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2019-02-14T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/x-men-dark-phoenix.jpg'
    },
    {
        MaPhim: 422,
        TenPhim: 'MÙA HÈ KINH HOÀNG',
        Trailer: 'https://www.youtube.com/watch?v=esJbwOXyv_0',
        MoTa: 'Chuyện phim xoay quanh kỳ nghỉ hè định mệnh diễn ra vào năm 1984 của một nhóm bạn trẻ. Sau khi nghi ngờ nhân viên cảnh sát hàng xóm là kẻ giết người hàng loạt, nhóm quyết định dành cả mùa hè để theo dõi và thu thập bằng chứng vạch trần tội ác. Nhưng càng đến gần với sự thật, mọi chuyện càng trở nên nguy hiểm và mất kiểm soát.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-10-18T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/mua-he-kinh-hoang.jpg'
    },
    {
        MaPhim: 1004,
        TenPhim: 'Ted 3',
        Trailer: 'https://www.youtube.com/watch?v=HXkh7EOqcQ4',
        MoTa: 'Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he\'s a person in a court of law.',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-11-30T00:00:00',
        DanhGia: null,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/ted-3.jpg'
    },
    {
        MaPhim: 1007,
        TenPhim: 'Ted 6',
        Trailer: 'https://www.youtube.com/watch?v=HXkh7EOqcQ4',
        MoTa: 'Phim Ted 6 ',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-11-30T00:00:00',
        DanhGia: 5,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/ted-6.jpg'
    },
    {
        MaPhim: 1008,
        TenPhim: 'Ted 5',
        Trailer: 'https://www.youtube.com/watch?v=HXkh7EOqcQ4',
        MoTa: 'Phim Ted 5',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2018-11-28T00:00:00',
        DanhGia: 4,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/ted-5.jpg'
    },
    {
        MaPhim: 1377,
        TenPhim: 'Aligator',
        Trailer: 'https://www.youtube.com/watch?v=MyqZf8LiWvM',
        MoTa: 'ung cấp cho độc giả những từ vựng chủ đề Phim ảnh cũng như cách để miêu tả một bộ phim bằng tiếng Anh',
        MaNhom: 'GP03',
        NgayKhoiChieu: '2019-12-17T00:00:00',
        DanhGia: 4,
        HinhAnh: 'http://svcy2.myclass.vn/hinhanh/phim/aligator.png'
    }
]
  constructor() { }

  ngOnInit() {
  }
   ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      responsiveClass:true,
      responsive:{
        320:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:true
          },
          980:{
              items:5,
              nav:true,
          }
      }
  })
   }
}