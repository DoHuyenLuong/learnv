import '../assets/styles/BookStore.css'
import { Footer } from '../components'
import { useEffect, useState, useCallback } from 'react'
import { Card, Badge } from 'react-bootstrap'
import InfiniteScroll from "react-infinite-scroll-component"

const BookStore = (props) => {

    const [ total, setTotal ] = useState(10)
    const [ page, setPage ] = useState(1)
    const [ books, setBooks ] = useState([])

    const fetchMoreBooks = useCallback(() => {
        if(page > Math.ceil(total/10)) return
        fetch(`https://api.itbook.store/1.0/search/html?page=${page}`)
        .then(res => res.json())
        .then(data => {
            setPage(page+1)
            setTotal(data.total)
            setBooks(books => [...books, ...data.books])
        })   
    }, [page, total])

    useEffect(() => {
        fetchMoreBooks()
    }, [fetchMoreBooks])


    return <InfiniteScroll
        dataLength={books.length}
        hasMore={page < Math.ceil(total/10)}
        loader={<h4>Loading...</h4>}
        next={fetchMoreBooks}    
    >
        <div className="container-xl mt-5">
            <div>
                <h3 className="mt-5 mb-3 border-bottom border-danger d-inline-block border-4 lh-base">Book store</h3>
            </div>

            <div className="row min-vh-100">
                {
                    books.map((book, index) => <a href={book.url} target="_blank" rel="noreferrer" className="col-sm-6 col-md-4 mt-3 text-body" key={index}>
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
        <Footer className="mt-5"/>
    </InfiniteScroll>
}

export default BookStore