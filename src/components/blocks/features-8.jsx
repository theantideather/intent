import { Card, CardContent } from '../ui/card'
import { Shield, Brain, Lock, Home, Zap } from 'lucide-react'

export function Features() {
    return (
        <section className="bg-[#050505] py-16 md:py-32">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 border-[#B68A32] bg-[#050505]">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center">
                                    <Brain className="text-[#FFD44C] absolute inset-0 size-full m-auto" size={80} />
                                    <span className="mx-auto block w-fit text-5xl font-semibold text-[#FFD44C]">&lt;2%</span>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold text-[#FFD44C]">Hallucination Rate</h2>
                                <p className="mt-2 text-center text-[#FDF6DC]">Advanced AI with specialized emotional alignment</p>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#B68A32] bg-[#050505]">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border-[#B68A32] before:absolute before:-inset-2 before:rounded-full before:border-[#B68A32]">
                                    <Lock className="m-auto h-fit w-24 text-[#FFD44C]" size={80} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-[#FFD44C]">Zero-Knowledge Privacy</h2>
                                    <p className="text-[#FDF6DC]">End-to-end encrypted, only you can access your chats</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-[#B68A32] bg-[#050505]">
                            <CardContent className="pt-6">
                                <div className="pt-6 lg:px-6">
                                    <Shield className="w-full h-24 text-[#FFD44C] mx-auto" size={120} />
                                </div>
                                <div className="relative z-10 mt-14 space-y-2 text-center">
                                    <h2 className="text-lg font-medium transition text-[#FFD44C]">Jailbreak Immunization</h2>
                                    <p className="text-[#FDF6DC]">Automated prompt shields & recursion protection</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#B68A32] bg-[#050505]">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border-[#B68A32] before:absolute before:-inset-2 before:rounded-full before:border-[#B68A32]">
                                        <Home className="m-auto size-5 text-[#FFD44C]" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-[#FFD44C] transition">Local Deployment</h2>
                                        <p className="text-[#FDF6DC]">No cloud, no leaks - all data stays on your device</p>
                                    </div>
                                </div>
                                <div className="relative -mb-6 -mr-6 mt-6 h-fit border-l border-t border-[#B68A32] p-6 py-6 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border-[#B68A32] bg-[#FFD44C]"></span>
                                        <span className="block size-2 rounded-full border-[#B68A32] bg-[#FFD44C]"></span>
                                        <span className="block size-2 rounded-full border-[#B68A32] bg-[#FFD44C]"></span>
                                    </div>
                                    <div className="text-center mt-8">
                                        <Home className="w-16 h-16 text-[#FFD44C] mx-auto mb-4" />
                                        <p className="text-[#FDF6DC] text-sm">Your device, your data, your control</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-[#B68A32] bg-[#050505]">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border-[#B68A32] before:absolute before:-inset-2 before:rounded-full before:border-[#B68A32]">
                                        <Zap className="m-auto size-6 text-[#FFD44C]" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium text-[#FFD44C] transition">Token Economics</h2>
                                        <p className="text-[#FDF6DC]">Truth to Earn & Dream to Pay for mental resilience</p>
                                    </div>
                                </div>
                                <div className="relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px before:bg-[#B68A32] sm:-my-6 sm:-mr-6">
                                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                        <div className="text-center">
                                            <Zap className="w-12 h-12 text-[#FFD44C] mx-auto mb-4" />
                                            <p className="text-[#FDF6DC] text-sm">Earn tokens for real growth</p>
                                        </div>
                                        <div className="text-center">
                                            <span className="text-[#FFD44C] text-lg font-semibold">Truth to Earn</span>
                                            <p className="text-[#FDF6DC] text-xs">Reward authentic progress</p>
                                        </div>
                                        <div className="text-center">
                                            <span className="text-[#FFD44C] text-lg font-semibold">Dream to Pay</span>
                                            <p className="text-[#FDF6DC] text-xs">Invest in your future self</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
