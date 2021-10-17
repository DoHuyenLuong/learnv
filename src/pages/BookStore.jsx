import '../assets/styles/BookStore.css'
import { Footer } from '../components'
import { useEffect, useState } from 'react'
import { Card, Badge } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import ReactLoading from 'react-loading'

const BookStore = (props) => {

    const [ bookList, setBookList ] = useState({page: 0, books: []})

    const fetchMoreBooks = async () => {
        const data = await (await fetch(`https://api.itbook.store/1.0/search/html?page=${Math.floor(bookList.books.length/10) + 1}`)).json()
        setBookList({...data, books: [...bookList.books, ...data.books]})
    }

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/html`)
        .then(res => res.json())
        .then(data => setBookList(data))
    }, [])

    return <>
        <InfiniteScroll
            dataLength={bookList?.books?.length}
            next={fetchMoreBooks}
            hasMore={bookList?.page < Math.ceil(bookList?.total/10)}
            loader={<ReactLoading type="bubbles" color="#000000" className="m-auto"/>}
        >
            <div className="container-xl mt-5">
                <div>
                    <h3 className="mt-5 mb-3 border-bottom border-danger d-inline-block border-4 lh-base">Book store</h3>
                </div>

                <div className="row min-vh-100">
                    {
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
                    }                    
                </div>
            </div>        
        </InfiniteScroll>
        <Footer className="mt-5"/>
    </>
}

export default BookStore