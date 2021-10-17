import { Card, Badge } from 'react-bootstrap'
import { Footer } from '../components'
import AvtLuong from '../assets/images/avt-luong.jpeg'
import AvtChang from '../assets/images/avt-chang.jpeg'
import AvtPhuong from '../assets/images/avt-phuong.jpeg'
import AvtThuPhuong from '../assets/images/avt-thu-phuong.jpeg'
import AvtDuyen from '../assets/images/avt-duyen.jpeg'
import AvtMen from '../assets/images/avt-men.jpeg'

const members = [
    { id: 1, avtUrl: AvtLuong, name: "Đỗ Huyền Lương", role: "Nhóm trưởng", major: "Thương mại điện tử", description: "Châm ngôn sống: Chẳng bao giờ là quá muộn, chỉ là chưa muốn bắt đầu thôi." },
    { id: 2, avtUrl: AvtChang, name: "Hoàng Thị Thảo Chang", role: "Thành viên", major: "Thương mại điện tử", description: "Châm ngôn sống: Thất bại đơn chỉ giản như cơ hội bắt đầu lại một cách thông minh hơn." },
    { id: 3, avtUrl: AvtPhuong, name: "Lê Thị Phương", role: "Thành viên", major: "Thương mại điện tử", description: "Châm ngôn sống: Nếu bạn không bước đi vào hôm nay, bạn sẽ phải chạy vào ngày mai." },
    { id: 4, avtUrl: AvtThuPhuong, name: "Dương Thu Phương", role: "Thành viên", major: "Thương mại điện tử", description: "Châm ngôn sống: Một khi bạn ngừng học tập thì bạn sẽ không thể thành công." },
    { id: 5, avtUrl: AvtDuyen, name: "Đồng Thị Hồng Duyên", role: "Thành viên", major: "Thương mại điện tử", description: "Châm ngôn sống: Nơi nào có ý chí nơi đó có con đường!" },
    { id: 6, avtUrl: AvtMen, name: "Vũ Thị Hồng Mến", role: "Thành viên", major: "Thương mại điện tử", description: "Châm ngôn sống: Hãy tin rằng bạn có thể và bạn đã đang ở nửa chặng đường rồi." },
]

const AboutPage = (props) => {
    return <>
        <div className="container-xl mt-5" style={{textAlign: 'justify'}}>
            <h3 className="mt-5 mb-3 border-bottom border-danger d-inline-block border-4 lh-base">About app</h3>
            <p>Bạn đam mê ngoại ngữ, bạn muốn trau dồi vốn từ vựng của bản thân nhưng bạn lại
                chưa biết cách làm thế nào để nhớ được nhiều từ vựng cũng như chưa chưa tìm được
                nguồn tài liệu phù hợp với bản thân? Để giải quyết những trăn trở đó của bạn chúng tôi – những người
                tạo ra Learn V này nhằm mục đích giúp bạn tạo từ vựng ngoại ngữ để tự học có thể
                tạo theo chủ đề hoặc theo bài mà bạn thích; giúp bạn tìm kiếm các cuốn
                sách ngoại ngữ hay mà không cần tốn nhiều thời gian
                đi tìm hiểu các nguồn sách tràn lan trên mạng. Hơn nữa tại LearnV bạn có thể xem
                các học phần người khác tạo, từ đó bạn học được thêm nhiều
                từ mới hơn bổ sung cho vốn từ vựng của bạn!!!
            </p>

            <h3 className="mt-3 mb-5 border-bottom border-danger d-inline-block border-4 lh-base">Our team</h3>
            <div className="row">
                {
                    members?.map((member, index) =>
                        <div className="col-sm-6 col-md-4 mt-3">
                            <Card className="h-100">
                                <Card.Img variant="top" src={member.avtUrl} />
                                <Card.Body>
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <Badge pill bg="warning" text="dark">{member.role}</Badge>
                                    </Card.Subtitle>
                                    <Card.Text>{member.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>)
                }
            </div>
        </div>
        <Footer className="mt-4"/>
    </>
}

export default AboutPage