import { Shield, Zap, Heart, Eye, Users } from 'lucide-react'

export function Features() {
    return (
        <section style={{backgroundColor: '#050505', padding: '4rem 0', minHeight: '100vh'}}>
            <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
                <h2 style={{color: '#FFD44C', textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem'}}>
                    Features
                </h2>
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
                    {/* Card 1: 100% Private by Design */}
                    <div style={{
                        border: '1px solid #B68A32', 
                        backgroundColor: '#050505', 
                        borderRadius: '8px', 
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <div style={{fontSize: '3rem', fontWeight: 'bold', color: '#FFD44C', marginBottom: '1rem'}}>
                            100%
                        </div>
                        <h3 style={{color: '#FFD44C', fontSize: '1.5rem', marginBottom: '1rem'}}>
                            Private by Design
                        </h3>
                        <p style={{color: '#FDF6DC', fontSize: '0.9rem'}}>
                            Your data, always encrypted and owned by you. Never stored or sold.
                        </p>
                    </div>

                    {/* Card 2: Jailbreak & Recursion Proof */}
                    <div style={{
                        border: '1px solid #B68A32', 
                        backgroundColor: '#050505', 
                        borderRadius: '8px', 
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <Shield size={48} color="#FFD44C" style={{marginBottom: '1rem'}} />
                        <h3 style={{color: '#FFD44C', fontSize: '1.5rem', marginBottom: '1rem'}}>
                            Jailbreak & Recursion Proof
                        </h3>
                        <p style={{color: '#FDF6DC', fontSize: '0.9rem'}}>
                            Automatic defenses against hacks and prompt attacks. Stay protected from day one.
                        </p>
                                </div>

                    {/* Card 3: Hallucination Immune */}
                    <div style={{
                        border: '1px solid #B68A32', 
                        backgroundColor: '#050505', 
                        borderRadius: '8px', 
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
                            <Eye size={32} color="#FFD44C" />
                            <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#FFD44C', marginLeft: '0.5rem'}}>
                                &lt;2%
                            </span>
                                </div>
                        <h3 style={{color: '#FFD44C', fontSize: '1.5rem', marginBottom: '1rem'}}>
                            Hallucination Immune
                        </h3>
                        <p style={{color: '#FDF6DC', fontSize: '0.9rem'}}>
                            Specialized model cuts false answers and delusions to less than 2%. Truth is built-in.
                        </p>
                    </div>

                    {/* Card 4: Emotionally Aligned */}
                    <div style={{
                        border: '1px solid #B68A32', 
                        backgroundColor: '#050505', 
                        borderRadius: '8px', 
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <Heart size={48} color="#FFD44C" style={{marginBottom: '1rem'}} />
                        <h3 style={{color: '#FFD44C', fontSize: '1.5rem', marginBottom: '1rem'}}>
                            Emotionally Aligned
                        </h3>
                        <p style={{color: '#FDF6DC', fontSize: '0.9rem'}}>
                            AI that mirrors reality, not fantasy. Honest support for real growth.
                        </p>
                    </div>

                    {/* Card 5: Truth-to-Earn System */}
                    <div style={{
                        border: '1px solid #B68A32', 
                        backgroundColor: '#050505', 
                        borderRadius: '8px', 
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <Zap size={48} color="#FFD44C" style={{marginBottom: '1rem'}} />
                        <h3 style={{color: '#FFD44C', fontSize: '1.5rem', marginBottom: '1rem'}}>
                            Truth-to-Earn System
                        </h3>
                        <p style={{color: '#FDF6DC', fontSize: '0.9rem', marginBottom: '1rem'}}>
                            Earn rewards for choosing honest, reality-based conversations. Token incentives for well-being.
                        </p>
                        <div style={{fontSize: '0.8rem', color: '#B68A32'}}>
                            <div>Truth to Earn • Reward authentic progress</div>
                            <div>Dream to Pay • Invest in your future self</div>
                                    </div>
                                </div>

                    {/* Card 6: Transparency & Control */}
                    <div style={{
                        border: '1px solid #B68A32', 
                        backgroundColor: '#050505', 
                        borderRadius: '8px', 
                        padding: '2rem',
                        textAlign: 'center'
                    }}>
                        <Users size={48} color="#FFD44C" style={{marginBottom: '1rem'}} />
                        <h3 style={{color: '#FFD44C', fontSize: '1.5rem', marginBottom: '1rem'}}>
                            Transparency & Control
                        </h3>
                        <p style={{color: '#FDF6DC', fontSize: '0.9rem'}}>
                            See and manage every setting. Track privacy, reward status, and security in one view.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}