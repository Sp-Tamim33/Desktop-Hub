import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5 px-10 mt-16'>
            <div className='border-2 p-5'>
                <h1 className='text-4xl'>  <u>Question :</u> What is Context API ?</h1>
                <p className='text-2xl mt-10'><u>Answer :</u> সাধারণ ভাবে আমরা কোনো কপোনেন্ট থেকে আন্য কপোনেন্টে ডাটা পাঠাতে হলে Props Drilling করে ডাটা পাঠাই। Context Api দিয়ে এক কপোনেন্ট থেকে আরেক কপোনেন্টে সরাসরি ডাটা পাঠানো যায়। Context Api ব্যবহার করে আমরা মধ্যবর্তী কপোনেন্ট গুলোতে প্রপস পাস করা এড়াতে পারি। শুধু মাত্র প্রয়োজনীয় কপোনেন্ট গুলোতে সরাসরি ডাটা পাঠাতে পারি।</p>
            </div>
            <div className='border-2 p-5'>
                <h1 className='text-4xl'>  <u>Question :</u> What is Semantic Tag ?</h1>
                <p className='text-2xl mt-10'><u>Answer :</u> Semantic tag দ্বারা HTML tag এর অর্থ স্পষ্টভাবে বর্ণনা করে। যেমন, আমরা website এ ভিডিও প্রদর্শন এর জন্য <b>video</b>tag ব্যবহার করব, website এ অডিও প্রদর্শন এর জন্য <b>audio</b>tag ব্যবহার করব, তাছাড়া বিভিন্ন পোস্ট লেখার জন্য <b>blog, artical</b>tag ব্যবহার করতে পারি।</p>
            </div>
            <div className='border-2 p-5'>
                <h1 className='text-4xl'>  <u>Question :</u> Inline block vs block ?</h1>
                <p className='text-2xl mt-10'><u>Answer :</u> যে ট্যাগ গুলো block তারা পুরু ওয়েবসাইটের width নিয়ে নেয়, আর যে ট্যাগ গুলো inline-block তারা শুধু, ট্যাগ এর ভিতর যতটুকু লেখা আছে ততটুকু width নিবে।</p>
            </div>
        </div>
    );
};

export default Blogs;