export interface Islidbar {
    active:string;
    text:string;
     Icon:string;
}
interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
	name:string;
	username: string;
	userAvatarUrl: string;
	description: string;
	imageUrl: string;
	date: Date;
	likeCount: number;
	comments: IComment[];
}
export const posts: IPost[] = [
	{
        
		id: '1',
		username: '@TuwaiqAcademy',
		name:'Tuwaiq Academy | أكاديمية طويق',
		userAvatarUrl: 'https://pbs.twimg.com/profile_images/1533811878576652290/E3L9qI4x_400x400.jpg',
		description:`تعرّف على آلية بناء الابتكارات الرقمية، واكتشف احتياجات العملاء وأكثر الفرص جاذبية،
		وذلك من خلال دورة "الابتكار الرقمي" من`,
		imageUrl:'https://pbs.twimg.com/media/FZQRtcLWQAEE8T1?format=jpg&name=large',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},
    {
        
		id: '2',
		username: '@SaudiNews50',
		name: 'أخبار السعودية',
		userAvatarUrl: 'https://pbs.twimg.com/profile_images/1351852829108015112/hR7fuFKQ_400x400.jpg',
		description: `رسميًا:
		إتاحة الفرصة للطالب للحصول على أكثر من شهادة بكالوريوس.`,
		imageUrl:'',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	}
]
// export const slidbar:Islidbar [] = [
// 	{}]