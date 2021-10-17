import '../assets/styles/BookStore.css'
import { Footer } from '../components'
// import { useEffect, useState } from 'react'
import { Card, Badge } from 'react-bootstrap'
// import InfiniteScroll from 'react-infinite-scroll-component'
// import ReactLoading from 'react-loading'

const books = [
    {
        title: "Tự Học Tiếng Trung Cho Người Mới Bắt Đầu",
        subtitle: "NXB Đại Học Quốc Gia Hà Nội",
        price: "68.000 đ",
        image: "https://cdn0.fahasa.com/media/catalog/product/t/u/tu_hoc_tieng_trung_cho_nguoi_moi_bat_dau_tai_ban_1_2018_08_07_09_33_42.JPG",
        url: "https://www.fahasa.com/tu-hoc-tieng-trung-cho-nguoi-moi-bat-dau-tai-ban.html?fhs_campaign=COLA_TMDT_HETHONG&attempt=1"
    },
    {
        title: "301 câu đàm thoại tiếng Hoa",
        subtitle: "NXB Khoa Học Xã Hội",
        price: "65.000 đ",
        image: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_179234.jpg",
        url: "https://www.fahasa.com/301-cau-dam-thoai-tieng-hoa-tai-ban-2018.html?utm_source=accesstrade&aff_sid=iSzrHXczotC253YOQPPt2ep1gPaUdDkrBx8WMMXFom6TvpiU&attempt=1"
    },
    {
        title: "Tự học từ vựng tiếng Nhật theo chủ đề",
        subtitle: "NXB Hồng Đức",
        price: "86.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2019/08/bia1.jpg",
        url: "https://mcbooks.vn/san-pham/tu-hoc-tu-vung-tieng-nhat-theo-chu-de-2/"
    },
    {
        title: "Luyện từ vựng tiếng Nhật Daichi Nihongo 1",
        subtitle: "NXB Hồng Đức",
        price: "170.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2018/09/Bia-Daichi-giao-trinh-so-cap-1-truoc.jpg",
        url: "https://mcbooks.vn/san-pham/giao-trinh-tieng-nhat-daichi-so-cap-1/"
    },
    {
        title: "Nhớ từ vựng nhanh như Shinkansen",
        subtitle: "NXB Hồng Đức",
        price: "259.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2020/11/bia-tr%C6%B0%E1%BB%9Bc-.png",
        url: "https://mcbooks.vn/san-pham/nho-tu-vung-nhanh-nhu-shinkanzen/"
    },
    {
        title: "Học nhanh nhớ lâu từ vựng tiếng Hàn qua tranh",
        subtitle: "NXB Hồng Đức",
        price: "259.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2020/12/BIA-TH-Qua-tranh-SGK.png",
        url: "https://mcbooks.vn/san-pham/hoc-nhanh-nho-lau-tu-vung-tieng-han-qua-tranh/"
    },
    {
        title: "3000 từ vựng tiếng Hàn theo chủ đề",
        subtitle: "NXB Hồng Đức",
        price: "84.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2017/10/15.-3000-T%E1%BB%AB-v%E1%BB%B1ng-ti%E1%BA%BFng-h%C3%A0n-theo-ch%E1%BB%A7-%C4%91%E1%BB%81-bia-truoc.png",
        url: "https://mcbooks.vn/san-pham/3000-tu-vung-tieng-han-theo-chu-de/"
    },
    {
        title: "Mindmap English Vocabulary - Từ vựng tiếng anh qua sơ đồ tư duy",
        subtitle: "NXB Hồng Đức",
        price: "198.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2021/01/2757a8a36844981ac155.jpg",
        url: "https://mcbooks.vn/san-pham/mind-map-english-vocabulary-tu-vung-tieng-anh-qua-so-do-tu-duy/"
    },
    {
        title: "Ứng dụng siêu trí nhớ 6000 từ vựng tiếng Anh thông dụng nhất",
        subtitle: "NXB Hồng Đức",
        price: "158.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2019/05/ung-dung-sieu-tri-nho-6000-tu-vung-tieng-anh-thong-dung-nhat.png",
        url: "https://mcbooks.vn/san-pham/ung-dung-sieu-tri-nho-6000-tu-vung-tieng-anh-thong-dung-nhat/"
    },
    {
        title: "Easy vocabulary for daily life – Ai bảo từ vựng khó",
        subtitle: "NXB Hồng Đức",
        price: "229.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2019/04/Easy-vocabulary-for-daily-life-bia-truoc.jpg",
        url: "https://mcbooks.vn/san-pham/joyful-english-easy-vocabulary-for-daily-life-ai-bao-tu-vung-la-kho-nho/"
    },
    {
        title: "2200 từ vựng tiếng anh thông dụng nhất",
        subtitle: "NXB Hồng Đức",
        price: "178.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2020/02/2200-tu-vung-tieng-anh.jpg",
        url: "https://mcbooks.vn/san-pham/2200-tu-vung-tieng-anh-thong-dung-nhat/"
    },
    {
        title: "Luyện siêu trí nhớ từ vựng tiếng anh",
        subtitle: "NXB Đại học Quốc gia Hà Nội",
        price: "188.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2019/07/luyen-sieu-tri-nho-tieng-anh.jpg",
        url: "https://mcbooks.vn/san-pham/luyen-sieu-tri-nho-tu-vung-tieng-anh-chin/"
    },
    {
        title: "Tự học tiếng Nhật dành cho người bắt đầu",
        subtitle: "NXB Hồng Đức",
        price: "105.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2019/04/bia-truoc-4.png",
        url: "https://mcbooks.vn/san-pham/tu-hoc-tieng-nhat-danh-cho-nguoi-moi-bat-dau-2/"
    },
    {
        title: "Ngữ pháp tiếng Hàn thông dụng cao cấp",
        subtitle: "NXB Hồng Đức",
        price: "285.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2019/02/Bia-truoc.png",
        url: "https://mcbooks.vn/san-pham/ngu-phap-tieng-han-thong-dung-cao-cap/"
    },
    {
        title: "Học từ vựng tiếng nhật qua hội thoại giao tiếp",
        subtitle: "NXB Hồng Đức",
        price: "175.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2021/03/bia-1-hoi-thoai-tu-vung.png",
        url: "https://mcbooks.vn/san-pham/hoc-tu-vung-tieng-nhat-qua-hoi-thoai-giao-tiep/"
    },
    {
        title: "Học nhanh nhớ lâu giao tiếp tiếng Trung",
        subtitle: "NXB Hồng Đức",
        price: "145.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2021/10/hnnl-1.png",
        url: "https://mcbooks.vn/san-pham/hoc-nhanh-nho-lau-giao-tiep-tieng-trung-in-mau-hoc-kem-app-online/"
    },
    {
        title: "3000 từ vựng tiếng trung thông dụng",
        subtitle: "NXB Hồng Đức",
        price: "120.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2021/01/3000-Tu-vung-Tieng-Trung-thong-dung-bia-truoc.png",
        url: "https://mcbooks.vn/san-pham/3000-tu-vung-tieng-trung-thong-dung/"
    },
    {
        title: "5000 từ vựng tiếng hàn thông dụng",
        subtitle: "NXB Hồng Đức",
        price: "120.000 đ",
        image: "https://mcbooks.vn/wp-content/uploads/2018/10/BIA-TRUOC-5000-TU-VUNG-TIENG-HAN.png",
        url: "https://mcbooks.vn/san-pham/5000-tu-vung-tieng-han-thong-dung/"
    },
]

const BookStore = (props) => {

    // const [ bookList, setBookList ] = useState({page: 0, books: []})

    // const fetchMoreBooks = async () => {
    //     const data = await (await fetch(`https://api.itbook.store/1.0/search/html?page=${Math.floor(bookList.books.length/10) + 1}`)).json()
    //     setBookList({...data, books: [...bookList.books, ...data.books]})
    // }

    // useEffect(() => {
    //     fetch(`https://api.itbook.store/1.0/search/html`)
    //     .then(res => res.json())
    //     .then(data => setBookList(data))
    // }, [])

    return <>
        {/* <InfiniteScroll
            dataLength={bookList?.books?.length}
            next={fetchMoreBooks}
            hasMore={bookList?.page < Math.ceil(bookList?.total/10)}
            loader={<ReactLoading type="bubbles" color="#000000" className="m-auto"/>}
        > */}
        <div className="container-xl mt-5">
            <div>
                <h3 className="mt-5 mb-3 border-bottom border-danger d-inline-block border-4 lh-base">Book store</h3>
            </div>

            <div className="row min-vh-100">
                {/* {
                    bookList?.books?.map((book, index) => <a href={book.url} target="_blank" rel="noreferrer" className="col-sm-6 col-md-4 mt-3 text-body" key={index}>
                        <Card className="h-100 book-item-container">
                            <Card.Img variant="top" src={book.image} />
                            <Card.Body>
                                <Card.Title className="title">{book.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <Badge pill bg="warning" text="dark">{book.price}</Badge>
                                </Card.Subtitle>
                                <Card.Text>{book.subtitle}</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>)
                } */}

                {
                    
                    books?.map((book, index) => <a href={book.url} target="_blank" rel="noreferrer" className="col-sm-6 col-md-4 col-lg-3 mt-3 text-body" key={index}>
                        <Card className="h-100 book-item-container">
                            <Card.Img variant="top" src={book.image} style={{objectFit: 'scale-down', height: '300px'}}/>
                            <Card.Body>
                                <Card.Title className="title">{book.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <Badge pill bg="warning" text="dark">{book.price}</Badge>
                                </Card.Subtitle>
                                <Card.Text>{book.subtitle}</Card.Text>
                            </Card.Body>
                        </Card>
                    </a>)
                }
            </div>
        </div>
        {/* </InfiniteScroll> */}
        <Footer className="mt-5" />
    </>
}

export default BookStore