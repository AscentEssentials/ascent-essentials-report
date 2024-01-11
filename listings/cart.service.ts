@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    apiUrl = environment.apiUrl
  
    constructor(private http: HttpClient) { }
  
    getCart(token: string): Observable<Cart>{
      const headers =
        new HttpHeaders().set('Authorization', `Bearer ${token}`)
      return this.http.get<Cart>(`${this.apiUrl}/cart`, {headers})
    }
}